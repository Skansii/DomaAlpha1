import { NextRequest, NextResponse } from 'next/server';
import { CONTENT_COLLECTION } from '@/lib/models';
import { getDocumentById, updateDocument, deleteDocument } from '@/lib/database';
import { canAccess } from '@/lib/auth';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const hasAccess = await canAccess(['admin', 'editor']);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const content = await getDocumentById(CONTENT_COLLECTION, params.id);
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const hasAccess = await canAccess(['admin', 'editor']);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const contentData = await request.json();
    
    // If status is being updated to 'published' and it wasn't before, set publishedAt
    if (contentData.status === 'published') {
      const existingContent = await getDocumentById(CONTENT_COLLECTION, params.id);
      if (existingContent && existingContent.status !== 'published') {
        contentData.publishedAt = new Date();
      }
    }
    
    // Update author id to ObjectId if it exists
    if (contentData.author?.id && typeof contentData.author.id === 'string') {
      contentData.author.id = new ObjectId(contentData.author.id);
    }
    
    const updatedContent = await updateDocument(CONTENT_COLLECTION, params.id, contentData);
    
    return NextResponse.json(updatedContent);
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const hasAccess = await canAccess(['admin']);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const result = await deleteDocument(CONTENT_COLLECTION, params.id);
    
    if (!result.success) {
      return NextResponse.json({ error: 'Failed to delete content' }, { status: 400 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 