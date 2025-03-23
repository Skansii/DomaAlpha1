'use client';

import { useState, useEffect } from 'react';
import { ChevronUpIcon, ChevronDownIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, item: any) => React.ReactNode;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  pagination: Pagination;
  isLoading?: boolean;
  onSort?: (key: string, order: 'asc' | 'desc') => void;
  onPageChange?: (page: number) => void;
  onSearch?: (search: string) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

export default function DataTable({
  columns,
  data,
  pagination,
  isLoading = false,
  onSort,
  onPageChange,
  onSearch,
  onEdit,
  onDelete
}: DataTableProps) {
  const [sortKey, setSortKey] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (key: string) => {
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newOrder);
    if (onSort) {
      onSort(key, newOrder);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Create an array of page numbers to show in pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, pagination.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(pagination.totalPages, startPage + maxPagesToShow - 1);
    
    // Adjust start page if end page is maxed out
    if (endPage === pagination.totalPages) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <div className="overflow-hidden">
      {/* Search bar */}
      {onSearch && (
        <div className="mb-4 flex">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 p-2 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      )}

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-3">
                  {column.sortable && onSort ? (
                    <button
                      className="flex items-center"
                      onClick={() => handleSort(column.key)}
                    >
                      {column.label}
                      {sortKey === column.key ? (
                        sortOrder === 'asc' ? (
                          <ChevronUpIcon className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDownIcon className="ml-1 h-4 w-4" />
                        )
                      ) : (
                        <div className="ml-1 h-4 w-4" />
                      )}
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-6 py-3 text-right">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className="px-6 py-4 text-center">
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <span className="ml-2">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className="px-6 py-4 text-center">
                  No data found
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item._id || index} className="bg-white border-b hover:bg-gray-50">
                  {columns.map((column) => (
                    <td key={`${item._id || index}-${column.key}`} className="px-6 py-4">
                      {column.render
                        ? column.render(item[column.key], item)
                        : item[column.key]?.toString() || '-'}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td className="px-6 py-4 text-right space-x-2">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="font-medium text-blue-600 hover:text-blue-900 inline-flex items-center"
                        >
                          <PencilIcon className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="font-medium text-red-600 hover:text-red-900 inline-flex items-center"
                        >
                          <TrashIcon className="h-4 w-4 mr-1" />
                          Delete
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && onPageChange && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-700">
            Showing {Math.min((pagination.currentPage - 1) * pagination.pageSize + 1, pagination.totalItems)} to {Math.min(pagination.currentPage * pagination.pageSize, pagination.totalItems)} of {pagination.totalItems} entries
          </div>
          <div className="inline-flex items-center">
            <button
              onClick={() => onPageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className={`px-3 py-1 rounded-l-md border ${
                pagination.currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              Prev
            </button>
            
            {getPageNumbers().map(page => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 border-t border-b ${
                  pagination.currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => onPageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages}
              className={`px-3 py-1 rounded-r-md border ${
                pagination.currentPage === pagination.totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}