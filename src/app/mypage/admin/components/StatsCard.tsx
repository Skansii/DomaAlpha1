'use client';

import React from 'react';
import { Paper, Box, Typography, useTheme, Tooltip } from '@mui/material';
import { 
  TrendingUp, 
  TrendingDown,
  People,
  ViewInAr,
  Inventory,
  SupportAgent,
  Info as InfoIcon
} from '@mui/icons-material';

interface StatProps {
  name: string;
  value: string;
  change: string;
  status: 'increase' | 'decrease';
}

const iconMap: Record<string, React.ElementType> = {
  'Total Users': People,
  'Active Projects': ViewInAr,
  'Product Listings': Inventory,
  'Support Tickets': SupportAgent,
};

export default function StatsCard({ stat }: { stat: StatProps }) {
  const theme = useTheme();
  const Icon = iconMap[stat.name] || TrendingUp;
  
  const bgGradient = stat.status === 'increase'
    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)'
    : 'linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(239, 68, 68, 0.08) 100%)';
    
  const iconColor = stat.status === 'increase'
    ? theme.palette.success.main
    : theme.palette.error.main;
    
  const textColor = stat.status === 'increase'
    ? theme.palette.success.main
    : theme.palette.error.main;

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transform: 'translateY(-4px)',
          borderColor: 'rgba(99, 102, 241, 0.1)',
        }
      }}
    >
      <Box sx={{ 
        p: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
          <Box 
            sx={{ 
              p: 1.5, 
              borderRadius: 2, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
            }}
          >
            <Icon sx={{ color: theme.palette.primary.main, fontSize: '1.75rem' }} />
          </Box>
          
          <Tooltip 
            title={`Last updated on ${new Date().toLocaleDateString()}`}
            arrow
            placement="top"
          >
            <InfoIcon sx={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: '1rem', cursor: 'pointer' }} />
          </Tooltip>
        </Box>
        
        <Box sx={{ mt: 2, mb: 'auto' }}>
          <Typography 
            variant="subtitle2" 
            color="text.secondary" 
            sx={{ 
              fontSize: '0.875rem', 
              mb: 0.5,
              fontWeight: 500
            }}
          >
            {stat.name}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              letterSpacing: '-0.01em',
              color: theme.palette.text.primary,
              mb: 2
            }}
          >
            {stat.value}
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            p: 1,
            borderRadius: 1,
            display: 'inline-flex',
            alignItems: 'center',
            background: bgGradient,
            mt: 'auto',
            alignSelf: 'flex-start'
          }}
        >
          {stat.status === 'increase' ? (
            <TrendingUp sx={{ fontSize: '0.875rem', color: iconColor, mr: 0.5 }} />
          ) : (
            <TrendingDown sx={{ fontSize: '0.875rem', color: iconColor, mr: 0.5 }} />
          )}
          <Typography 
            variant="caption" 
            sx={{ 
              fontWeight: 600,
              color: textColor,
              fontSize: '0.75rem'
            }}
          >
            {stat.change} from last month
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
} 