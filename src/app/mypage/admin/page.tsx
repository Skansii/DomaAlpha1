'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Button, 
  Tooltip, 
  Divider,
  Chip,
  useTheme,
  IconButton
} from '@mui/material';
import { 
  Refresh as RefreshIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  ArrowForward as ArrowForwardIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingCart as ShoppingCartIcon,
  Inventory as InventoryIcon,
  Construction as ConstructionIcon,
  Article as ArticleIcon,
  InsertDriveFile as FileIcon,
  Analytics as AnalyticsIcon,
  Label as LabelIcon
} from '@mui/icons-material';

export default function AdminDashboard() {
  const theme = useTheme();
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  const handleRefresh = () => {
    // In a real application, this would refresh the data
    setLastUpdated(new Date());
  };
  
  return (
    <Box sx={{ pb: 6 }}>
      {/* Page Header */}
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
            <Typography color="text.secondary" gutterBottom>
              Welcome back
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700,
                mb: { xs: 1, sm: 0 },
              }}
            >
              Admin Dashboard
            </Typography>
          </Box>
          
          <Tooltip title="Refresh dashboard data">
            <Button
              variant="contained"
              startIcon={<RefreshIcon />}
              onClick={handleRefresh}
              sx={{
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                },
              }}
            >
              Refresh
            </Button>
          </Tooltip>
        </Box>
        
        <Typography variant="body2" color="text.secondary">
          Get a quick overview of your business performance and recent activities.
        </Typography>
      </Box>

      {/* Last Updated Info */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end',
          mb: 2,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </Typography>
      </Box>

      {/* Stats Overview */}
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Performance Metrics
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Today vs. Previous Week
          </Typography>
        </Box>
        
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  color="text.secondary"
                  gutterBottom
                >
                  Total Revenue
                </Typography>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ mb: 1 }}
                >
                  $14,256
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: 'success.main',
                  }}
                >
                  <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography 
                    variant="body2" 
                    fontWeight={500}
                  >
                    +12.3%
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  color="text.secondary"
                  gutterBottom
                >
                  New Customers
                </Typography>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ mb: 1 }}
                >
                  243
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: 'success.main',
                  }}
                >
                  <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography 
                    variant="body2" 
                    fontWeight={500}
                  >
                    +8.1%
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  color="text.secondary"
                  gutterBottom
                >
                  New Orders
                </Typography>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ mb: 1 }}
                >
                  56
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: 'success.main',
                  }}
                >
                  <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography 
                    variant="body2" 
                    fontWeight={500}
                  >
                    +5.4%
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  color="text.secondary"
                  gutterBottom
                >
                  Conversion Rate
                </Typography>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ mb: 1 }}
                >
                  3.2%
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: 'error.main',
                  }}
                >
                  <TrendingDownIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography 
                    variant="body2" 
                    fontWeight={500}
                  >
                    -1.8%
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      {/* Quick Access */}
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
          <Typography variant="h6" fontWeight={600}>
            Quick Access
          </Typography>
        </Box>
        
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Recent Customers
                  </Typography>
                  <Chip
                    label="New"
                    size="small"
                    sx={{
                      bgcolor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                      fontWeight: 600,
                      fontSize: '0.625rem',
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  View and manage your most recent customer registrations and interactions.
                </Typography>
                <Box 
                  sx={{ 
                    mt: 'auto', 
                    display: 'flex', 
                    alignItems: 'center',
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: theme.palette.primary.main 
                    }}
                  >
                    <AccountCircleIcon />
                  </Box>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 500 }}
                    href="/mypage/admin/customers"
                  >
                    View Customers
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
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
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  Project Status
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Check the progress of ongoing design projects and client requirements.
                </Typography>
                <Box 
                  sx={{ 
                    mt: 'auto', 
                    display: 'flex', 
                    alignItems: 'center',
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: theme.palette.primary.main 
                    }}
                  >
                    <ConstructionIcon />
                  </Box>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 500 }}
                    href="/mypage/admin/projects"
                  >
                    View Projects
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
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
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  Product Inventory
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Monitor stock levels, popular items, and products that need reordering.
                </Typography>
                <Box 
                  sx={{ 
                    mt: 'auto', 
                    display: 'flex', 
                    alignItems: 'center',
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: theme.palette.primary.main 
                    }}
                  >
                    <InventoryIcon />
                  </Box>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 500 }}
                    href="/mypage/admin/products"
                  >
                    View Inventory
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      {/* Additional Resources */}
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
          <Typography variant="h6" fontWeight={600}>
            Additional Resources
          </Typography>
        </Box>
        
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Content Updates
                  </Typography>
                  <Chip
                    label="New"
                    size="small"
                    sx={{
                      bgcolor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                      fontWeight: 600,
                      fontSize: '0.625rem',
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Update website content, blog posts, and product information.
                </Typography>
                <Box 
                  sx={{ 
                    mt: 'auto', 
                    display: 'flex', 
                    alignItems: 'center',
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: theme.palette.primary.main 
                    }}
                  >
                    <ArticleIcon />
                  </Box>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 500 }}
                    href="/mypage/admin/content"
                  >
                    Manage Content
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
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
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  File Storage
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Access and manage files, images, documents and other media assets.
                </Typography>
                <Box 
                  sx={{ 
                    mt: 'auto', 
                    display: 'flex', 
                    alignItems: 'center',
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: theme.palette.primary.main 
                    }}
                  >
                    <FileIcon />
                  </Box>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 500 }}
                    href="/mypage/admin/files"
                  >
                    Manage Files
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
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
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  Performance Metrics
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  View detailed analytics, sales reports, and conversion metrics.
                </Typography>
                <Box 
                  sx={{ 
                    mt: 'auto', 
                    display: 'flex', 
                    alignItems: 'center',
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: theme.palette.primary.main 
                    }}
                  >
                    <AnalyticsIcon />
                  </Box>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 500 }}
                    href="/mypage/admin/analytics"
                  >
                    View Analytics
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
} 