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
    const collection = db.collection('projects');

    // Build query
    const query: any = {};
    
    // Add search filter if provided
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { clientName: { $regex: search, $options: 'i' } },
      ];
    }

    // Count total records for pagination
    const totalItems = await collection.countDocuments(query);
    const totalPages = Math.ceil(totalItems / limit);

    // Get projects with pagination and sorting
    const projects = await collection
      .find(query)
      .sort({ [sort]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      projects,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        pageSize: limit
      }
    });
  } catch (error: any) {
    console.error('Error fetching projects:', error);
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
    const projectData = await request.json();
    
    // Validate required fields
    if (!projectData.name) {
      return NextResponse.json(
        { message: 'Project name is required' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('projects');

    // Create new project object
    const newProject = {
      _id: new ObjectId(),
      name: projectData.name,
      description: projectData.description || '',
      clientName: projectData.clientName || '',
      clientEmail: projectData.clientEmail || '',
      startDate: projectData.startDate ? new Date(projectData.startDate) : new Date(),
      endDate: projectData.endDate ? new Date(projectData.endDate) : null,
      budget: projectData.budget || 0,
      status: projectData.status || 'pending',
      members: projectData.members || [],
      tasks: projectData.tasks || [],
      files: projectData.files || [],
      comments: projectData.comments || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insert project into database
    await collection.insertOne(newProject);

    // Return success response
    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
} 