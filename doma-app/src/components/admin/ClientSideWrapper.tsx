'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface ClientSideWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  withSession?: boolean;
}

/**
 * ClientSideWrapper ensures content is only rendered on the client side
 * This prevents hydration errors when client and server rendered content differs
 * 
 * @param children - Content to render on client-side
 * @param fallback - Optional fallback UI to show while client-side rendering is happening
 * @param withSession - Whether to wrap content with SessionProvider
 */
export default function ClientSideWrapper({ 
  children, 
  fallback,
  withSession = true
}: ClientSideWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Only set mounted state on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show fallback while client-side code hasn't run yet
  if (!isMounted) {
    return fallback ? <>{fallback}</> : null;
  }

  // Wrap with suppressHydrationWarning to prevent React warnings
  // about client/server mismatch
  const content = (
    <div suppressHydrationWarning>
      {children}
    </div>
  );

  // Optionally wrap with SessionProvider for auth-related components
  return withSession ? <SessionProvider>{content}</SessionProvider> : content;
} 