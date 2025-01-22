import { DefaultAzureCredential } from "@azure/identity";
import { ResourceManagementClient } from "@azure/arm-resources";

/**
 * Fetches all resources in the given Azure subscription.
 * @param {string} subscriptionId - The Azure subscription ID.
 * @returns {Promise<Array>} - An array of resources.
 */

async function fetchResources(subscriptionId) {
  const credential = new DefaultAzureCredential();
  const resourceClient = new ResourceManagementClient(credential, subscriptionId);

  const resources = [];
  for await (const resource of resourceClient.resources.list()) {
    resources.push(resource);
  }

  return resources;
}

async function main() {
  try {
    // Your Azure Subscription ID
    const subscriptionId = "<YOUR_SUBSCRIPTION_ID>"; // Replace with your subscription ID

    console.log("Fetching resources in your subscription...\n");

    // Fetch resources using the helper function
    const resources = await fetchResources(subscriptionId);

    // Display the resources
    resources.forEach((resource) => {
      console.log(`Name: ${resource.name}`);
      console.log(`Type: ${resource.type}`);
      console.log(`Location: ${resource.location}`);
      console.log(`Resource ID: ${resource.id}`);
      console.log("-------------------------------");
    });

    
    // const storageAccounts = resources.filter(resource => resource.type === "Microsoft.Storage/storageAccounts");
    // console.log("Storage Accounts:", storageAccounts);

    // const resourceId = "<RESOURCE_ID>";
    // const resourceDetails = await resourceClient.resources.getById(resourceId, "2021-04-01");
    // console.log(resourceDetails);

    console.log(`Total resources fetched: ${resources.length}`);
  } catch (error) {
    console.error("Error fetching resources:", error.message);
  }
}

// Run the main function
main();

export { fetchResources };

