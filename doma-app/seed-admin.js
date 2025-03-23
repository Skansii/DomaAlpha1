const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

// Connection parameters
const uri = process.env.MONGODB_URI || 'mongodb://domaadmin:aRZx262775%2555@138.201.190.153:27017/?authSource=admin';
const dbName = 'doma_admin';
const userCollection = 'users';

// Admin user details
const adminUser = {
  _id: new ObjectId(),
  email: 'admin@domadesign.com',
  name: 'Admin User',
  role: 'admin',
  status: 'active',
  createdAt: new Date(),
  updatedAt: new Date(),
  hashedPassword: bcrypt.hashSync('admin123', 10) // Change this password in production
};

async function seedAdmin() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(dbName);
    const collection = db.collection(userCollection);
    
    // Check if admin user already exists
    const existingAdmin = await collection.findOne({ email: adminUser.email });
    
    if (existingAdmin) {
      console.log('Admin user already exists. Skipping creation.');
      return;
    }
    
    // Create admin user
    const result = await collection.insertOne(adminUser);
    
    if (result.acknowledged) {
      console.log(`Admin user created with ID: ${adminUser._id}`);
      console.log(`Login with email: ${adminUser.email} and password: admin123`);
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

// Run the seed function
seedAdmin().catch(console.error); 