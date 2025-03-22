'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeRegistry from '../components/ThemeRegistry';
import { usePathname } from 'next/navigation';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isUserDashboard = pathname?.startsWith('/user-dashboard');

  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased h-full`}>
        <ThemeRegistry>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              {!isUserDashboard && <Footer />}
            </div>
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
