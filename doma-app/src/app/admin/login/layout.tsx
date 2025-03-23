/**
 * Login page layout
 * Simply passes children through without adding HTML structure
 * to prevent conflict with root layout
 */
export const dynamic = 'force-dynamic';

import React from 'react';
import { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'DOMA Admin Login',
  description: 'Login to the DOMA Design Admin Dashboard',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Pass children directly to avoid HTML nesting conflicts
  // The parent AdminLayout already provides the HTML/body structure
  return children;
} 