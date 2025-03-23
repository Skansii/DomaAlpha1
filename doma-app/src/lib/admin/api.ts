'use client';

// Types
export type PaginationParams = {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
};

// API fetch with automatic error handling and authorization
async function fetchAPI<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });

  // Handle non-200 responses
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `API error: ${response.status}`);
  }

  return response.json();
}

// API utility functions for Admin Dashboard

interface PaginationResult {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
}

// User API functions
export async function getUsers(params: PaginationParams = {}) {
  const searchParams = new URLSearchParams();
  
  if (params.page) searchParams.append('page', params.page.toString());
  if (params.limit) searchParams.append('limit', params.limit.toString());
  if (params.sort) searchParams.append('sort', params.sort);
  if (params.order) searchParams.append('order', params.order);
  if (params.search) searchParams.append('search', params.search);
  
  const response = await fetch(`/api/admin/users?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch users');
  }
  
  return await response.json();
}

export async function getUserById(userId: string) {
  const response = await fetch(`/api/admin/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch user');
  }
  
  return await response.json();
}

export async function createUser(userData: any) {
  const response = await fetch('/api/admin/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create user');
  }
  
  return await response.json();
}

export async function updateUser(userId: string, userData: any) {
  const response = await fetch(`/api/admin/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update user');
  }
  
  return await response.json();
}

export async function deleteUser(userId: string) {
  const response = await fetch(`/api/admin/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to delete user');
  }
  
  return await response.json();
}

// Product API functions
export async function getProducts(params: PaginationParams = {}) {
  const searchParams = new URLSearchParams();
  
  if (params.page) searchParams.append('page', params.page.toString());
  if (params.limit) searchParams.append('limit', params.limit.toString());
  if (params.sort) searchParams.append('sort', params.sort);
  if (params.order) searchParams.append('order', params.order);
  if (params.search) searchParams.append('search', params.search);
  
  const response = await fetch(`/api/admin/products?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch products');
  }
  
  return await response.json();
}

export async function getProductById(productId: string) {
  const response = await fetch(`/api/admin/products/${productId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch product');
  }
  
  return await response.json();
}

export async function createProduct(productData: any) {
  const response = await fetch('/api/admin/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create product');
  }
  
  return await response.json();
}

export async function updateProduct(productId: string, productData: any) {
  const response = await fetch(`/api/admin/products/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update product');
  }
  
  return await response.json();
}

export async function deleteProduct(productId: string) {
  const response = await fetch(`/api/admin/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to delete product');
  }
  
  return await response.json();
}

// Projects API
export async function getProjects(params: PaginationParams = {}) {
  const queryParams = new URLSearchParams();
  
  if (params.page) queryParams.set('page', params.page.toString());
  if (params.limit) queryParams.set('limit', params.limit.toString());
  if (params.sort) queryParams.set('sort', params.sort);
  if (params.order) queryParams.set('order', params.order);
  if (params.search) queryParams.set('search', params.search);
  
  return fetchAPI<{projects: any[], pagination: any}>(`/api/admin/projects?${queryParams.toString()}`);
}

export async function getProjectById(id: string) {
  return fetchAPI<any>(`/api/admin/projects/${id}`);
}

export async function createProject(projectData: any) {
  return fetchAPI<any>('/api/admin/projects', {
    method: 'POST',
    body: JSON.stringify(projectData),
  });
}

export async function updateProject(id: string, projectData: any) {
  return fetchAPI<any>(`/api/admin/projects/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(projectData),
  });
}

export async function deleteProject(id: string) {
  return fetchAPI<{success: boolean}>(`/api/admin/projects/${id}`, {
    method: 'DELETE',
  });
}

// Content API
export async function getContent(params: PaginationParams = {}) {
  const queryParams = new URLSearchParams();
  
  if (params.page) queryParams.set('page', params.page.toString());
  if (params.limit) queryParams.set('limit', params.limit.toString());
  if (params.sort) queryParams.set('sort', params.sort);
  if (params.order) queryParams.set('order', params.order);
  if (params.search) queryParams.set('search', params.search);
  
  return fetchAPI<{contents: any[], pagination: any}>(`/api/admin/content?${queryParams.toString()}`);
}

export async function getContentById(id: string) {
  return fetchAPI<any>(`/api/admin/content/${id}`);
}

export async function createContent(contentData: any) {
  return fetchAPI<any>('/api/admin/content', {
    method: 'POST',
    body: JSON.stringify(contentData),
  });
}

export async function updateContent(id: string, contentData: any) {
  return fetchAPI<any>(`/api/admin/content/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(contentData),
  });
}

export async function deleteContent(id: string) {
  return fetchAPI<{success: boolean}>(`/api/admin/content/${id}`, {
    method: 'DELETE',
  });
}

// Analytics API
export async function getDashboardStats() {
  const response = await fetch('/api/admin/analytics?type=summary', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch dashboard stats');
  }
  
  return await response.json();
}

export async function getUserActivity(startDate?: Date, endDate?: Date) {
  const queryParams = new URLSearchParams();
  queryParams.set('type', 'userActivity');
  
  if (startDate) queryParams.set('startDate', startDate.toISOString());
  if (endDate) queryParams.set('endDate', endDate.toISOString());
  
  return fetchAPI<{userActivity: any[]}>(`/api/admin/analytics?${queryParams.toString()}`);
}

export async function getSystemMetrics(startDate?: Date, endDate?: Date) {
  const queryParams = new URLSearchParams();
  queryParams.set('type', 'systemMetrics');
  
  if (startDate) queryParams.set('startDate', startDate.toISOString());
  if (endDate) queryParams.set('endDate', endDate.toISOString());
  
  return fetchAPI<{systemMetrics: any[]}>(`/api/admin/analytics?${queryParams.toString()}`);
}

export async function logUserActivity(activityData: any) {
  return fetchAPI<any>('/api/admin/analytics', {
    method: 'POST',
    body: JSON.stringify({
      type: 'userActivity',
      data: activityData
    }),
  });
}

export async function logSystemMetric(metricData: any) {
  return fetchAPI<any>('/api/admin/analytics', {
    method: 'POST',
    body: JSON.stringify({
      type: 'systemMetric',
      data: metricData
    }),
  });
} 