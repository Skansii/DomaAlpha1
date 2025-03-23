'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import UserForm from '@/components/admin/UserForm';
import { useParams } from 'next/navigation';

export default function EditUserPage() {
  const params = useParams();
  const userId = params.id as string;

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center">
        <Link href="/admin/users" className="mr-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to Users
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit User</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <UserForm userId={userId} isEdit={true} />
      </div>
    </div>
  );
} 