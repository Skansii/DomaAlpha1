import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'user';
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  status: 'active' | 'inactive' | 'suspended';
  profileImage?: string;
  phoneNumber?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  projectIds?: ObjectId[];
}

export const USER_COLLECTION = 'users';

// Helper function for user object creation
export function createUserObject(userData: Partial<User>): Omit<User, '_id'> {
  const now = new Date();
  
  return {
    email: userData.email || '',
    name: userData.name || '',
    role: userData.role || 'user',
    createdAt: userData.createdAt || now,
    updatedAt: now,
    lastLogin: userData.lastLogin,
    status: userData.status || 'active',
    profileImage: userData.profileImage,
    phoneNumber: userData.phoneNumber,
    address: userData.address,
    projectIds: userData.projectIds || [],
  };
} 