'use client';

import React from 'react';
import { useSession, SessionProvider } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import ClientSideWrapper from '@/components/admin/ClientSideWrapper';

/**
 * Admin Dashboard Layout
 * This is a client component that wraps all authenticated admin pages
 * and provides the sidebar navigation and session handling
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a client-side only approach with state for mounting
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Render nothing until mounted on client
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
  
  // Only render SessionProvider and the auth-dependent content on the client
  return (
    <SessionProvider>
      <AuthenticatedContent>{children}</AuthenticatedContent>
    </SessionProvider>
  );
}

// Separate component for authenticated content to ensure useSession is used after SessionProvider
function AuthenticatedContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  // Loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  // If unauthenticated, show nothing while redirecting
  if (status === 'unauthenticated') {
    return null;
  }

  // The dashboard layout with sidebar for authenticated users
  return (
    <div suppressHydrationWarning className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
} 