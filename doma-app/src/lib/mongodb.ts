import { MongoClient, Db } from 'mongodb';

// Connection URI from the environment variables
const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB_NAME || 'doma_admin';

if (!uri) {
  console.error('ERROR: MongoDB connection string (MONGODB_URI) is not set in environment variables.');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient, db: Db }> {
  // If we have the cached connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // If no cached connection, create new connection
  if (!uri) {
    throw new Error("MongoDB connection string is not defined. Please set MONGODB_URI environment variable.");
  }

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