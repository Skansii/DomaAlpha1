import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// Get a specific product by ID
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
      return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('products');

    // Find product by ID
    const product = await collection.findOne({ _id: objectId });

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error: any) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

// Update a product by ID
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
      return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
    }

    // Parse request body
    const updateData = await request.json();
    
    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('products');

    // Check if product exists
    const existingProduct = await collection.findOne({ _id: objectId });
    if (!existingProduct) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    // Check if SKU is being updated and if it's already in use
    if (updateData.sku && updateData.sku !== existingProduct.sku) {
      const skuExists = await collection.findOne({
        sku: updateData.sku,
        _id: { $ne: objectId }
      });
      
      if (skuExists) {
        return NextResponse.json(
          { message: 'SKU is already in use by another product' },
          { status: 409 }
        );
      }
    }

    // Prepare update data
    const updateFields = {
      ...updateData,
      updatedAt: new Date()
    };

    // Update product
    const result = await collection.updateOne(
      { _id: objectId },
      { $set: updateFields }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: 'No changes made' }, { status: 304 });
    }

    // Get updated product
    const updatedProduct = await collection.findOne({ _id: objectId });

    return NextResponse.json(updatedProduct);
  } catch (error: any) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

// Delete a product by ID
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
      return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('products');

    // Check if product exists
    const existingProduct = await collection.findOne({ _id: objectId });
    if (!existingProduct) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    // Delete product
    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'Product not deleted' }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'Product deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
} 