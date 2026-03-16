import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("69b812570013888e4564");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
