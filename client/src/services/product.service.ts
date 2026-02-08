import api from './api'
import { Product, ApiResponse, PaginatedResponse, ProductCategory } from '@/types'

export interface ProductFilters {
  category?: ProductCategory
  search?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  requiresPrescription?: boolean
  page?: number
  limit?: number
  sort?: 'price-asc' | 'price-desc' | 'rating' | 'newest'
}

export const productService = {
  getAll: async (filters?: ProductFilters): Promise<PaginatedResponse<Product>> => {
    const response = await api.get<PaginatedResponse<Product>>('/products', { params: filters })
    return response.data
  },

  getById: async (id: string): Promise<ApiResponse<Product>> => {
    const response = await api.get<ApiResponse<Product>>(`/products/${id}`)
    return response.data
  },

  getCategories: async (): Promise<ApiResponse<{ category: ProductCategory; count: number }[]>> => {
    const response = await api.get<ApiResponse<{ category: ProductCategory; count: number }[]>>('/products/categories')
    return response.data
  },

  getFeatured: async (limit = 8): Promise<ApiResponse<Product[]>> => {
    const response = await api.get<ApiResponse<Product[]>>('/products/featured', {
      params: { limit },
    })
    return response.data
  },

  search: async (query: string): Promise<ApiResponse<Product[]>> => {
    const response = await api.get<ApiResponse<Product[]>>('/products/search', {
      params: { q: query },
    })
    return response.data
  },
}