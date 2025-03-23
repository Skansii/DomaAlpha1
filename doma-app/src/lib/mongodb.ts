import { MongoClient, Db } from 'mongodb';

// Connection URI from the environment variables
const uri = process.env.MONGODB_URI || 'mongodb://domaadmin:aRZx262775%2555@138.201.190.153:27017/?authSource=admin';
const dbName = 'doma_admin';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient, db: Db }> {
  // If we have the cached connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // If no cached connection, create new connection
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  // Cache the connection
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

// Function to disconnect when needed
export async function disconnectFromDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
} 