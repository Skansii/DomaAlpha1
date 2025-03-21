'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="container mx-auto p-8 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }
  
  // Show dashboard content only to authenticated users
  if (!isAuthenticated) {
    return null; // Don't render anything, will redirect in useEffect
  }
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.firstName}!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="text-gray-600 mb-4">
            <p>You don't have any active projects yet.</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors">
            Start New Project
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4 py-1">
              <p className="text-sm text-gray-500">Today</p>
              <p className="text-gray-700">Account created</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-800 transition-colors">
              Browse Designs
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-800 transition-colors">
              Schedule Consultation
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-800 transition-colors">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-36 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Design {item}</p>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-900">Design Example {item}</h3>
                <p className="text-sm text-gray-600">Based on your preferences</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 