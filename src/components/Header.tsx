'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaterialButton from './MaterialButton';
import { AppBar, Toolbar, Box, Drawer, IconButton, List, ListItem, ListItemText, Button, Container, useScrollTrigger, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Features', href: '/features' },
    { label: 'Contact', href: '/contact' }
  ];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsMenuOpen(open);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="default" 
          elevation={isScrolled ? 4 : 0}
          sx={{ 
            backgroundColor: isScrolled ? 'white' : 'rgba(255, 255, 255, 0.95)', 
            backdropFilter: 'blur(8px)'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ padding: { xs: 1, sm: 1.5 }, justifyContent: 'space-between' }}>
              {/* Logo */}
              <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Image 
                  src="/images/doma_2_Balken_rot.png" 
                  alt="DOMA DESIGN Logo" 
                  width={120} 
                  height={40}
                  style={{ height: '40px', width: 'auto' }}
                />
              </Link>
              
              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.label}
                    component={Link} 
                    href={item.href}
                    sx={{ 
                      color: 'text.secondary', 
                      mx: 1,
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Auth Buttons - Desktop */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                <MaterialButton 
                  href="/login" 
                  variant="outlined" 
                  color="primary"
                  size="small"
                >
                  Log in
                </MaterialButton>
                <MaterialButton 
                  href="/signup" 
                  variant="contained" 
                  color="primary"
                  size="small"
                >
                  Get Started
                </MaterialButton>
              </Box>
              
              {/* Mobile Menu Button */}
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
      {/* Add toolbar placeholder to prevent content from hiding under the fixed AppBar */}
      <Toolbar id="back-to-top-anchor" />
      
      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { 
            width: '85%', 
            maxWidth: '320px',
            boxSizing: 'border-box',
            padding: 2
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ px: 2, py: 3 }}>
          <Image 
            src="/images/doma_2_Balken_rot.png" 
            alt="DOMA DESIGN Logo" 
            width={100} 
            height={35}
            style={{ height: '35px', width: 'auto' }}
          />
        </Box>
        
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem 
              key={item.label} 
              component={Link} 
              href={item.href}
              onClick={toggleDrawer(false)}
              sx={{ 
                py: 1.5, 
                borderRadius: 1,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } 
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ px: 2, py: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <MaterialButton 
            href="/login" 
            variant="outlined" 
            color="primary"
            fullWidth
            onClick={toggleDrawer(false)}
          >
            Log in
          </MaterialButton>
          <MaterialButton 
            href="/signup" 
            variant="contained" 
            color="primary"
            fullWidth
            onClick={toggleDrawer(false)}
          >
            Get Started
          </MaterialButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
