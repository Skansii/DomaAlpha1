'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, redirect } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  
  // If on login page, don't show the sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }
  
  // If user is not authenticated and not on login page, redirect to login
  if (status === 'unauthenticated' && !pathname?.includes('/admin/login')) {
    redirect('/admin/login');
    return null;
  }
  
  // If loading, show loading state
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }
  
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
} 