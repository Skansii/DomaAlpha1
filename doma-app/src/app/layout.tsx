'use client';

import { Inter } from "next/font/google";
import { useState, useEffect } from 'react';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeRegistry from '@/components/ui/theme/ThemeRegistry';
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
  const [isUserDashboard, setIsUserDashboard] = useState(false);
  
  // Use useEffect to check pathname on client side only
  useEffect(() => {
    setIsUserDashboard(pathname?.startsWith('/user-dashboard') || false);
  }, [pathname]);

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
