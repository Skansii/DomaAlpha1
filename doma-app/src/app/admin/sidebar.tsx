import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      title: 'Users',
      path: '/admin/users',
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      title: 'Products',
      path: '/admin/products',
      icon: <ShoppingBagIcon className="w-5 h-5" />,
    },
    {
      title: 'Projects',
      path: '/admin/projects',
      icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50 border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold">DOMA Admin</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              pathname === item.path
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
} 