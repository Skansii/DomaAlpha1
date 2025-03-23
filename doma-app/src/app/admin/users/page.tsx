'use client';

import React from 'react';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/solid';
import AdminLayout from '@/components/admin/AdminLayout';

export default function UsersPage() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
          <Link 
            href="/admin/users/create"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add User
          </Link>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden p-6">
          <p>User management functionality will be implemented here.</p>
        </div>
      </div>
    </AdminLayout>
  );
} 