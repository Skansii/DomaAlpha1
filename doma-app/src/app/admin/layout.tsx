/* 
 * Root layout for admin section
 * Handles HTML structure and prevents hydration mismatches by
 * properly structuring the document and wrapping client components
 */
export const dynamic = 'force-dynamic';

import React from 'react';
import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'DOMA Admin Dashboard',
  description: 'Administrative dashboard for DOMA Design',
};

/**
 * Root layout for the admin section
 * This layout defines the HTML document structure and applies
 * global styles for all admin pages
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {/* 
          The children will be wrapped with necessary client-side components
          in their respective pages, using ClientSideWrapper
        */}
        {children}
      </body>
    </html>
  );
} 