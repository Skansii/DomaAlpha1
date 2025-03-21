'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaterialButton from '@/components/MaterialButton';
import {
  Box,
  Container,
  TextField,
  Typography,
  Alert,
  Divider,
  Paper,
  Stack,
  Grid,
  IconButton
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate signup API call
    setTimeout(() => {
      setIsLoading(false);
      setError('Signup functionality is not implemented yet.');
    }, 1500);
  };
  
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side - Image */}
      <Box 
        sx={{ 
          position: 'relative',
          display: { xs: 'none', md: 'block' },
          width: '50%',
          bgcolor: 'grey.900'
        }}
      >
        <Box
          component="img"
          src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg"
          alt="Modern kitchen interior"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.8,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.7) 0%, rgba(37,99,235,0.7) 100%)',
            mixBlendMode: 'multiply'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            p: 6,
            zIndex: 1
          }}
        >
          <Box 
            component="img"
            src="/images/doma_2_Balken_rot.png"
            alt="DOMA DESIGN Logo" 
            sx={{ 
              height: 80,
              width: 'auto',
              mb: 5
            }}
          />
          <Typography variant="h2" fontWeight={700} mb={3} textAlign="center">
            Join Our Design Community
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ maxWidth: 500 }}>
            Create an account to save your favorite designs, request quotes, and stay updated with our latest collections.
          </Typography>
        </Box>
      </Box>
      
      {/* Right Side - Form */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 3, sm: 6, md: 10 },
          py: 6,
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', mb: 4 }}>
            <Image 
              src="/images/doma_2_Balken_rot.png" 
              alt="DOMA DESIGN Logo" 
              width={160} 
              height={50}
              style={{ height: '50px', width: 'auto', margin: '0 auto 20px' }}
            />
          </Box>
          
          <Typography variant="h4" component="h1" fontWeight={700} textAlign="center" gutterBottom>
            Create your account
          </Typography>
          
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
            Already have an account?{' '}
            <Link 
              href="/login" 
              style={{ 
                color: 'var(--mui-palette-primary-main)',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              Sign in
            </Link>
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 4 }}
            />
            
            <MaterialButton
              type="submit"
              disabled={isLoading}
              loading={isLoading}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Create account
            </MaterialButton>
            
            <Divider sx={{ my: 4 }}>
              <Typography variant="body2" color="text.secondary">
                Or continue with
              </Typography>
            </Divider>
            
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <MaterialButton
                  variant="outlined"
                  color="inherit"
                  fullWidth
                  startIcon={<GoogleIcon />}
                  sx={{ 
                    color: 'text.secondary',
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: 'text.primary',
                      backgroundColor: 'rgba(0, 0, 0, 0.01)'
                    }
                  }}
                >
                  Google
                </MaterialButton>
              </Grid>
              <Grid item xs={6}>
                <MaterialButton
                  variant="outlined"
                  color="inherit"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  sx={{ 
                    color: 'text.secondary',
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: 'text.primary',
                      backgroundColor: 'rgba(0, 0, 0, 0.01)'
                    }
                  }}
                >
                  Facebook
                </MaterialButton>
              </Grid>
            </Grid>
            
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center" 
              sx={{ mt: 4 }}
            >
              By signing up, you agree to our{' '}
              <Link 
                href="/terms" 
                style={{ 
                  color: 'var(--mui-palette-primary-main)', 
                  textDecoration: 'none' 
                }}
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link 
                href="/privacy" 
                style={{ 
                  color: 'var(--mui-palette-primary-main)', 
                  textDecoration: 'none' 
                }}
              >
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 