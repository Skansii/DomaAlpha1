import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check user role
    const userRole = session?.user?.role;
    if (userRole !== 'admin' && userRole !== 'editor') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    // Get analytics type from query params
    const type = req.nextUrl.searchParams.get('type');
    
    if (type === 'summary') {
      return await getDashboardSummary();
    } else if (type === 'users') {
      return await getUsersAnalytics();
    } else if (type === 'products') {
      return await getProductsAnalytics(); 
    } else {
      return NextResponse.json({ message: 'Invalid analytics type' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

async function getDashboardSummary() {
  const { db } = await connectToDatabase();
  
  // Get user counts
  const totalUsers = await db.collection('users').countDocuments();
  const activeUsers = await db.collection('users').countDocuments({ status: 'active' });
  
  // Get product counts
  const totalProducts = await db.collection('products').countDocuments();
  const activeProducts = await db.collection('products').countDocuments({ status: 'active' });
  
  // Get project counts
  const totalProjects = await db.collection('projects').countDocuments();
  const completedProjects = await db.collection('projects').countDocuments({ status: 'completed' });
  
  // Get recent users
  const recentUsers = await db.collection('users')
    .find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .project({ password: 0 })
    .toArray();
  
  // Get recent products
  const recentProducts = await db.collection('products')
    .find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .toArray();
  
  return NextResponse.json({
    totalUsers,
    activeUsers,
    totalProducts,
    activeProducts,
    totalProjects,
    completedProjects,
    recentUsers,
    recentProducts
  });
}

async function getUsersAnalytics() {
  const { db } = await connectToDatabase();
  
  // Get user registration trends (last 7 days)
  const last7Days = new Date();
  last7Days.setDate(last7Days.getDate() - 7);
  
  const userTrends = await db.collection('users').aggregate([
    { $match: { createdAt: { $gte: last7Days } } },
    { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]).toArray();
  
  // Get user roles distribution
  const userRoles = await db.collection('users').aggregate([
    { $group: {
        _id: '$role',
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } }
  ]).toArray();
  
  return NextResponse.json({
    userTrends,
    userRoles
  });
}

async function getProductsAnalytics() {
  const { db } = await connectToDatabase();
  
  // Get products by category
  const productCategories = await db.collection('products').aggregate([
    { $group: {
        _id: '$category',
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } }
  ]).toArray();
  
  // Get products by status
  const productStatus = await db.collection('products').aggregate([
    { $group: {
        _id: '$status',
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } }
  ]).toArray();
  
  return NextResponse.json({
    productCategories,
    productStatus
  });
} 