'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Session, User } from '@supabase/supabase-js';
import { getSession, signIn, signUp, signOut, getUser, supabase } from '@/lib/supabase';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean, error?: string }>;
  signUp: (email: string, password: string) => Promise<{ success: boolean, error?: string }>;
  signOut: () => Promise<{ success: boolean, error?: string }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadUserData() {
      setIsLoading(true);
      try {
        // Check active session
        const { session: activeSession, error: sessionError } = await getSession();
        
        if (sessionError) {
          console.error('Error fetching session:', sessionError);
          setIsLoading(false);
          return;
        }
        
        setSession(activeSession);
        
        if (activeSession) {
          // Session exists, get user data
          const { user: userData, error: userError } = await getUser();
          
          if (userError) {
            console.error('Error fetching user:', userError);
          } else {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Unexpected error during auth initialization:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUserData();

    // Set up listener for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    try {
      const { data, error } = await signIn(email, password);
      if (error) {
        return { success: false, error: error.message };
      }
      setUser(data.user);
      setSession(data.session);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    try {
      const { data, error } = await signUp(email, password);
      if (error) {
        return { success: false, error: error.message };
      }
      // If email confirmation is enabled, we won't get a session right away
      if (data.session) {
        setUser(data.user);
        setSession(data.session);
      }
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        return { success: false, error: error.message };
      }
      setUser(null);
      setSession(null);
      router.push('/');
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 