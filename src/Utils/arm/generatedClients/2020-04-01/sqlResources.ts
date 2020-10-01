/* 
  AUTOGENERATED FILE
  Do not manually edit
  Run "npm run generateARMClients" to regenerate
*/

import { armRequest } from "../../request";
import * as Types from "./types";
import { configContext } from "../../../../ConfigContext";
const apiVersion = "2020-03-01";

/* Lists the SQL databases under an existing Azure Cosmos DB database account. */
export async function listSqlDatabases(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string
): Promise<Types.SqlDatabaseListResult> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Gets the SQL database under an existing Azure Cosmos DB database account with the provided name. */
export async function getSqlDatabase(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string
): Promise<Types.SqlDatabaseGetResults> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Create or update an Azure Cosmos DB SQL database */
export async function createUpdateSqlDatabase(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  body: Types.SqlDatabaseCreateUpdateParameters
): Promise<Types.SqlDatabaseGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "PUT", apiVersion, body });
}

/* Deletes an existing Azure Cosmos DB SQL database. */
export async function deleteSqlDatabase(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string
): Promise<void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "DELETE", apiVersion });
}

/* Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name. */
export async function getSqlDatabaseThroughput(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string
): Promise<Types.ThroughputSettingsGetResults> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/throughputSettings/default`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Update RUs per second of an Azure Cosmos DB SQL database */
export async function updateSqlDatabaseThroughput(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  body: Types.ThroughputSettingsUpdateParameters
): Promise<Types.ThroughputSettingsGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/throughputSettings/default`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "PUT", apiVersion, body });
}

/* Migrate an Azure Cosmos DB SQL database from manual throughput to autoscale */
export async function migrateSqlDatabaseToAutoscale(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string
): Promise<Types.ThroughputSettingsGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/throughputSettings/default/migrateToAutoscale`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "POST", apiVersion });
}

/* Migrate an Azure Cosmos DB SQL database from autoscale to manual throughput */
export async function migrateSqlDatabaseToManualThroughput(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string
): Promise<Types.ThroughputSettingsGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/throughputSettings/default/migrateToManualThroughput`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "POST", apiVersion });
}

/* Lists the SQL container under an existing Azure Cosmos DB database account. */
export async function listSqlContainers(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string
): Promise<Types.SqlContainerListResult> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Gets the SQL container under an existing Azure Cosmos DB database account. */
export async function getSqlContainer(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<Types.SqlContainerGetResults> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Create or update an Azure Cosmos DB SQL container */
export async function createUpdateSqlContainer(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  body: Types.SqlContainerCreateUpdateParameters
): Promise<Types.SqlContainerGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "PUT", apiVersion, body });
}

/* Deletes an existing Azure Cosmos DB SQL container. */
export async function deleteSqlContainer(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "DELETE", apiVersion });
}

/* Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account. */
export async function getSqlContainerThroughput(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<Types.ThroughputSettingsGetResults> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/throughputSettings/default`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Update RUs per second of an Azure Cosmos DB SQL container */
export async function updateSqlContainerThroughput(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  body: Types.ThroughputSettingsUpdateParameters
): Promise<Types.ThroughputSettingsGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/throughputSettings/default`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "PUT", apiVersion, body });
}

/* Migrate an Azure Cosmos DB SQL container from manual throughput to autoscale */
export async function migrateSqlContainerToAutoscale(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<Types.ThroughputSettingsGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/throughputSettings/default/migrateToAutoscale`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "POST", apiVersion });
}

/* Migrate an Azure Cosmos DB SQL container from autoscale to manual throughput */
export async function migrateSqlContainerToManualThroughput(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<Types.ThroughputSettingsGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/throughputSettings/default/migrateToManualThroughput`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "POST", apiVersion });
}

/* Lists the SQL storedProcedure under an existing Azure Cosmos DB database account. */
export async function listSqlStoredProcedures(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<Types.SqlStoredProcedureListResult> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/storedProcedures`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Gets the SQL storedProcedure under an existing Azure Cosmos DB database account. */
export async function getSqlStoredProcedure(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  storedProcedureName: string
): Promise<Types.SqlStoredProcedureGetResults> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/storedProcedures/${storedProcedureName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Create or update an Azure Cosmos DB SQL storedProcedure */
export async function createUpdateSqlStoredProcedure(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  storedProcedureName: string,
  body: Types.SqlStoredProcedureCreateUpdateParameters
): Promise<Types.SqlStoredProcedureGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/storedProcedures/${storedProcedureName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "PUT", apiVersion, body });
}

/* Deletes an existing Azure Cosmos DB SQL storedProcedure. */
export async function deleteSqlStoredProcedure(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  storedProcedureName: string
): Promise<void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/storedProcedures/${storedProcedureName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "DELETE", apiVersion });
}

/* Lists the SQL userDefinedFunction under an existing Azure Cosmos DB database account. */
export async function listSqlUserDefinedFunctions(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<Types.SqlUserDefinedFunctionListResult> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/userDefinedFunctions`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account. */
export async function getSqlUserDefinedFunction(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  userDefinedFunctionName: string
): Promise<Types.SqlUserDefinedFunctionGetResults> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/userDefinedFunctions/${userDefinedFunctionName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Create or update an Azure Cosmos DB SQL userDefinedFunction */
export async function createUpdateSqlUserDefinedFunction(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  userDefinedFunctionName: string,
  body: Types.SqlUserDefinedFunctionCreateUpdateParameters
): Promise<Types.SqlUserDefinedFunctionGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/userDefinedFunctions/${userDefinedFunctionName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "PUT", apiVersion, body });
}

/* Deletes an existing Azure Cosmos DB SQL userDefinedFunction. */
export async function deleteSqlUserDefinedFunction(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  userDefinedFunctionName: string
): Promise<void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/userDefinedFunctions/${userDefinedFunctionName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "DELETE", apiVersion });
}

/* Lists the SQL trigger under an existing Azure Cosmos DB database account. */
export async function listSqlTriggers(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string
): Promise<Types.SqlTriggerListResult> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/triggers`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Gets the SQL trigger under an existing Azure Cosmos DB database account. */
export async function getSqlTrigger(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  triggerName: string
): Promise<Types.SqlTriggerGetResults> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/triggers/${triggerName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}

/* Create or update an Azure Cosmos DB SQL trigger */
export async function createUpdateSqlTrigger(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  triggerName: string,
  body: Types.SqlTriggerCreateUpdateParameters
): Promise<Types.SqlTriggerGetResults | void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/triggers/${triggerName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "PUT", apiVersion, body });
}

/* Deletes an existing Azure Cosmos DB SQL trigger. */
export async function deleteSqlTrigger(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  databaseName: string,
  containerName: string,
  triggerName: string
): Promise<void> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/sqlDatabases/${databaseName}/containers/${containerName}/triggers/${triggerName}`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "DELETE", apiVersion });
}
