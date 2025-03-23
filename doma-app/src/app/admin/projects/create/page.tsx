'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import ProjectForm from '@/components/admin/ProjectForm';

export default function CreateProjectPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center mb-6">
        <Link
          href="/admin/projects"
          className="inline-flex items-center mr-4 text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Projects
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">Create New Project</h1>
      </div>
      
      <div>
        <ProjectForm />
      </div>
    </div>
  );
} 