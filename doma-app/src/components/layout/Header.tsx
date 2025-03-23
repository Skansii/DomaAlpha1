'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaterialButton from '../ui/MaterialButton';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  Button, 
  Container, 
  useScrollTrigger,
  Tooltip,
  Divider,
  Typography,
  Menu,
  MenuItem,
  Paper,
  Grid,
  ClickAwayListener
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Script from 'next/script';
import { useAuth } from '@/contexts/AuthContext';

/**
 * MobileNavItem component - Renders a single navigation item in mobile menu
 */
const MobileNavItem = ({ href, label, onClick }) => (
  <ListItem button component={Link} href={href} onClick={onClick}>
    <ListItemText primary={label} />
  </ListItem>
);

/**
 * DesktopNavItem component - Renders a single navigation item in desktop menu
 */
const DesktopNavItem = ({ href, label, isActive = false }) => (
  <Button
    component={Link}
    href={href}
    sx={{
      color: isActive ? 'primary.main' : 'text.primary',
      fontWeight: isActive ? 600 : 500,
      textTransform: 'none',
      mx: 1.5,
      position: 'relative',
      '&:hover': {
        background: 'transparent',
        color: 'primary.main',
      },
      '&::after': isActive ? {
        content: '""',
        position: 'absolute',
        width: '60%',
        height: '2px',
        bottom: 0,
        left: '20%',
        backgroundColor: 'primary.main',
      } : {}
    }}
  >
    {label}
  </Button>
);

/**
 * MegaMenu component - Renders the mega menu dropdown
 */
