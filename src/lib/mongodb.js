
import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {
  propertiesCollection: 'properties',
  userCollection: 'users',
  bookingsCollection: 'bookings',
};

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

export async function dbConnect(collectionName) {
  const connectedClient = await clientPromise;
  return connectedClient.db(process.env.DB_NAME).collection(collectionName);
}

export {};

export {};
