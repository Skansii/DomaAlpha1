import { ObjectId } from 'mongodb';

export interface Project {
  _id?: ObjectId;
  name: string;
  description: string;
  userId: ObjectId;
  status: 'draft' | 'in_progress' | 'pending_review' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  deadline?: Date;
  assignedTo?: ObjectId[];
  productIds?: ObjectId[];
  files: {
    name: string;
    url: string;
    type: string;
    size: number;
    uploadedAt: Date;
  }[];
  renderingStatus?: {
    isRequested: boolean;
    status: 'pending' | 'in_progress' | 'completed' | 'failed';
    completedAt?: Date;
    renderingUrls?: string[];
  };
  notes?: string[];
  budget?: {
    total: number;
    currency: string;
    breakdown?: Record<string, number>;
  };
  metadata?: Record<string, any>;
}

export const PROJECT_COLLECTION = 'projects';

// Helper function for project object creation
export function createProjectObject(projectData: Partial<Project>): Omit<Project, '_id'> {
  const now = new Date();
  
  return {
    name: projectData.name || '',
    description: projectData.description || '',
    userId: projectData.userId!,
    status: projectData.status || 'draft',
    createdAt: projectData.createdAt || now,
    updatedAt: now,
    deadline: projectData.deadline,
    assignedTo: projectData.assignedTo || [],
    productIds: projectData.productIds || [],
    files: projectData.files || [],
    renderingStatus: projectData.renderingStatus || {
      isRequested: false,
      status: 'pending'
    },
    notes: projectData.notes || [],
    budget: projectData.budget,
    metadata: projectData.metadata,
  };
} 