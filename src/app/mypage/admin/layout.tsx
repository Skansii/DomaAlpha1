'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Tooltip,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import Sidebar from './components/Sidebar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<null | HTMLElement>(null);
  
  // Handle the user menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle the drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  // Handle notifications menu
  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchorEl(event.currentTarget);
  };
  
  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          color: 'text.primary',
        }}
      >
        <Toolbar 
          sx={{ 
            pr: { xs: 1, sm: 3 }, 
            pl: { xs: 1, sm: 3 },
            minHeight: { xs: 60, sm: 64 }
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              height: '40px',
              position: 'relative'
            }}
          >
            <Image 
              src="/images/doma_2_Balken_rot.png" 
              alt="DOMA DESIGN Logo" 
              width={120} 
              height={40}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Notification Icon */}
            <Tooltip title="Notifications">
              <IconButton 
                size="large" 
                aria-label="show new notifications" 
                color="inherit"
                onClick={handleNotificationsOpen}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                  position: 'relative',
                }}
              >
                <NotificationsIcon />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: theme.palette.error.main,
                  }}
                />
              </IconButton>
            </Tooltip>
            
            {/* Notification Menu */}
            <Menu
              anchorEl={notificationsAnchorEl}
              open={Boolean(notificationsAnchorEl)}
              onClose={handleNotificationsClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              sx={{ mt: 1 }}
            >
              <Box sx={{ px: 2, py: 1.5 }}>
                <Typography variant="subtitle1" fontWeight={600}>Notifications</Typography>
              </Box>
              <Divider />
              <MenuItem onClick={handleNotificationsClose}>
                <Box sx={{ py: 0.5 }}>
                  <Typography variant="body2" fontWeight={500}>New user registration</Typography>
                  <Typography variant="caption" color="text.secondary">2 minutes ago</Typography>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleNotificationsClose}>
                <Box sx={{ py: 0.5 }}>
                  <Typography variant="body2" fontWeight={500}>Project update: Kitchen redesign</Typography>
                  <Typography variant="caption" color="text.secondary">1 hour ago</Typography>
                </Box>
              </MenuItem>
              <Divider />
              <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ cursor: 'pointer', fontWeight: 500 }}
                >
                  View all notifications
                </Typography>
              </Box>
            </Menu>
            
            {/* Help Icon */}
            <Tooltip title="Help & Resources">
              <IconButton
                size="large"
                aria-label="help and resources"
                color="inherit"
                sx={{
                  ml: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <HelpIcon />
              </IconButton>
            </Tooltip>
            
            {/* User Profile Avatar */}
            <Tooltip title="Account settings">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
                sx={{
                  ml: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  <AccountCircleIcon fontSize="small" />
                </Avatar>
              </IconButton>
            </Tooltip>
            
            {/* User Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: 1 }}
            >
              <Box sx={{ px: 2, py: 1 }}>
                <Typography variant="body1" fontWeight={600}>Admin User</Typography>
                <Typography variant="body2" color="text.secondary">admin@domadesign.com</Typography>
              </Box>
              <Divider />
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <Divider />
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Sidebar 
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { md: `calc(100% - 280px)` },
          ml: { md: '280px' },
          mt: '64px',
          backgroundColor: 'background.default',
          maxWidth: '1600px',
          pl: { md: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
} 