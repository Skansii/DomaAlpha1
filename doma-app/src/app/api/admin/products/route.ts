import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has admin role
    // @ts-ignore
    const userRole = session.user?.role;
    if (userRole !== 'admin' && userRole !== 'editor') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';
    const search = searchParams.get('search') || '';

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('products');

    // Build query
    const query: any = {};
    
    // Add search filter if provided
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { sku: { $regex: search, $options: 'i' } },
      ];
    }

    // Count total records for pagination
    const totalItems = await collection.countDocuments(query);
    const totalPages = Math.ceil(totalItems / limit);

    // Get products with pagination and sorting
    const products = await collection
      .find(query)
      .sort({ [sort]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      products,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        pageSize: limit
      }
    });
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    // Parse request body
    const productData = await request.json();
    
    // Validate required fields
    if (!productData.name) {
      return NextResponse.json(
        { message: 'Product name is required' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('products');

    // Check if product with the same SKU already exists (if SKU provided)
    if (productData.sku) {
      const existingProduct = await collection.findOne({ sku: productData.sku });
      if (existingProduct) {
        return NextResponse.json(
          { message: 'Product with this SKU already exists' },
          { status: 409 }
        );
      }
    }

    // Create new product object
    const newProduct = {
      _id: new ObjectId(),
      name: productData.name,
      description: productData.description || '',
      price: productData.price || 0,
      salePrice: productData.salePrice,
      sku: productData.sku || `PROD-${Math.floor(Math.random() * 10000)}`,
      category: productData.category || 'Uncategorized',
      imageUrl: productData.imageUrl || null,
      stockQuantity: productData.stockQuantity || 0,
      status: productData.status || 'active',
      features: productData.features || [],
      specifications: productData.specifications || {},
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insert product into database
    await collection.insertOne(newProduct);

    // Return success response
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
} 