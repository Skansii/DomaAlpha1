'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { CircularProgress, Box, Typography } from '@mui/material';

/**
 * Props for the ProtectedRoute component
 */
interface ProtectedRouteProps {
  /** The content to render when authenticated */
  children: React.ReactNode;
  /** Optional fallback URL to redirect to if not authenticated (defaults to /login) */
  fallbackUrl?: string;
  /** Optional fallback component to show instead of the default loading spinner */
  loadingFallback?: React.ReactNode;
}

/**
 * ProtectedRoute component
 * 
 * Protects routes by requiring authentication before allowing access.
 * Redirects to login page if user is not authenticated.
 * Shows a loading state while checking authentication status.
 */
export default function ProtectedRoute({
  children,
  fallbackUrl = '/login',
  loadingFallback,
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if we've finished loading and there's no user
    if (!isLoading && !user) {
      // Redirect to login page if not authenticated
      router.push(fallbackUrl);
    }
  }, [user, isLoading, router, fallbackUrl]);

  // Show loading state while checking authentication
  if (isLoading) {
    if (loadingFallback) {
      return <>{loadingFallback}</>;
    }
    
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%', 
          height: '100vh',
          gap: 2
        }}
      >
        <CircularProgress size={48} color="primary" />
        <Typography variant="body1" color="text.secondary">
          Authenticating...
        </Typography>
      </Box>
    );
  }

  // If authenticated, render the children
  return user ? <>{children}</> : null;
} 