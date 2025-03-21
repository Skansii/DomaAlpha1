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
  Checkbox, 
  FormControlLabel, 
  Divider,
  Paper,
  Stack
} from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setLoading(true);
    
    // Simulate login attempt
    try {
      // This is where you would normally authenticate with your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setError('Login functionality not implemented yet');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left side - Image */}
      <Box 
        sx={{ 
          display: { xs: 'none', md: 'flex' },
          width: '50%', 
          position: 'relative',
          bgcolor: 'grey.900'
        }}
      >
        <Box
          component="img"
          src="https://images.pexels.com/photos/6489118/pexels-photo-6489118.jpeg"
          alt="Modern kitchen interior"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            p: 6
          }}
        >
          <Typography variant="h2" component="h2" fontWeight={700} mb={3}>
            Welcome to Doma Design
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ maxWidth: 500 }}>
            Transform your space with premium kitchen and cabinet solutions
          </Typography>
        </Box>
      </Box>
      
      {/* Right side - Login form */}
      <Box 
        sx={{ 
          width: { xs: '100%', md: '50%' }, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          p: 4,
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="sm">
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 3, sm: 6 },
              borderRadius: 3
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Link href="/" style={{ display: 'inline-block' }}>
                <Image 
                  src="/images/doma_2_Balken_rot.png" 
                  alt="DOMA DESIGN Logo" 
                  width={180} 
                  height={60}
                  style={{ height: '60px', width: 'auto', marginBottom: '16px' }}
                />
              </Link>
              <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
                Sign in to your account
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Or{' '}
                <Link 
                  href="/signup" 
                  style={{ 
                    color: 'var(--mui-palette-primary-main)',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  create a new account
                </Link>
              </Typography>
            </Box>
            
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 3 }}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 3 }}
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                
                <Link 
                  href="#" 
                  style={{ 
                    color: 'var(--mui-palette-primary-main)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
              
              <MaterialButton
                type="submit"
                disabled={loading}
                loading={loading}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </MaterialButton>
            </Box>
            
            <Divider sx={{ my: 4 }}>
              <Typography variant="body2" color="text.secondary">
                OR
              </Typography>
            </Divider>
            
            <Stack spacing={2} direction="column">
              <MaterialButton
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={
                  <svg viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: 8 }}>
                    <path
                      fill="currentColor"
                      d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                    />
                  </svg>
                }
              >
                Sign in with Google
              </MaterialButton>
            </Stack>
            
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center" 
              sx={{ mt: 4 }}
            >
              Not a member?{' '}
              <Link 
                href="/signup" 
                style={{ 
                  color: 'var(--mui-palette-primary-main)', 
                  textDecoration: 'none',
                  fontWeight: 500 
                }}
              >
                Sign up now
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
} 