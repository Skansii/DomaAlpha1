'use client';

import { ReactNode } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, Container } from '@mui/material';
import LeftSidebar from '../../components/dashboard/LeftSidebar';
import RightSidebar from '../../components/dashboard/RightSidebar';

// Theme creation
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // DOMA red color
      light: '#e57373',
      dark: '#b71c1c',
    },
    secondary: {
      main: '#f5f5f7', // Light grey from dashboard background
      light: '#ffffff',
      dark: '#e0e0e0',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        minHeight: '100vh',
        bgcolor: '#f5f5f7'
      }}>
        {/* Left Sidebar Navigation */}
        <LeftSidebar />
        
        {/* Main Content */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            p: 3,
            ml: { xs: 0, sm: '240px' },
            width: { xs: '100%', sm: `calc(100% - 240px)` }
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 8 }}>
            {children}
          </Container>
        </Box>
        
        {/* Right Sidebar */}
        <RightSidebar />
      </Box>
    </ThemeProvider>
  );
} 