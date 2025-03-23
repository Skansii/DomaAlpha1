'use client';

import { useState, useEffect } from 'react';
import { createProduct, updateProduct, getProductById } from '@/lib/admin/api';
import { useRouter } from 'next/navigation';

interface ProductData {
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  sku?: string;
  category: string;
  imageUrl?: string;
  stockQuantity: number;
  status: string;
  features: string[];
  specifications: Record<string, string>;
}

interface ProductFormProps {
  productId?: string;
  isEdit?: boolean;
}

export default function ProductForm({ productId, isEdit = false }: ProductFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const [productData, setProductData] = useState<ProductData>({
    name: '',
    description: '',
    price: 0,
    salePrice: undefined,
    sku: '',
    category: 'Uncategorized',
    imageUrl: '',
    stockQuantity: 0,
    status: 'active',
    features: [],
    specifications: {}
  });

  // For managing features
  const [newFeature, setNewFeature] = useState('');
  
  // For managing specifications
  const [newSpecKey, setNewSpecKey] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');

  useEffect(() => {
    if (isEdit && productId) {
      fetchProduct(productId);
    }
  }, [isEdit, productId]);

  const fetchProduct = async (id: string) => {
    setIsLoading(true);
    try {
      const data = await getProductById(id);
      setProductData({
        name: data.name || '',
        description: data.description || '',
        price: data.price || 0,
        salePrice: data.salePrice,
        sku: data.sku || '',
        category: data.category || 'Uncategorized',
        imageUrl: data.imageUrl || '',
        stockQuantity: data.stockQuantity || 0,
        status: data.status || 'active',
        features: data.features || [],
        specifications: data.specifications || {}
      });
    } catch (err: any) {
      setError(err.message || 'Failed to fetch product');
      console.error('Error fetching product:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Handle numeric values
    if (name === 'price' || name === 'salePrice' || name === 'stockQuantity') {
      setProductData(prev => ({
        ...prev,
        [name]: value === '' ? (name === 'salePrice' ? undefined : 0) : Number(value)
      }));
    } else {
      setProductData(prev => ({ ...prev, [name]: value }));
    }
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setProductData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setProductData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const addSpecification = () => {
    if (newSpecKey.trim() && newSpecValue.trim()) {
      setProductData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [newSpecKey.trim()]: newSpecValue.trim()
        }
      }));
      setNewSpecKey('');
      setNewSpecValue('');
    }
  };

  const removeSpecification = (key: string) => {
    setProductData(prev => {
      const { [key]: _, ...rest } = prev.specifications;
      return {
        ...prev,
        specifications: rest
      };
    });
  };

  const validateForm = () => {
    if (!productData.name.trim()) return 'Product name is required';
    if (productData.price < 0) return 'Price cannot be negative';
    if (productData.stockQuantity < 0) return 'Stock quantity cannot be negative';
    if (productData.salePrice && productData.salePrice > productData.price) {
      return 'Sale price cannot be higher than regular price';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    try {
      if (isEdit && productId) {
        await updateProduct(productId, productData);
        setSuccessMessage('Product updated successfully');
      } else {
        await createProduct(productData);
        setSuccessMessage('Product created successfully');
        
        // Reset form after creation
        if (!isEdit) {
          setProductData({
            name: '',
            description: '',
            price: 0,
            salePrice: undefined,
            sku: '',
            category: 'Uncategorized',
            imageUrl: '',
            stockQuantity: 0,
            status: 'active',
            features: [],
            specifications: {}
          });
        }
      }
      
      setTimeout(() => {
        router.push('/admin/products');
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Failed to save product');
      console.error('Error saving product:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">{isEdit ? 'Edit Product' : 'Create New Product'}</h2>
      
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      {successMessage && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          {successMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-1">
                SKU
              </label>
              <input
                type="text"
                id="sku"
                name="sku"
                value={productData.sku}
                onChange={handleChange}
                placeholder="Auto-generated if left empty"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={productData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Uncategorized">Uncategorized</option>
                <option value="Cabinets">Cabinets</option>
                <option value="Countertops">Countertops</option>
                <option value="Appliances">Appliances</option>
                <option value="Fixtures">Fixtures</option>
                <option value="Flooring">Flooring</option>
                <option value="Lighting">Lighting</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={productData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="discontinued">Discontinued</option>
              </select>
            </div>
          </div>
          
          {/* Pricing & Inventory */}
          <div className="space-y-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price*
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="0.01"
                  value={productData.price}
                  onChange={handleChange}
                  className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700 mb-1">
                Sale Price (optional)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="salePrice"
                  name="salePrice"
                  min="0"
                  step="0.01"
                  value={productData.salePrice === undefined ? '' : productData.salePrice}
                  onChange={handleChange}
                  className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                id="stockQuantity"
                name="stockQuantity"
                min="0"
                value={productData.stockQuantity}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={productData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              placeholder="Enter a feature"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={addFeature}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          
          <ul className="space-y-2">
            {productData.features.map((feature, index) => (
              <li key={index} className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded">
                <span>{feature}</span>
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Specifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Specifications</label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              value={newSpecKey}
              onChange={(e) => setNewSpecKey(e.target.value)}
              placeholder="Key (e.g. Weight)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              value={newSpecValue}
              onChange={(e) => setNewSpecValue(e.target.value)}
              placeholder="Value (e.g. 5kg)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={addSpecification}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          
          <div className="space-y-2">
            {Object.entries(productData.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded">
                <div>
                  <span className="font-medium">{key}:</span> <span>{value}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeSpecification(key)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => router.push('/admin/products')}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : isEdit ? 'Update Product' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
} 