'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Box, Grid, Typography, Divider, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box component="footer" sx={{ 
      bgcolor: 'background.paper', 
      borderTop: '1px solid', 
      borderColor: 'divider',
      py: 6,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Link href="/" style={{ display: 'inline-block' }}>
                <Image 
                  src="/images/doma_2_Balken_rot.png" 
                  alt="DOMA DESIGN Logo" 
                  width={120} 
                  height={40}
                  style={{ height: '40px', width: 'auto' }}
                />
              </Link>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300 }}>
              Modern kitchen and cabinet solutions designed for today's homes and businesses. Bringing your vision to life with precision and quality.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" color="primary" aria-label="facebook">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="instagram">
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="twitter">
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="linkedin">
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} gutterBottom>
              Products
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              <Link href="/products" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Kitchen Systems
                </Typography>
              </Link>
              <Link href="/products" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Cabinet Solutions
                </Typography>
              </Link>
              <Link href="/products" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Smart Storage
                </Typography>
              </Link>
              <Link href="/products" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Design Catalog
                </Typography>
              </Link>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} gutterBottom>
              Company
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              <Link href="/about" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  About Us
                </Typography>
              </Link>
              <Link href="/careers" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Careers
                </Typography>
              </Link>
              <Link href="/blog" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Blog
                </Typography>
              </Link>
              <Link href="/contact" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Contact
                </Typography>
              </Link>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} gutterBottom>
              Resources
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              <Link href="/support" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Support Center
                </Typography>
              </Link>
              <Link href="/docs" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Documentation
                </Typography>
              </Link>
              <Link href="/guides" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Design Guides
                </Typography>
              </Link>
              <Link href="/faq" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  FAQ
                </Typography>
              </Link>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              <Link href="/privacy" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Privacy Policy
                </Typography>
              </Link>
              <Link href="/terms" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Terms of Service
                </Typography>
              </Link>
              <Link href="/cookies" legacyBehavior>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}>
                  Cookie Policy
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} DOMA Design. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
