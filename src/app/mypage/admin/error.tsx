'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  Container,
  useTheme 
} from '@mui/material';
import { 
  Error as ErrorIcon, 
  Refresh as RefreshIcon 
} from '@mui/icons-material';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          p: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
              bgcolor: 'rgba(239, 68, 68, 0.1)',
            }}
          >
            <ErrorIcon
              color="error"
              sx={{ fontSize: 40 }}
            />
          </Box>

          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              color: theme.palette.text.primary 
            }}
          >
            Something went wrong
          </Typography>
          
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 500 }}
          >
            An error occurred while loading the dashboard. Please try refreshing the page or contact support if the issue persists.
          </Typography>

          {process.env.NODE_ENV === 'development' && (
            <Box 
              sx={{ 
                mb: 4, 
                width: '100%', 
                textAlign: 'left',
                p: 2,
                borderRadius: 1,
                bgcolor: 'rgba(0, 0, 0, 0.04)',
                overflow: 'auto',
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1, color: 'error.main' }}>
                Error details:
              </Typography>
              <Typography 
                variant="body2" 
                component="pre" 
                sx={{ 
                  fontFamily: 'monospace', 
                  fontSize: '0.75rem', 
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  color: 'error.main',
                  opacity: 0.8,
                }}
              >
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={reset}
              startIcon={<RefreshIcon />}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 1.5,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              Try again
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="/mypage/admin"
              sx={{
                px: 3,
                py: 1,
                borderRadius: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                borderColor: 'rgba(0, 0, 0, 0.12)',
              }}
            >
              Return to Dashboard
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
} 