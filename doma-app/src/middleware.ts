import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip authentication check for login page
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }
  
  // Check if it's an admin route
  if (pathname.startsWith('/admin')) {
    try {
      // Verify NextAuth secret is available
      if (!process.env.NEXTAUTH_SECRET) {
        console.error('Missing NEXTAUTH_SECRET environment variable');
        return redirectToError(request, 'Server configuration error');
      }
      
      const token = await getToken({ 
        req: request,
        secret: process.env.NEXTAUTH_SECRET
      });
      
      // If not authenticated, redirect to login
      if (!token) {
        const url = new URL('/admin/login', request.url);
        return NextResponse.redirect(url);
      }
      
      // If not an admin or editor, redirect to home
      if (!['admin', 'editor'].includes(token.role as string)) {
        const url = new URL('/', request.url);
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      return redirectToError(request, 'Authentication error');
    }
  }
  
  return NextResponse.next();
}

// Helper function to redirect to error page
function redirectToError(request: NextRequest, message: string) {
  // You can create a dedicated error page or use the login page with error param
  const url = new URL('/admin/login', request.url);
  url.searchParams.set('error', message);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/admin/:path*']
}; 