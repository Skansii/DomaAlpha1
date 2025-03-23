import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongodb';
import { PipelineStage } from 'mongodb';

export async function getDocumentById(collection: string, id: string, projection: any = {}) {
  try {
    const { db } = await connectToDatabase();
    const document = await db.collection(collection).findOne(
      { _id: new ObjectId(id) },
      { projection }
    );
    
    if (!document) {
      return null;
    }
    
    return {
      ...document,
      _id: document._id.toString()
    };
  } catch (error) {
    console.error(`Error fetching document from ${collection}:`, error);
    return null;
  }
}

export async function getDocuments(
  collection: string,
  query: any = {},
  options: {
    sort?: Record<string, 1 | -1>,
    limit?: number,
    skip?: number,
    projection?: Record<string, 0 | 1>
  } = {}
) {
  try {
    const { db } = await connectToDatabase();
    const cursor = db.collection(collection).find(query, { projection: options.projection });
    
    if (options.sort) {
      cursor.sort(options.sort);
    }
    
    if (options.skip) {
      cursor.skip(options.skip);
    }
    
    if (options.limit) {
      cursor.limit(options.limit);
    }
    
    const documents = await cursor.toArray();
    
    return documents.map(doc => ({
      ...doc,
      _id: doc._id.toString()
    }));
  } catch (error) {
    console.error(`Error fetching documents from ${collection}:`, error);
    return [];
  }
}

export async function countDocuments(collection: string, query: any = {}) {
  try {
    const { db } = await connectToDatabase();
    return await db.collection(collection).countDocuments(query);
  } catch (error) {
    console.error(`Error counting documents in ${collection}:`, error);
    return 0;
  }
}

export async function createDocument(collection: string, data: any) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).insertOne(data);
    
    if (!result.acknowledged) {
      throw new Error('Failed to create document');
    }
    
    return {
      _id: result.insertedId.toString(),
      ...data
    };
  } catch (error) {
    console.error(`Error creating document in ${collection}:`, error);
    throw error;
  }
}

export async function updateDocument(collection: string, id: string, data: any) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } }
    );
    
    if (!result.acknowledged) {
      throw new Error('Failed to update document');
    }
    
    return {
      _id: id,
      ...data
    };
  } catch (error) {
    console.error(`Error updating document in ${collection}:`, error);
    throw error;
  }
}

export async function deleteDocument(collection: string, id: string) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
    
    if (!result.acknowledged) {
      throw new Error('Failed to delete document');
    }
    
    return { success: true, deletedCount: result.deletedCount };
  } catch (error) {
    console.error(`Error deleting document from ${collection}:`, error);
    throw error;
  }
}

export async function aggregateDocuments(collection: string, pipeline: PipelineStage[]) {
  try {
    const { db } = await connectToDatabase();
    const documents = await db.collection(collection).aggregate(pipeline).toArray();
    
    return documents.map(doc => {
      if (doc._id instanceof ObjectId) {
        return {
          ...doc,
          _id: doc._id.toString()
        };
      }
      return doc;
    });
  } catch (error) {
    console.error(`Error aggregating documents in ${collection}:`, error);
    return [];
  }
} 