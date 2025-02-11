/* 
  AUTOGENERATED FILE
  Run "npm run generateARMClients" to regenerate
  Edting this file directly should be done with extreme caution as not to diverge from ARM REST specs

  Generated from: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2021-04-15/cosmos-db.json
*/

import { configContext } from "../../../../ConfigContext";
import { armRequest } from "../../request";
import * as Types from "./types";
const apiVersion = "2021-04-15";

/* Retrieves the metrics determined by the given filter for the given partition key range id and region. */
export async function listMetrics(
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  region: string,
  databaseRid: string,
  collectionRid: string,
  partitionKeyRangeId: string
): Promise<Types.PartitionMetricListResult> {
  const path = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${accountName}/region/${region}/databases/${databaseRid}/collections/${collectionRid}/partitionKeyRangeId/${partitionKeyRangeId}/metrics`;
  return armRequest({ host: configContext.ARM_ENDPOINT, path, method: "GET", apiVersion });
}
