'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import ClientSideWrapper from '@/components/admin/ClientSideWrapper';

/**
 * Admin Dashboard Content Page
 * Contains the main dashboard content, session is handled by the parent layout
 */
export default function AdminDashboardPage() {
  const { data: session } = useSession();
  
  return (
    <ClientSideWrapper withSession={false}>
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Welcome, {session?.user?.name || 'Admin User'}
          </h2>
          <p className="text-gray-600">
            This is the DOMA Design admin dashboard. Use the navigation menu to manage users, products, and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Users</h3>
            <p className="text-gray-600 mb-4">Manage user accounts and permissions</p>
            <a href="/admin/dashboard/users" className="text-blue-600 hover:text-blue-800">View Users →</a>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Products</h3>
            <p className="text-gray-600 mb-4">Manage product catalog and inventory</p>
            <a href="/admin/dashboard/products" className="text-blue-600 hover:text-blue-800">View Products →</a>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Projects</h3>
            <p className="text-gray-600 mb-4">Manage client projects and assignments</p>
            <a href="/admin/dashboard/projects" className="text-blue-600 hover:text-blue-800">View Projects →</a>
          </div>
        </div>
      </main>
    </ClientSideWrapper>
  );
} 