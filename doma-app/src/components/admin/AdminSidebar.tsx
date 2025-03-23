'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { 
  HomeIcon, 
  UsersIcon, 
  ShoppingBagIcon,
  DocumentDuplicateIcon,
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';
import ClientSideWrapper from './ClientSideWrapper';

/**
 * Admin Sidebar component - client-side only
 * Uses ClientSideWrapper to prevent hydration mismatches
 */
export default function AdminSidebar() {
  // usePathname is a client-side hook
  const pathname = usePathname();
  
  // Helper function to determine active menu item
  const isActive = (path: string) => {
    return pathname?.startsWith(path);
  };

  // Define menu items with updated routes
  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'Users', href: '/admin/dashboard/users', icon: UsersIcon },
    { name: 'Products', href: '/admin/dashboard/products', icon: ShoppingBagIcon },
    { name: 'Projects', href: '/admin/dashboard/projects', icon: DocumentDuplicateIcon },
  ];

  // Main sidebar content - only rendered on client after hydration
  const sidebarContent = (
    <div className="bg-[#1e1e2d] text-white w-64 flex-shrink-0 h-screen overflow-y-auto">
      <div className="p-6">
        <Link href="/admin/dashboard" className="text-xl font-semibold flex items-center justify-center">
          <span>Admin Dashboard</span>
        </Link>
      </div>
      
      <nav className="mt-5 px-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                  isActive(item.href)
                    ? 'bg-[#28283a] text-white'
                    : 'text-gray-300 hover:bg-[#28283a] hover:text-white'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" aria-hidden="true" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="px-4 mt-12">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex w-full items-center px-4 py-3 text-sm text-gray-300 rounded-lg hover:bg-[#28283a] hover:text-white"
        >
          <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" aria-hidden="true" />
          Logout
        </button>
      </div>
    </div>
  );

  // Loading skeleton for the sidebar
  const sidebarSkeleton = (
    <div className="bg-[#1e1e2d] text-white w-64 flex-shrink-0 h-screen overflow-y-auto">
      <div className="p-6">
        <div className="h-6 bg-gray-700 rounded animate-pulse w-40 mx-auto"></div>
      </div>
      
      <div className="mt-5 px-4">
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center px-4 py-3">
              <div className="w-5 h-5 mr-3 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Use ClientSideWrapper with withSession=false since we're already wrapped in a parent
  return (
    <ClientSideWrapper fallback={sidebarSkeleton} withSession={false}>
      {sidebarContent}
    </ClientSideWrapper>
  );
} 