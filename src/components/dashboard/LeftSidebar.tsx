'use client';

import { useState } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  IconButton,
  Typography,
  Collapse,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/user-dashboard' },
  { text: 'My Offers', icon: <ShoppingCartIcon />, path: '/user-dashboard/offers' },
  { text: '3D Renderings', icon: <ViewInArIcon />, path: '/user-dashboard/renderings' },
  { text: 'Project Status', icon: <FactCheckIcon />, path: '/user-dashboard/project-status' },
  { text: 'File Uploads', icon: <FileUploadIcon />, path: '/user-dashboard/uploads' },
  { text: 'Help & Support', icon: <HelpIcon />, path: '/user-dashboard/support' },
  { text: 'Profile & Settings', icon: <AccountCircleIcon />, path: '/user-dashboard/profile' },
];

export default function LeftSidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectStatusOpen, setProjectStatusOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProjectStatusClick = () => {
    setProjectStatusOpen(!projectStatusOpen);
  };

  const drawer = (
    <>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2 
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image 
            src="/doma_2_Balken_rot.png" 
            alt="DOMA Logo" 
            width={120} 
            height={40}
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          item.text === 'Project Status' ? (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton onClick={handleProjectStatusClick}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {projectStatusOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={projectStatusOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Ordered" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="In Production" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Delivery" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Installed" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          ) : (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.path}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          )
        ))}
      </List>
    </>
  );

  return (
    <>
      {/* Mobile hamburger menu */}
      {isMobile && (
        <Box 
          sx={{ 
            position: 'fixed',
            top: 0,
            left: 0, 
            width: '100%', 
            display: 'flex',
            alignItems: 'center',
            p: 1,
            bgcolor: 'background.paper',
            zIndex: 1100,
            boxShadow: 1
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Image 
            src="/doma_2_Balken_rot.png" 
            alt="DOMA Logo" 
            width={100} 
            height={32}
            style={{ height: '32px', width: 'auto' }}
          />
        </Box>
      )}

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            borderRadius: '0 12px 12px 0'
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop permanent drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            borderRadius: '0 12px 12px 0',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
} 