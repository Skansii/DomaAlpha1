import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';

// Get a specific user by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has admin or editor role
    // @ts-ignore
    const userRole = session.user?.role;
    if (userRole !== 'admin' && userRole !== 'editor') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    // Validate ObjectId
    let objectId;
    try {
      objectId = new ObjectId(params.id);
    } catch (error) {
      return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('users');

    // Find user by ID
    const user = await collection.findOne(
      { _id: objectId },
      { projection: { password: 0 } } // Exclude password field
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

// Update a user by ID
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has admin role
    // @ts-ignore
    const userRole = session.user?.role;
    if (userRole !== 'admin') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    // Validate ObjectId
    let objectId;
    try {
      objectId = new ObjectId(params.id);
    } catch (error) {
      return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
    }

    // Parse request body
    const updateData = await request.json();
    
    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('users');

    // Check if user exists
    const existingUser = await collection.findOne({ _id: objectId });
    if (!existingUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Check if email is being updated and if it's already in use
    if (updateData.email && updateData.email !== existingUser.email) {
      const emailExists = await collection.findOne({
        email: updateData.email,
        _id: { $ne: objectId }
      });
      
      if (emailExists) {
        return NextResponse.json(
          { message: 'Email is already in use by another user' },
          { status: 409 }
        );
      }
    }

    // If password is provided, hash it
    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    // Prepare update data
    const updateFields = {
      ...updateData,
      updatedAt: new Date()
    };

    // Update user
    const result = await collection.updateOne(
      { _id: objectId },
      { $set: updateFields }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: 'No changes made' }, { status: 304 });
    }

    // Get updated user (exclude password)
    const updatedUser = await collection.findOne(
      { _id: objectId },
      { projection: { password: 0 } }
    );

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

// Delete a user by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has admin role
    // @ts-ignore
    const userRole = session.user?.role;
    if (userRole !== 'admin') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    // Validate ObjectId
    let objectId;
    try {
      objectId = new ObjectId(params.id);
    } catch (error) {
      return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('users');

    // Check if user exists
    const existingUser = await collection.findOne({ _id: objectId });
    if (!existingUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Prevent deletion of the last admin user
    if (existingUser.role === 'admin') {
      const adminCount = await collection.countDocuments({ role: 'admin' });
      if (adminCount <= 1) {
        return NextResponse.json(
          { message: 'Cannot delete the last admin user' },
          { status: 403 }
        );
      }
    }

    // Delete user
    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'User not deleted' }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'User deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
} 