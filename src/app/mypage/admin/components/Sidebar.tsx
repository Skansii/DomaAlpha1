'use client';

import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  Collapse,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ShoppingBag as ShoppingBagIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  Folder as FolderIcon,
  Topic as TopicIcon,
  Image as ImageIcon,
  Money as MoneyIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';

// Sidebar width
const drawerWidth = 250;

// Navigation items
const navItems = [
  { 
    name: 'Dashboard', 
    icon: <DashboardIcon />, 
    path: '/mypage/admin',
    exact: true
  },
  { 
    name: 'Customers', 
    icon: <PeopleIcon />, 
    path: '/mypage/admin/customers' 
  },
  { 
    name: 'Products', 
    icon: <ShoppingBagIcon />, 
    path: '/mypage/admin/products',
    subItems: [
      { name: 'All Products', path: '/mypage/admin/products' },
      { name: 'Add New', path: '/mypage/admin/products/new' },
      { name: 'Categories', path: '/mypage/admin/products/categories' },
    ]
  },
  { 
    name: 'Analytics', 
    icon: <AssessmentIcon />, 
    path: '/mypage/admin/analytics' 
  },
  { 
    name: 'Content', 
    icon: <TopicIcon />, 
    path: '/mypage/admin/content',
    subItems: [
      { name: 'Pages', path: '/mypage/admin/content/pages' },
      { name: 'Blog Posts', path: '/mypage/admin/content/blog' },
      { name: 'Media', path: '/mypage/admin/content/media' },
    ]
  },
  { 
    name: 'Files', 
    icon: <FolderIcon />, 
    path: '/mypage/admin/files' 
  },
  { 
    name: 'Payments', 
    icon: <MoneyIcon />, 
    path: '/mypage/admin/payments' 
  },
  { 
    name: 'Notifications', 
    icon: <NotificationsIcon />, 
    path: '/mypage/admin/notifications' 
  },
  { 
    name: 'Settings', 
    icon: <SettingsIcon />, 
    path: '/mypage/admin/settings' 
  },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // Check if an item is active
  const isActive = (path: string, exact = false) => {
    if (exact) {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  // Toggle submenu
  const handleToggleSubmenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  // Navigate to a path
  const handleNavigation = (path: string) => {
    router.push(path);
    if (mobileOpen) {
      onClose();
    }
  };

  // Drawer content
  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ p: { xs: 2, md: 2.5 }, mt: '64px' }}>
        <Typography 
          variant="subtitle2" 
          color="text.secondary"
          sx={{ 
            mb: 1,
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            opacity: 0.7, 
          }}
        >
          Admin Navigation
        </Typography>
      </Box>
      
      <List 
        sx={{ 
          px: 1,
          '& .MuiListItemButton-root': {
            borderRadius: 1.5,
            mb: 0.5,
            py: 1,
          },
        }}
      >
        {navItems.map((item) => {
          const isItemActive = isActive(item.path, item.exact);
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isSubMenuOpen = openSubMenu === item.name;
          
          return (
            <React.Fragment key={item.name}>
              <ListItem 
                disablePadding 
                sx={{ 
                  display: 'block',
                  mb: hasSubItems ? 0 : 0.5, 
                }}
              >
                <ListItemButton
                  sx={{
                    px: 2,
                    backgroundColor: isItemActive && !hasSubItems ? 
                      'rgba(0, 0, 0, 0.04)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'primary.lighter',
                    },
                  }}
                  selected={isItemActive && !hasSubItems}
                  onClick={() => {
                    if (hasSubItems) {
                      handleToggleSubmenu(item.name);
                    } else {
                      handleNavigation(item.path);
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: isItemActive ? 
                        theme.palette.primary.main : 
                        theme.palette.text.secondary,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.name} 
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: isItemActive ? 600 : 500,
                      color: isItemActive ? 
                        theme.palette.primary.main : 
                        theme.palette.text.primary,
                    }}
                  />
                  {hasSubItems && (
                    isSubMenuOpen ? <ExpandLess /> : <ExpandMore />
                  )}
                </ListItemButton>
              </ListItem>
              
              {hasSubItems && (
                <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ ml: 2 }}>
                    {item.subItems?.map((subItem) => {
                      const isSubItemActive = isActive(subItem.path);
                      
                      return (
                        <ListItemButton
                          key={subItem.name}
                          sx={{
                            pl: 4,
                            py: 0.75,
                            borderRadius: 1.5,
                            mb: 0.5,
                            backgroundColor: isSubItemActive ? 
                              'rgba(0, 0, 0, 0.04)' : 'transparent',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                          }}
                          onClick={() => handleNavigation(subItem.path)}
                        >
                          <ListItemText 
                            primary={subItem.name} 
                            primaryTypographyProps={{
                              fontSize: '0.813rem',
                              fontWeight: isSubItemActive ? 600 : 400,
                              color: isSubItemActive ? 
                                theme.palette.primary.main : 
                                theme.palette.text.secondary,
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
      
      <Box sx={{ flexGrow: 1 }} />
      
      <Box sx={{ p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'rgba(0, 0, 0, 0.02)',
            border: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.08)',
          }}
        >
          <Typography variant="body2" fontWeight={500} sx={{ mb: 0.5 }}>
            Need Help?
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Check our documentation or contact support for assistance.
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
            boxShadow: 3,
          },
        }}
      >
        {drawerContent}
      </Drawer>
      
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { 
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.08)',
            boxShadow: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
} 