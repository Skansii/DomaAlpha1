'use client';

import React from 'react';
import { 
  Box, 
  Skeleton, 
  Card, 
  CardContent, 
  Grid, 
  Typography,
  Divider
} from '@mui/material';

export default function AdminDashboardLoading() {
  return (
    <Box sx={{ pb: 6 }}>
      {/* Page Header Skeleton */}
      <Box sx={{ mb: 4 }}>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            mb: 2,
          }}
        >
          <Box>
            <Skeleton width={120} height={24} sx={{ mb: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 0 } }}>
              <Skeleton width={180} height={36} />
              <Skeleton width={60} height={24} sx={{ ml: 2 }} />
            </Box>
          </Box>
          <Skeleton width={100} height={36} />
        </Box>
        
        <Skeleton width={300} height={20} />
      </Box>

      {/* Last Updated Info Skeleton */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end',
          mb: 2,
        }}
      >
        <Skeleton width={180} height={16} />
      </Box>

      {/* Stats Card Skeleton */}
      <Card 
        elevation={0} 
        sx={{ 
          mb: 4, 
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          borderRadius: 2,
        }}
      >
        <Box 
          sx={{ 
            px: 3, 
            py: 2,
            borderBottom: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.08)',
          }}
        >
          <Skeleton width={180} height={24} />
        </Box>
        
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box 
                  sx={{ 
                    p: 3, 
                    borderRadius: 2, 
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <Skeleton width="40%" height={16} />
                  </Box>
                  <Box sx={{ mb: 1.5 }}>
                    <Skeleton width="60%" height={32} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Skeleton width="30%" height={16} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      
      {/* Dashboard Cards Skeleton - Section 1 */}
      <Card 
        elevation={0} 
        sx={{ 
          mb: 4, 
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          borderRadius: 2,
        }}
      >
        <Box 
          sx={{ 
            px: 3, 
            py: 2,
            borderBottom: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.08)',
          }}
        >
          <Skeleton width={150} height={24} />
        </Box>
        
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[...Array(3)].map((_, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <Skeleton width="70%" height={24} />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Skeleton width="90%" height={16} />
                    <Skeleton width="60%" height={16} sx={{ mt: 0.5 }} />
                  </Box>
                  <Box sx={{ mt: 'auto' }}>
                    <Skeleton width={100} height={16} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      
      {/* Dashboard Cards Skeleton - Section 2 */}
      <Card 
        elevation={0} 
        sx={{ 
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          borderRadius: 2,
        }}
      >
        <Box 
          sx={{ 
            px: 3, 
            py: 2,
            borderBottom: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.08)',
          }}
        >
          <Skeleton width={180} height={24} />
        </Box>
        
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[...Array(3)].map((_, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <Skeleton width="70%" height={24} />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Skeleton width="90%" height={16} />
                    <Skeleton width="60%" height={16} sx={{ mt: 0.5 }} />
                  </Box>
                  <Box sx={{ mt: 'auto' }}>
                    <Skeleton width={100} height={16} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
} 