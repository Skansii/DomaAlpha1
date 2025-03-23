import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET a specific project by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user has admin or editor role
    if (!['admin', 'editor'].includes(session.user.role as string)) {
      return NextResponse.json(
        { message: 'Forbidden: Insufficient permissions' },
        { status: 403 }
      );
    }

    const projectId = params.id;

    // Validate project ID
    if (!ObjectId.isValid(projectId)) {
      return NextResponse.json(
        { message: 'Invalid project ID' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Get project by ID
    const project = await db
      .collection('projects')
      .findOne({ _id: new ObjectId(projectId) });

    if (!project) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { message: 'Error fetching project' },
      { status: 500 }
    );
  }
}

// UPDATE a specific project by ID
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user has admin role
    if (session.user.role !== 'admin') {
      return NextResponse.json(
        { message: 'Forbidden: Admin permission required' },
        { status: 403 }
      );
    }

    const projectId = params.id;

    // Validate project ID
    if (!ObjectId.isValid(projectId)) {
      return NextResponse.json(
        { message: 'Invalid project ID' },
        { status: 400 }
      );
    }

    // Parse request body
    const data = await request.json();

    // Connect to database
    const { db } = await connectToDatabase();

    // Check if project exists
    const existingProject = await db
      .collection('projects')
      .findOne({ _id: new ObjectId(projectId) });

    if (!existingProject) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData = {
      ...data,
      updatedAt: new Date()
    };

    // Update project
    const result = await db
      .collection('projects')
      .updateOne(
        { _id: new ObjectId(projectId) },
        { $set: updateData }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: 'No changes made to the project' },
        { status: 200 }
      );
    }

    // Get updated project
    const updatedProject = await db
      .collection('projects')
      .findOne({ _id: new ObjectId(projectId) });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { message: 'Error updating project' },
      { status: 500 }
    );
  }
}

// DELETE a specific project by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user has admin role
    if (session.user.role !== 'admin') {
      return NextResponse.json(
        { message: 'Forbidden: Admin permission required' },
        { status: 403 }
      );
    }

    const projectId = params.id;

    // Validate project ID
    if (!ObjectId.isValid(projectId)) {
      return NextResponse.json(
        { message: 'Invalid project ID' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Check if project exists
    const existingProject = await db
      .collection('projects')
      .findOne({ _id: new ObjectId(projectId) });

    if (!existingProject) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }

    // Delete project
    const result = await db
      .collection('projects')
      .deleteOne({ _id: new ObjectId(projectId) });

    if (result.deletedCount === 1) {
      return NextResponse.json(
        { message: 'Project deleted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to delete project' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { message: 'Error deleting project' },
      { status: 500 }
    );
  }
} 