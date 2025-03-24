'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
  className?: string;
}

/**
 * Reusable Button component with various styles and options
 * 
 * @example
 * <Button 
 *   variant="primary" 
 *   size="md" 
 *   leftIcon={<PlusIcon className="h-5 w-5" />}
 *   onClick={handleClick}
 * >
 *   Create New
 * </Button>
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  leftIcon,
  rightIcon,
  fullWidth = false,
  isLoading = false,
  loadingText,
  isDisabled = false,
  className = '',
  ...props
}: ButtonProps) {
  // Define variant styles
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500',
    info: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    light: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-300',
    dark: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-700',
    link: 'bg-transparent text-indigo-600 hover:text-indigo-700 hover:underline focus:ring-indigo-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300 focus:ring-gray-300',
  };

  // Define size styles
  const sizeStyles = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base',
  };

  // Combine all styles
  const buttonClasses = `
    inline-flex items-center justify-center 
    font-medium rounded-md 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors duration-200
    ${variantStyles[variant]} 
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${isDisabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''}
    ${variant === 'link' ? 'shadow-none' : 'shadow-sm'}
    ${className}
  `;

  // Loading spinner
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  // Content to render inside button
  const content = (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {isLoading && loadingText ? loadingText : children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  // Return Link if href is provided, otherwise return button
  if (href) {
    return (
      <Link href={href} className={buttonClasses} aria-disabled={isDisabled || isLoading}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
} 