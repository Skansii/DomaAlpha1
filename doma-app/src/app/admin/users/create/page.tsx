'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import UserForm from '@/components/admin/UserForm';

export default function CreateUserPage() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center">
        <Link href="/admin/users" className="mr-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to Users
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Create New User</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <UserForm />
      </div>
    </div>
  );
} 