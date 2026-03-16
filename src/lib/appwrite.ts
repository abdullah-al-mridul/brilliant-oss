import { Client, Account, Databases } from "appwrite";

const endpoint = (import.meta.env.VITE_APPWRITE_ENDPOINT || "")
  .replace(/"/g, "")
  .trim();
const projectID = (import.meta.env.VITE_APPWRITE_PROJECT_ID || "")
  .replace(/"/g, "")
  .trim();

console.log("Appwrite: Initializing with", { endpoint, projectID });

const client = new Client().setEndpoint(endpoint).setProject(projectID);

const account = new Account(client);
const databases = new Databases(client);
import { ID } from "appwrite";

export { client, account, databases, ID };
