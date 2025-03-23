// Project API functions
export async function createProject(projectData: any) {
  const response = await fetch('/api/admin/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create project');
  }

  return response.json();
}

export async function getProjects(page = 1, limit = 10, search = '', sort = 'createdAt', order = 'desc') {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort,
    order,
  });

  if (search) {
    queryParams.append('search', search);
  }

  const response = await fetch(`/api/admin/projects?${queryParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch projects');
  }

  return response.json();
}

export async function getProjectById(id: string) {
  const response = await fetch(`/api/admin/projects/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch project');
  }

  return response.json();
}

export async function updateProject(id: string, projectData: any) {
  const response = await fetch(`/api/admin/projects/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update project');
  }

  return response.json();
}

export async function deleteProject(id: string) {
  const response = await fetch(`/api/admin/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to delete project');
  }

  return response.json();
} 