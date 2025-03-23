'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/solid';
import { createProject, getProjectById, updateProject } from '@/lib/api';

interface ProjectData {
  name: string;
  description: string;
  client: string;
  status: string;
  startDate: string;
  endDate: string;
  budget: string;
  imageUrl: string;
  tags: string[];
  teamMembers: string[];
}

interface ProjectFormProps {
  projectId?: string;
  isEdit?: boolean;
}

export default function ProjectForm({ projectId, isEdit = false }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [projectData, setProjectData] = useState<ProjectData>({
    name: '',
    description: '',
    client: '',
    status: 'planning',  // default value
    startDate: '',
    endDate: '',
    budget: '',
    imageUrl: '',
    tags: [],
    teamMembers: []
  });
  
  const [newTag, setNewTag] = useState('');
  const [newTeamMember, setNewTeamMember] = useState('');

  // Fetch project data if in edit mode
  useEffect(() => {
    if (isEdit && projectId) {
      setLoading(true);
      getProjectById(projectId)
        .then(data => {
          setProjectData({
            name: data.name || '',
            description: data.description || '',
            client: data.client || '',
            status: data.status || 'planning',
            startDate: data.startDate ? new Date(data.startDate).toISOString().split('T')[0] : '',
            endDate: data.endDate ? new Date(data.endDate).toISOString().split('T')[0] : '',
            budget: data.budget ? data.budget.toString() : '',
            imageUrl: data.imageUrl || '',
            tags: data.tags || [],
            teamMembers: data.teamMembers || []
          });
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch project data');
          setLoading(false);
          console.error(err);
        });
    }
  }, [isEdit, projectId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !projectData.tags.includes(newTag.trim())) {
      setProjectData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setProjectData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addTeamMember = () => {
    if (newTeamMember.trim() && !projectData.teamMembers.includes(newTeamMember.trim())) {
      setProjectData(prev => ({
        ...prev,
        teamMembers: [...prev.teamMembers, newTeamMember.trim()]
      }));
      setNewTeamMember('');
    }
  };

  const removeTeamMember = (memberToRemove: string) => {
    setProjectData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter(member => member !== memberToRemove)
    }));
  };

  const validateForm = () => {
    if (!projectData.name) {
      setError('Project name is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const submitData = {
        ...projectData,
        budget: projectData.budget ? parseFloat(projectData.budget) : 0
      };
      
      if (isEdit && projectId) {
        await updateProject(projectId, submitData);
        setSuccess('Project updated successfully');
        setTimeout(() => router.push('/admin/projects'), 1500);
      } else {
        await createProject(submitData);
        setSuccess('Project created successfully');
        setTimeout(() => router.push('/admin/projects'), 1500);
      }
    } catch (err) {
      setError('Failed to save project');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEdit) {
    return <div className="p-4 text-center">Loading project data...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-green-700">{success}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Basic Information Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Project Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={projectData.name}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                Client
              </label>
              <input
                type="text"
                name="client"
                id="client"
                value={projectData.client}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                id="status"
                value={projectData.status}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="planning">Planning</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="on_hold">On Hold</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                value={projectData.imageUrl}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        
        {/* Timeline and Budget Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Timeline & Budget</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={projectData.startDate}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={projectData.endDate}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget ($)
              </label>
              <input
                type="number"
                name="budget"
                id="budget"
                value={projectData.budget}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>
        
        {/* Description Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Description</h3>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={projectData.description}
              onChange={handleInputChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        {/* Tags Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
          <div className="space-y-4">
            <div className="flex">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-l-md"
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={addTag}
                className="inline-flex items-center p-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
              >
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projectData.tags.map((tag, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                  >
                    <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                  </button>
                </div>
              ))}
              {projectData.tags.length === 0 && (
                <p className="text-sm text-gray-500">No tags added</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Team Members Section */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Team Members</h3>
          <div className="space-y-4">
            <div className="flex">
              <input
                type="text"
                value={newTeamMember}
                onChange={(e) => setNewTeamMember(e.target.value)}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-l-md"
                placeholder="Add a team member"
              />
              <button
                type="button"
                onClick={addTeamMember}
                className="inline-flex items-center p-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
              >
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projectData.teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                >
                  {member}
                  <button
                    type="button"
                    onClick={() => removeTeamMember(member)}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-green-400 hover:bg-green-200 hover:text-green-500"
                  >
                    <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                  </button>
                </div>
              ))}
              {projectData.teamMembers.length === 0 && (
                <p className="text-sm text-gray-500">No team members added</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => router.push('/admin/projects')}
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? 'Saving...' : isEdit ? 'Update Project' : 'Create Project'}
        </button>
      </div>
    </form>
  );
} 