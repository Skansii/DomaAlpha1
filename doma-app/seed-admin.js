const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
require('dotenv').config({ path: '.env.local' });

// Connection parameters from environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || 'doma_admin';
const userCollection = 'users';

if (!uri) {
  console.error('ERROR: MongoDB connection string (MONGODB_URI) is not set in environment variables.');
  process.exit(1);
}

// Generate a secure random password
function generateSecurePassword(length = 16) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  const randomBytes = crypto.randomBytes(length);
  let password = '';
  
  for (let i = 0; i < length; i++) {
    const index = randomBytes[i] % chars.length;
    password += chars.charAt(index);
  }
  
  return password;
}

async function seedAdmin() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(dbName);
    const collection = db.collection(userCollection);
    
    // Check if admin user already exists
    const existingAdmin = await collection.findOne({ email: 'admin@domadesign.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists. Skipping creation.');
      return;
    }
    
    // Generate a secure random password
    const adminPassword = generateSecurePassword();
    
    // Admin user details
    const adminUser = {
      _id: new ObjectId(),
      email: 'admin@domadesign.com',
      name: 'Admin User',
      role: 'admin',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
      hashedPassword: bcrypt.hashSync(adminPassword, 10)
    };
    
    // Create admin user
    const result = await collection.insertOne(adminUser);
    
    if (result.acknowledged) {
      console.log(`Admin user created with ID: ${adminUser._id}`);
      console.log(`Login with email: ${adminUser.email}`);
      console.log(`Generated password: ${adminPassword}`);
      console.log(`IMPORTANT: Save this password securely as it won't be shown again.`);
    } else {
      console.error('Failed to create admin user');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedAdmin(); 