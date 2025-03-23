import { NextRequest, NextResponse } from 'next/server';
import { CONTENT_COLLECTION, createContentObject } from '@/lib/models';
import { getDocuments, countDocuments, createDocument } from '@/lib/database';
import { canAccess, getCurrentUser } from '@/lib/auth';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest) {
  try {
    const hasAccess = await canAccess(['admin', 'editor']);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || '';
    const status = searchParams.get('status') || '';
    
    let query: any = {};
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { slug: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (type) {
      query.type = type;
    }
    
    if (status) {
      query.status = status;
    }
      
    const options = {
      sort: { [sort]: order === 'asc' ? 1 : -1 },
      limit,
      skip: (page - 1) * limit
    };
    
    const [contents, total] = await Promise.all([
      getDocuments(CONTENT_COLLECTION, query, options),
      countDocuments(CONTENT_COLLECTION, query)
    ]);
    
    return NextResponse.json({
      contents,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit
      }
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const hasAccess = await canAccess(['admin', 'editor']);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const contentData = await request.json();
    
    if (!contentData.title || !contentData.content || !contentData.type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Generate slug if not provided
    if (!contentData.slug) {
      contentData.slug = contentData.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
    }
    
    // Add current user as author
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: 'User information not found' }, { status: 400 });
    }
    
    contentData.author = {
      id: new ObjectId(currentUser._id),
      name: currentUser.name
    };
    
    // Set published date if status is published
    if (contentData.status === 'published') {
      contentData.publishedAt = new Date();
    }
    
    const newContent = createContentObject(contentData);
    const content = await createDocument(CONTENT_COLLECTION, newContent);
    
    return NextResponse.json(content, { status: 201 });
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 