'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import ProductForm from '@/components/admin/ProductForm';

export default function EditProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center mb-6">
        <Link
          href="/admin/products"
          className="inline-flex items-center mr-4 text-sm text-blue-600 hover:text-blue-800"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Back to Products
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">Edit Product</h1>
      </div>
      
      <div>
        <ProductForm productId={params.id} isEdit={true} />
      </div>
    </div>
  );
}
 