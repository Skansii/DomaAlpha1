import { redirect } from 'next/navigation';

/**
 * Admin Index Page
 * Redirects to the dashboard for better URL structure
 */
export default function AdminPage() {
  redirect('/admin/dashboard');
  return null;
} 