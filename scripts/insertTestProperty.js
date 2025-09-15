// Run this script with: node scripts/insertTestProperty.js
import 'dotenv/config';
import { dbConnect, collectionNameObj } from '../lib/mongodb.js';

async function main() {
  try {
    const collection = await dbConnect(collectionNameObj.propertiesCollection);
    const result = await collection.insertOne({
      title: 'Test Property',
      price: 1000,
      city: 'Test City',
      rooms: 2,
      available: true,
      description: 'A test property for debugging.',
      image: '/vercel.svg'
    });
    console.log('Inserted property with _id:', result.insertedId);
    process.exit(0);
  } catch (err) {
    console.error('Error inserting property:', err);
    process.exit(1);
  }
}

main();
