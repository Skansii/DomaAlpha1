'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

/**
 * Client-side only Providers wrapper
 * This component must be used only on the client side to wrap content
 * that needs access to session data
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>{children}</SessionProvider>
  );
} 