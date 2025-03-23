import { Metadata } from 'next';
import HomeClient from './home';

export const metadata: Metadata = {
  title: 'DOMA Design',
  description: 'Welcome to DOMA Design',
};

/**
 * Main Home Page (Server Component)
 * Uses a client component for interactive parts
 */
export default function Home() {
  return <HomeClient />;
}
