import path from "path";
import { ImmutableNotebook, ImmutableCodeCell } from "@nteract/commutable";
import { NotebookContentItem, NotebookContentItemType } from "./NotebookContentItem";
import { StringUtils } from "../../Utils/StringUtils";
import * as GitHubUtils from "../../Utils/GitHubUtils";

// Must match rx-jupyter' FileType
export type FileType = "directory" | "file" | "notebook";
// Utilities for notebooks
/**
 * It's a notebook file if the filename ends with .ipynb.
 */
export function isNotebookFile(notebookPath: string): boolean {
  const fileName = getName(notebookPath);
  return !!fileName && StringUtils.endsWith(fileName, ".ipynb");
}

/**
 * Note: this does not connect the item to a parent in a tree.
 * @param name
 * @param path
 */
export function createNotebookContentItem(name: string, path: string, type: FileType): NotebookContentItem {
  return {
    name,
    path,
    type: getType(type),
    timestamp: getCurrentTimestamp(),
  };
}

/**
 * Convert rx-jupyter type to our type
 * @param type
 */
export function getType(type: FileType): NotebookContentItemType {
  switch (type) {
    case "directory":
      return NotebookContentItemType.Directory;
    case "notebook":
      return NotebookContentItemType.Notebook;
    case "file":
      return NotebookContentItemType.File;
    default:
      throw new Error(`Unknown file type: ${type}`);
  }
}

export function getCurrentTimestamp(): number {
  return new Date().getTime();
}

/**
 * Override from kernel-lifecycle.ts to improve kernel selection:
 * Only return the kernel name persisted in the notebook
 *
 * @param filepath
 * @param notebook
 */
export function extractNewKernel(filepath: string | null, notebook: ImmutableNotebook) {
  const cwd = (filepath && path.dirname(filepath)) || "/";

  const kernelSpecName =
    notebook.getIn(["metadata", "kernelspec", "name"]) || notebook.getIn(["metadata", "language_info", "name"]);

  return {
    cwd,
    kernelSpecName,
  };
}

export function getFilePath(path: string, fileName: string): string {
  const contentInfo = GitHubUtils.fromContentUri(path);
  if (contentInfo) {
    let path = fileName;
    if (contentInfo.path) {
      path = `${contentInfo.path}/${path}`;
    }
    return GitHubUtils.toContentUri(contentInfo.owner, contentInfo.repo, contentInfo.branch, path);
  }

  return `${path}/${fileName}`;
}

export function getParentPath(filepath: string): undefined | string {
  const basename = getName(filepath);
  if (basename) {
    const contentInfo = GitHubUtils.fromContentUri(filepath);
    if (contentInfo) {
      const parentPath = contentInfo.path.split(basename).shift();
      if (parentPath === undefined) {
        return undefined;
      }

      return GitHubUtils.toContentUri(
        contentInfo.owner,
        contentInfo.repo,
        contentInfo.branch,
        parentPath.replace(/\/$/, "") // no trailling slash
      );
    }

    const parentPath = filepath.split(basename).shift();
    if (parentPath) {
      return parentPath.replace(/\/$/, ""); // no trailling slash
    }
  }

  return undefined;
}

export function getName(path: string): undefined | string {
  let relativePath: string = path;
  const contentInfo = GitHubUtils.fromContentUri(path);
  if (contentInfo) {
    relativePath = contentInfo.path;
  }

  return relativePath.split("/").pop();
}

export function replaceName(path: string, newName: string): string {
  const contentInfo = GitHubUtils.fromContentUri(path);
  if (contentInfo) {
    const contentName = contentInfo.path.split("/").pop();
    if (!contentName) {
      throw new Error(`Failed to extract name from github path ${contentInfo.path}`);
    }

    const basePath = contentInfo.path.split(contentName).shift();
    return GitHubUtils.toContentUri(contentInfo.owner, contentInfo.repo, contentInfo.branch, `${basePath}${newName}`);
  }

  const contentName = path.split("/").pop();
  if (!contentName) {
    throw new Error(`Failed to extract name from path ${path}`);
  }

  const basePath = path.split(contentName).shift();
  return `${basePath}${newName}`;
}

export function findFirstCodeCellWithDisplay(notebookObject: ImmutableNotebook): number {
  let codeCellIndex = 0;
  for (let i = 0; i < notebookObject.cellOrder.size; i++) {
    const cellId = notebookObject.cellOrder.get(i);
    if (cellId) {
      const cell = notebookObject.cellMap.get(cellId);
      if (cell?.cell_type === "code") {
        const displayOutput = (cell as ImmutableCodeCell)?.outputs?.find(
          (output) => output.output_type === "display_data" || output.output_type === "execute_result"
        );
        if (displayOutput) {
          return codeCellIndex;
        }
        codeCellIndex++;
      }
    }
  }
  throw new Error("Output does not exist for any of the cells.");
}
