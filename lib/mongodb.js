import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(process.env.MONGODB_URI);

// Database Name
const dbName = process.env.MONGODB_DB;

export const getSkoloDb = async () => {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  return client.db(dbName);
};