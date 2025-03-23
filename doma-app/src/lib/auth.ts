import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { USER_COLLECTION } from './models/user';

// Type augmentation for NextAuth.js
declare module 'next-auth' {
  /**
   * Extend the built-in session types
   */
  interface Session {
    user: {
      id?: string;
      email?: string | null;
      name?: string | null;
      role?: string;
    }
  }

  /**
   * Extend the built-in user types
   */
  interface User {
    id?: string;
    email?: string | null;
    name?: string | null;
    role?: string;
  }
}

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        try {
          // Import server-side only modules dynamically
          const { compare } = await import('bcrypt');
          const { connectToDatabase } = await import('./mongodb');
          const { ObjectId } = await import('mongodb');
          
          const { db } = await connectToDatabase();
          const user = await db.collection(USER_COLLECTION).findOne({ email: credentials.email });
          
          if (!user || !user.hashedPassword) {
            return null;
          }
          
          // Ensure password is properly typed for bcrypt compare
          const plainTextPassword = credentials.password as string;
          const storedHashedPassword = user.hashedPassword.toString();
          
          const isPasswordValid = await compare(plainTextPassword, storedHashedPassword);
          
          if (!isPasswordValid) {
            return null;
          }
          
          // Update last login
          await db.collection(USER_COLLECTION).updateOne(
            { _id: user._id },
            { $set: { lastLogin: new Date() } }
          );
          
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role
          };
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // Type-safe assignment with proper type checking
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Check if secret is missing in development
if (process.env.NODE_ENV === 'development' && !process.env.NEXTAUTH_SECRET) {
  console.error('WARNING: NEXTAUTH_SECRET is not set in environment variables. Authentication will not work properly.');
}

// Export a single auth object
export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);

// Server-side only functions
export async function getSession() {
  return await auth();
}

// Use dynamic imports for server-side functions to avoid client-side imports
export async function getCurrentUser() {
  const session = await getSession();
  
  if (!session?.user?.id) {
    return null;
  }
  
  try {
    // Dynamically import server-only modules
    const { connectToDatabase } = await import('./mongodb');
    const { ObjectId } = await import('mongodb');
    
    const { db } = await connectToDatabase();
    const user = await db.collection(USER_COLLECTION).findOne(
      { _id: new ObjectId(session.user.id) },
      { projection: { hashedPassword: 0 } }
    );
    
    if (!user) {
      return null;
    }
    
    return {
      ...user,
      _id: user._id.toString()
    };
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
}

export async function isAdmin() {
  const session = await getSession();
  return session?.user?.role === 'admin';
}

export async function canAccess(allowedRoles: string[] = ['admin']) {
  const session = await getSession();
  return session?.user?.role && allowedRoles.includes(session.user.role);
} 