import { ObjectId } from 'mongodb';

export interface Content {
  _id?: ObjectId;
  title: string;
  slug: string;
  content: string;
  type: 'blog' | 'faq' | 'resource' | 'page';
  status: 'draft' | 'published' | 'archived';
  author: {
    id: ObjectId;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  featuredImage?: string;
  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  metadata?: Record<string, any>;
}

export const CONTENT_COLLECTION = 'contents';

// Helper function for content object creation
export function createContentObject(contentData: Partial<Content>): Omit<Content, '_id'> {
  const now = new Date();
  
  return {
    title: contentData.title || '',
    slug: contentData.slug || '',
    content: contentData.content || '',
    type: contentData.type || 'page',
    status: contentData.status || 'draft',
    author: contentData.author || { id: new ObjectId(), name: 'Unknown' },
    createdAt: contentData.createdAt || now,
    updatedAt: now,
    publishedAt: contentData.publishedAt,
    featuredImage: contentData.featuredImage,
    tags: contentData.tags || [],
    seo: contentData.seo || {
      title: contentData.title,
      description: ''
    },
    metadata: contentData.metadata,
  };
} 