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
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
}; 