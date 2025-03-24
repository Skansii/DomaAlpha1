'use client';

import { useState } from 'react';
import { 
  Box, 
  Drawer, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Divider, 
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Avatar,
  useMediaQuery,
  useTheme,
  Badge
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import RecentRenderings from './RecentRenderings';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DescriptionIcon from '@mui/icons-material/Description';
import ForumIcon from '@mui/icons-material/Forum';

const drawerWidth = 300;

export default function RightSidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1200));
  const [open, setOpen] = useState(!isMobile);
  
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  // Only show toggle button on mobile or tablet
  const handleNotificationClick = () => {
    if (isMobile) {
      toggleDrawer();
    }
  };
  
  const drawerContent = (
    <Box sx={{ width: drawerWidth, p: 2, overflow: 'auto' }}>
      {/* Drawer Header with close icon on mobile */}
      {isMobile && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 2
        }}>
          <Typography variant="h6">Quick Access</Typography>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      
      {/* Recent 3D Renderings */}
      <Box sx={{ mt: !isMobile ? 4 : 0, mb: 3 }}>
        <RecentRenderings />
      </Box>
      
      {/* Latest Offers */}
      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
        Latest Offers
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start'
        }}>
          <Typography variant="body1" fontWeight="500">
            Kitchen Cabinets & Installation
          </Typography>
          <Chip 
            label="Pending" 
            color="warning" 
            size="small"
            sx={{ height: 24 }} 
          />
        </Box>
        <Typography variant="h6" fontWeight="600" sx={{ mt: 1, mb: 2 }}>
          €8,945.00
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Includes custom cabinets, countertops, and professional installation
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button 
            variant="contained" 
            size="small" 
            startIcon={<CheckCircleIcon />}
            sx={{ 
              flex: 1,
              backgroundColor: 'success.main',
              '&:hover': {
                backgroundColor: 'success.dark',
              }
            }}
          >
            Accept
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<CancelIcon />}
            sx={{ flex: 1 }}
          >
            Revise
          </Button>
        </Stack>
      </Paper>
      
      {/* File Upload History */}
      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
        File Upload History
      </Typography>
      <List sx={{ mb: 3 }}>
        <ListItem 
          secondaryAction={
            <IconButton edge="end" size="small">
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          }
          sx={{ px: 2, py: 1, bgcolor: 'background.paper', borderRadius: 1, mb: 1 }}
        >
          <ListItemText 
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DescriptionIcon 
                  sx={{ 
                    mr: 1, 
                    fontSize: '1.25rem', 
                    color: 'primary.main'
                  }} 
                />
                <Typography variant="body2" noWrap>
                  Kitchen_FloorPlan_Final.pdf
                </Typography>
              </Box>
            }
            secondary="Today, 11:23 AM"
            secondaryTypographyProps={{
              variant: 'caption',
              color: 'text.secondary'
            }}
          />
        </ListItem>
        
        <ListItem 
          secondaryAction={
            <IconButton edge="end" size="small">
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          }
          sx={{ px: 2, py: 1, bgcolor: 'background.paper', borderRadius: 1, mb: 1 }}
        >
          <ListItemText 
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DescriptionIcon 
                  sx={{ 
                    mr: 1, 
                    fontSize: '1.25rem', 
                    color: 'info.main'
                  }} 
                />
                <Typography variant="body2" noWrap>
                  Kitchen_Measurements.xlsx
                </Typography>
              </Box>
            }
            secondary="Yesterday, 09:45 AM"
            secondaryTypographyProps={{
              variant: 'caption',
              color: 'text.secondary'
            }}
          />
        </ListItem>
      </List>
      
      {/* Customer Support Messages */}
      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
        Customer Support Messages
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
          <Avatar
            alt="Sarah K."
            src="https://randomuser.me/api/portraits/women/44.jpg"
            sx={{ width: 36, height: 36 }}
          />
          <Box>
            <Typography variant="body2" fontWeight="500">
              Sarah from DOMA Design
            </Typography>
            <Typography variant="caption" color="text.secondary">
              2 days ago
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          We've updated your kitchen design with the requested changes. Please check the new renders in the 3D Renderings section.
        </Typography>
        <Button 
          variant="outlined" 
          size="small" 
          startIcon={<ForumIcon />}
          fullWidth
          sx={{ borderRadius: '6px' }}
        >
          Reply
        </Button>
      </Paper>
    </Box>
  );
  
  return (
    <>
      {/* Floating notification icon for mobile */}
      {isMobile && (
        <Box 
          sx={{ 
            position: 'fixed', 
            bottom: 20, 
            right: 20, 
            zIndex: 1100 
          }}
        >
          <IconButton 
            onClick={handleNotificationClick}
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                bgcolor: 'primary.dark',
              }
            }}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
      )}
      
      {/* Responsive drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={toggleDrawer}
        anchor="right"
        sx={{
          width: drawerWidth,
          display: { xs: open ? 'block' : 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: '-4px 0 8px rgba(0, 0, 0, 0.025)',
            mt: { xs: 0, sm: '64px' },
            height: { xs: '100%', sm: 'calc(100% - 64px)' },
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
} 