const MegaMenu = ({ open, onClose }) => (
  <Paper
    elevation={3}
    sx={{
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
      py: 4,
      display: open ? 'block' : 'none',
      borderTop: '1px solid',
      borderColor: 'divider',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="primary" gutterBottom>Produktkategorien</Typography>
          <List dense disablePadding>
            {[
              { label: 'Küchenschränke', href: '/products/kitchen-cabinets' },
              { label: 'Badezimmerschränke', href: '/products/bathroom-cabinets' },
              { label: 'Ankleidezimmer', href: '/products/walk-in-closets' },
              { label: 'Wohnzimmermöbel', href: '/products/living-room-furniture' },
              { label: 'Maßgefertigte Lösungen', href: '/products/custom-solutions' },
            ].map((item, index) => (
              <ListItem key={index} dense disablePadding sx={{ py: 0.5 }}>
                <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                    {item.label}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="primary" gutterBottom>Design & Inspiration</Typography>
          <List dense disablePadding>
            {[
              { label: 'Designgalerie', href: '/designs/gallery' },
              { label: 'Materialien & Oberflächen', href: '/designs/materials' },
              { label: 'Farbkonfigurationen', href: '/designs/colors' },
              { label: 'Erfolgsgeschichten', href: '/designs/case-studies' },
              { label: 'Designtipps', href: '/blog/design-tips' },
            ].map((item, index) => (
              <ListItem key={index} dense disablePadding sx={{ py: 0.5 }}>
                <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                    {item.label}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="primary" gutterBottom>Services & Support</Typography>
          <List dense disablePadding>
            {[
              { label: 'Beratungstermin', href: '/services/consultation' },
              { label: 'Installation & Montage', href: '/services/installation' },
              { label: 'Wartung & Pflege', href: '/services/maintenance' },
              { label: 'Garantie & Rückgabe', href: '/warranty' },
              { label: 'Kundensupport', href: '/support' },
            ].map((item, index) => (
              <ListItem key={index} dense disablePadding sx={{ py: 0.5 }}>
                <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                    {item.label}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  </Paper>
);

/**
 * Header component - Main navigation header for the application
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileLanguageAnchorEl, setMobileLanguageAnchorEl] = useState<null | HTMLElement>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleMobileLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileLanguageAnchorEl(event.currentTarget);
  };

  const handleMobileLanguageMenuClose = () => {
    setMobileLanguageAnchorEl(null);
  };

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!megaMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Features', href: '/features' },
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
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={isScrolled ? 4 : 0}
        sx={{ 
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)', 
          backdropFilter: 'blur(8px)',
          zIndex: 1300
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
              
              {/* Doma Digital Mega Menu Button */}
              <Box ref={megaMenuRef} sx={{ position: 'relative' }}>
                <Button 
                  onClick={toggleMegaMenu}
                  endIcon={megaMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  sx={{ 
                    color: 'text.secondary', 
                    mx: 1,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  Doma Digital
                </Button>
                
                {/* Mega Menu */}
                {megaMenuOpen && (
                  <Paper 
                    elevation={4}
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '900px',
                      maxWidth: '90vw',
                      mt: 1,
                      p: 3,
                      zIndex: 1400,
                      borderRadius: 2
                    }}
                  >
                    <Grid container spacing={3}>
                      {/* First Layer */}
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="primary" sx={{ mb: 2, pb: 1, borderBottom: '1px solid #eaeaea' }}>
                          Solutions
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          <Link href="/solutions/enterprise" style={{ textDecoration: 'none' }}>
                            <Typography variant="body1" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                              Enterprise Solutions
                            </Typography>
                          </Link>
                          <Link href="/solutions/small-business" style={{ textDecoration: 'none' }}>
                            <Typography variant="body1" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                              Small Business
                            </Typography>
                          </Link>
                          <Link href="/solutions/startups" style={{ textDecoration: 'none' }}>
                            <Typography variant="body1" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                              Startups
                            </Typography>
                          </Link>
                        </Box>
                      </Grid>
                      
                      {/* Second Layer */}
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="primary" sx={{ mb: 2, pb: 1, borderBottom: '1px solid #eaeaea' }}>
                          Services
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          <Link href="/services/web-development" style={{ textDecoration: 'none' }}>
                            <Typography variant="body1" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                              Web Development
                            </Typography>
                          </Link>
                          <Link href="/services/app-development" style={{ textDecoration: 'none' }}>
                            <Typography variant="body1" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                              App Development
                            </Typography>
                          </Link>
                          <Link href="/services/consulting" style={{ textDecoration: 'none' }}>
                            <Typography variant="body1" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                              Digital Consulting
                            </Typography>
                          </Link>
                        </Box>
                      </Grid>
                      
                      {/* Third Layer with Wistia Video */}
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="primary" sx={{ mb: 2, pb: 1, borderBottom: '1px solid #eaeaea' }}>
                          Featured
                        </Typography>
                        <Box sx={{ borderRadius: 1, overflow: 'hidden' }}>
                          {/* Wistia Video Integration */}
                          <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                            <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
                              <div className="wistia_embed wistia_async_wsvp1u6hff videoFoam=true" style={{height: '100%', position: 'relative', width: '100%'}}>
                                <div className="wistia_swatch" style={{height: '100%', left: 0, opacity: 1, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%'}}>
                                  <img src="https://fast.wistia.com/embed/medias/wsvp1u6hff/swatch" style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}} alt="" aria-hidden="true" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Box>
                        {/* External Wistia Script - will be injected once when component mounts */}
                        <Box sx={{ display: 'none' }}>
                          {megaMenuOpen && (
                            <Script 
                              id="wistia-script"
                              strategy="afterInteractive"
                              src="https://fast.wistia.com/assets/external/E-v1.js"
                              onLoad={() => {
                                // Window declaration to avoid TypeScript errors with Wistia
                                const w = window as any;
                                if (w._wq) {
                                  w._wq.push({ id: 'wsvp1u6hff', onReady: function(video: any) {
                                    // Video is ready to be interacted with
                                  }});
                                }
                              }}
                            />
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                )}
              </Box>
              
              {/* Contact Button */}
              <Button 
                component={Link} 
                href="/contact"
                sx={{ 
                  color: 'text.secondary', 
                  mx: 1,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                  }
                }}
              >
                Contact
              </Button>
            </Box>

            {/* Language Selection - Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
              <Button
                size="small"
                onClick={handleLanguageMenuOpen}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ 
                  minWidth: 'auto', 
                  padding: '4px 8px',
                  textTransform: 'none',
                  color: 'text.secondary'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Image 
                    src="/images/flags/germany.svg" 
                    alt="Current language" 
                    width={20} 
                    height={14} 
                    style={{ borderRadius: '2px', marginRight: '6px' }}
                  />
                  <Typography variant="body2">DE</Typography>
                </Box>
              </Button>
              <Menu
                anchorEl={languageAnchorEl}
                open={Boolean(languageAnchorEl)}
                onClose={handleLanguageMenuClose}
                PaperProps={{
                  elevation: 2,
                  sx: { minWidth: '120px', mt: 1 }
                }}
              >
                <MenuItem onClick={handleLanguageMenuClose}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Image 
                      src="/images/flags/germany.svg" 
                      alt="German" 
                      width={20} 
                      height={14} 
                      style={{ borderRadius: '2px', marginRight: '8px' }}
                    />
                    <Typography variant="body2">Deutsch</Typography>
                  </Box>
                </MenuItem>
                <MenuItem onClick={handleLanguageMenuClose}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Image 
                      src="/images/flags/bulgaria.svg" 
                      alt="Bulgarian" 
                      width={20} 
                      height={14} 
                      style={{ borderRadius: '2px', marginRight: '8px' }}
                    />
                    <Typography variant="body2">Български</Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>

            {/* Auth Buttons - Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              {user ? (
                <>
                  <MaterialButton 
                    href="/user-dashboard" 
                    variant="outlined" 
                    color="primary"
                    size="small"
                  >
                    Dashboard
                  </MaterialButton>
                  <MaterialButton 
                    onClick={() => signOut()}
                    variant="contained" 
                    color="primary"
                    size="small"
                  >
                    Sign Out
                  </MaterialButton>
                </>
              ) : (
                <>
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
                </>
              )}
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
              disablePadding
              component={Link}
              href={item.href}
              onClick={toggleDrawer(false)}
              sx={{ 
                py: 1.5,
                '&:hover': { color: 'primary.main' }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          
          {/* Doma Digital in Mobile Menu */}
          <ListItem 
            disablePadding
            button
            onClick={() => {
              // Handle mobile mega menu or link to overview page
              toggleDrawer(false)(new Event('click') as unknown as React.MouseEvent);
              window.location.href = '/doma-digital';
            }}
            sx={{ 
              py: 1.5,
              '&:hover': { color: 'primary.main' }
            }}
          >
            <ListItemText primary="Doma Digital" />
          </ListItem>
          
          {/* Contact in Mobile Menu */}
          <ListItem 
            disablePadding
            component={Link}
            href="/contact"
            onClick={toggleDrawer(false)}
            sx={{ 
              py: 1.5,
              '&:hover': { color: 'primary.main' }
            }}
          >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
        
        {/* Language Selection - Mobile */}
        <Box sx={{ px: 3, py: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
              Language:
            </Typography>
            <Button
              size="small"
              onClick={handleMobileLanguageMenuOpen}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ 
                minWidth: 'auto', 
                padding: '4px 8px',
                textTransform: 'none'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image 
                  src="/images/flags/germany.svg" 
                  alt="Current language" 
                  width={20} 
                  height={14} 
                  style={{ borderRadius: '2px', marginRight: '6px' }}
                />
                <Typography variant="body2">DE</Typography>
              </Box>
            </Button>
            <Menu
              anchorEl={mobileLanguageAnchorEl}
              open={Boolean(mobileLanguageAnchorEl)}
              onClose={handleMobileLanguageMenuClose}
              PaperProps={{
                elevation: 2,
                sx: { minWidth: '120px' }
              }}
            >
              <MenuItem onClick={handleMobileLanguageMenuClose}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Image 
                    src="/images/flags/germany.svg" 
                    alt="German" 
                    width={20} 
                    height={14} 
                    style={{ borderRadius: '2px', marginRight: '8px' }}
                  />
                  <Typography variant="body2">Deutsch</Typography>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleMobileLanguageMenuClose}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Image 
                    src="/images/flags/bulgaria.svg" 
                    alt="Bulgarian" 
                    width={20} 
                    height={14} 
                    style={{ borderRadius: '2px', marginRight: '8px' }}
                  />
                  <Typography variant="body2">Български</Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
        
        <Box sx={{ px: 2, py: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {user ? (
            <>
              <MaterialButton 
                href="/user-dashboard" 
                variant="outlined" 
                color="primary"
                fullWidth
                onClick={toggleDrawer(false)}
              >
                Dashboard
              </MaterialButton>
              <MaterialButton 
                onClick={() => {
                  toggleDrawer(false)(new Event('click') as unknown as React.MouseEvent);
                  signOut();
                }}
                variant="contained" 
                color="primary"
                fullWidth
              >
                Sign Out
              </MaterialButton>
            </>
          ) : (
            <>
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
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
