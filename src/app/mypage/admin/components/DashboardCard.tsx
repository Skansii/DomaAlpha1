'use client';

import React from 'react';
import Link from 'next/link';
import { Paper, Box, Typography, Button, Skeleton, Chip, useTheme } from '@mui/material';
import { ArrowForward, FlashOn } from '@mui/icons-material';

interface DashboardCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  isNew?: boolean;
}

export default function DashboardCard({ 
  title, 
  description, 
  linkText, 
  linkHref,
  isNew = false
}: DashboardCardProps) {
  const theme = useTheme();
  
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transform: 'translateY(-4px)',
          borderColor: 'rgba(99, 102, 241, 0.1)',
          '& .arrow-icon': {
            transform: 'translateX(4px)',
          }
        }
      }}
    >
      {isNew && (
        <Chip
          label="New"
          size="small"
          icon={<FlashOn sx={{ fontSize: '0.875rem !important' }} />}
          sx={{ 
            position: 'absolute', 
            top: 12, 
            right: 12, 
            fontWeight: 600, 
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            color: theme.palette.primary.main,
            fontSize: '0.6875rem',
            height: 24,
            zIndex: 1
          }} 
        />
      )}

      <Box sx={{ p: { xs: 2, md: 3 }, flexGrow: 1 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            fontSize: { xs: '1rem', md: '1.125rem' },
            mb: 0.75,
            color: theme.palette.text.primary,
            pr: isNew ? 5 : 0,
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: theme.palette.text.secondary,
            mb: 3,
            lineHeight: 1.5,
            fontWeight: 400,
            fontSize: '0.875rem'
          }}
        >
          {description}
        </Typography>
        
        {/* Placeholder content with skeleton loading effect */}
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
            <Skeleton 
              variant="circular" 
              width={32} 
              height={32} 
              sx={{ 
                mr: 2,
                '&::after': {
                  backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.04))',
                }
              }} 
            />
            <Box sx={{ width: '100%' }}>
              <Skeleton variant="text" width="70%" height={20} />
              <Skeleton variant="text" width="40%" height={16} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
            <Skeleton 
              variant="circular" 
              width={32} 
              height={32} 
              sx={{ 
                mr: 2,
                '&::after': {
                  backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.04))',
                }
              }} 
            />
            <Box sx={{ width: '100%' }}>
              <Skeleton variant="text" width="60%" height={20} />
              <Skeleton variant="text" width="35%" height={16} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton 
              variant="circular" 
              width={32} 
              height={32} 
              sx={{ 
                mr: 2,
                '&::after': {
                  backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.04))',
                }
              }} 
            />
            <Box sx={{ width: '100%' }}>
              <Skeleton variant="text" width="50%" height={20} />
              <Skeleton variant="text" width="30%" height={16} />
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Box 
        sx={{ 
          p: { xs: 1.5, md: 2 },
          borderTop: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link href={linkHref} style={{ textDecoration: 'none' }}>
          <Button 
            endIcon={
              <ArrowForward 
                className="arrow-icon" 
                sx={{ transition: 'transform 0.3s ease' }} 
              />
            }  
            variant="text"
            color="primary"
            sx={{ 
              fontWeight: 600,
              textTransform: 'none',
              px: { xs: 1, md: 1.5 },
              py: { xs: 0.5, md: 0.75 },
              fontSize: { xs: '0.8125rem', md: '0.875rem' },
              '&:hover': {
                background: 'rgba(59, 130, 246, 0.04)'
              }
            }}
          >
            {linkText}
          </Button>
        </Link>
      </Box>
    </Paper>
  );
} 