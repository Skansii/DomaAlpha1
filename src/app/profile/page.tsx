'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Typography, Paper, Avatar, Button, Skeleton, Alert } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user profile data
    if (user) {
      setTimeout(() => {
        setProfileLoading(false);
      }, 1000);
    }
  }, [user]);

  return (
    <ProtectedRoute>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Box sx={{ 
            p: 4, 
            bgcolor: 'primary.main', 
            color: 'white',
            position: 'relative'
          }}>
            <Typography variant="h4" fontWeight={600}>
              User Profile
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
              View and manage your account information
            </Typography>
          </Box>
          
          <Box sx={{ p: 4 }}>
            {isLoading || profileLoading ? (
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Skeleton variant="circular" width={80} height={80} sx={{ mr: 3 }} />
                <Box sx={{ width: '100%' }}>
                  <Skeleton width="40%" height={36} />
                  <Skeleton width="60%" height={24} sx={{ mt: 1 }} />
                </Box>
              </Box>
            ) : (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Avatar 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      bgcolor: 'primary.main',
                      fontSize: '2rem',
                      fontWeight: 600,
                      mr: 3
                    }}
                  >
                    {user?.email?.[0].toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" fontWeight={600}>
                      {user?.email}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Member since {new Date(user?.created_at || '').toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Account Information
                  </Typography>
                  <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="body1" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {user?.email}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1" color="text.secondary">
                        User ID
                      </Typography>
                      <Typography variant="body1" fontWeight={500} sx={{ maxWidth: '50%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {user?.id}
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
                
                <Alert severity="info" sx={{ mb: 4 }}>
                  Your profile is connected to Supabase authentication. You can manage additional settings in your dashboard.
                </Alert>
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    href="/user-dashboard"
                  >
                    Go to Dashboard
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </Container>
    </ProtectedRoute>
  );
} 