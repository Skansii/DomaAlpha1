'use client';

import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Link from 'next/link';

// Custom styled Material UI button
const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '0.5rem',
  padding: '0.625rem 1.25rem',
  textTransform: 'none',
  fontWeight: 500,
  letterSpacing: '0.01em',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-1px)',
  },
  '&.MuiButton-contained': {
    backgroundImage: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)',
  },
  '&.MuiButton-containedSecondary': {
    backgroundImage: 'linear-gradient(90deg, #6366F1 0%, #4F46E5 100%)',
  },
  '&.MuiButton-outlined': {
    borderWidth: '1px',
    '&:hover': {
      borderWidth: '1px',
    },
  },
  '&.MuiButton-outlinedPrimary': {
    color: '#3B82F6',
    borderColor: '#3B82F6',
  },
  '&.MuiButton-sizeLarge': {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
  },
  '&.MuiButton-sizeSmall': {
    padding: '0.375rem 0.875rem',
    fontSize: '0.875rem',
  },
}));

// Custom styled Loading Button
const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  borderRadius: '0.5rem',
  padding: '0.625rem 1.25rem',
  textTransform: 'none',
  fontWeight: 500,
  letterSpacing: '0.01em',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-1px)',
  },
  '&.MuiLoadingButton-loading': {
    opacity: 0.7,
  },
  '&.MuiButton-contained': {
    backgroundImage: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)',
  },
  '&.MuiButton-containedSecondary': {
    backgroundImage: 'linear-gradient(90deg, #6366F1 0%, #4F46E5 100%)',
  },
  '&.MuiButton-sizeLarge': {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
  },
  '&.MuiButton-sizeSmall': {
    padding: '0.375rem 0.875rem',
    fontSize: '0.875rem',
  },
}));

export type ButtonProps = {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
};

const MaterialButton: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  href,
  disabled = false,
  fullWidth = false,
  loading = false,
  onClick,
  type = 'button',
  children,
  startIcon,
  endIcon,
  className = '',
}) => {
  // Common button props
  const buttonProps = {
    variant,
    color,
    size,
    disabled: disabled || loading,
    fullWidth,
    onClick,
    type,
    startIcon,
    endIcon,
    className,
  };

  // If href is provided, render a Link button
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton component="a" {...buttonProps}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  // If loading is true, render a loading button
  if (loading) {
    return (
      <StyledLoadingButton
        loading={loading}
        {...buttonProps}
      >
        {children}
      </StyledLoadingButton>
    );
  }

  // Default case, render a regular button
  return (
    <StyledButton {...buttonProps}>
      {children}
    </StyledButton>
  );
};

export default MaterialButton; 