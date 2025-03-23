import { ObjectId } from 'mongodb';

export interface Product {
  _id?: ObjectId;
  name: string;
  category: 'cabinet' | 'kitchen' | 'accessory' | 'other';
  description: string;
  price: number;
  discountPrice?: number;
  currency: string;
  images: string[];
  specifications: Record<string, string | number | boolean>;
  inventory: {
    inStock: boolean;
    quantity?: number;
    availableDate?: Date;
  };
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  metadata?: Record<string, any>;
}

export const PRODUCT_COLLECTION = 'products';

// Helper function for product object creation
export function createProductObject(productData: Partial<Product>): Omit<Product, '_id'> {
  const now = new Date();
  
  return {
    name: productData.name || '',
    category: productData.category || 'other',
    description: productData.description || '',
    price: productData.price || 0,
    discountPrice: productData.discountPrice,
    currency: productData.currency || 'USD',
    images: productData.images || [],
    specifications: productData.specifications || {},
    inventory: productData.inventory || { inStock: false },
    createdAt: productData.createdAt || now,
    updatedAt: now,
    isActive: productData.isActive ?? true,
    metadata: productData.metadata,
  };
} 