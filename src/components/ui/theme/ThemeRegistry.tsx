'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState, useEffect } from 'react';

/**
 * Creates and returns the Material UI theme configuration
 * Centralizes all theme settings in one place for easier maintenance
 */
const createAppTheme = (mode: 'light' | 'dark' = 'light') => {
  // Common palette values
  const primaryMain = '#3B82F6';
  const secondaryMain = '#6366F1';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: primaryMain, // Bright blue - modern SaaS primary color
        light: '#93C5FD',
        dark: '#1D4ED8',
        contrastText: '#ffffff',
      },
      secondary: {
        main: secondaryMain, // Indigo - trendy secondary color
        light: '#A5B4FC',
        dark: '#4338CA',
        contrastText: '#ffffff',
      },
      error: {
        main: '#EF4444',
      },
      warning: {
        main: '#F59E0B',
      },
      info: {
        main: '#3B82F6',
      },
      success: {
        main: '#10B981',
      },
      background: {
        default: mode === 'light' ? '#F9FAFB' : '#111827',
        paper: mode === 'light' ? '#FFFFFF' : '#1F2937',
      },
      text: {
        primary: mode === 'light' ? '#111827' : '#F9FAFB',
        secondary: mode === 'light' ? '#4B5563' : '#D1D5DB',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: '3.5rem',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.75rem',
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: 1.2,
      },
      h4: {
        fontWeight: 700,
        fontSize: '1.75rem',
        lineHeight: 1.3,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light' 
              ? '0 1px 3px rgba(0,0,0,0.05)' 
              : '0 1px 3px rgba(0,0,0,0.2)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light'
              ? '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)'
              : '0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1)',
            borderRadius: 12,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 12,
          },
        },
      },
    },
  });
};

/**
 * ThemeRegistry component
 * Provides Material UI theming to the application and handles theme switching
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped with theme provider
 */
export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // State for managing the current theme mode
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  
  // Create the theme based on current mode
  const theme = createAppTheme(mode);
  
  // Effect to check for user's preferred color scheme
  useEffect(() => {
    // Check if user has a theme preference stored
    const storedTheme = localStorage.getItem('theme-preference');
    
    if (storedTheme) {
      // Use the stored preference if available
      setMode(storedTheme as 'light' | 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Otherwise, check system preference
      setMode('dark');
    }
    
    // Listen for changes in system color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme-preference')) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
} 