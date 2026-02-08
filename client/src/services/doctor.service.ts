import api from './api'
import { Doctor, ApiResponse, PaginatedResponse } from '@/types'

export interface DoctorFilters {
  specialization?: string
  search?: string
  minRating?: number
  maxFee?: number
  available?: boolean
  page?: number
  limit?: number
}

export const doctorService = {
  getAll: async (filters?: DoctorFilters): Promise<PaginatedResponse<Doctor>> => {
    const response = await api.get<PaginatedResponse<Doctor>>('/doctors', { params: filters })
    return response.data
  },

  getById: async (id: string): Promise<ApiResponse<Doctor>> => {
    const response = await api.get<ApiResponse<Doctor>>(`/doctors/${id}`)
    return response.data
  },

  getAvailableSlots: async (doctorId: string, date: string): Promise<ApiResponse<string[]>> => {
    const response = await api.get<ApiResponse<string[]>>(`/doctors/${doctorId}/slots`, {
      params: { date },
    })
    return response.data
  },

  getTopRated: async (limit = 6): Promise<ApiResponse<Doctor[]>> => {
    const response = await api.get<ApiResponse<Doctor[]>>('/doctors/top-rated', {
      params: { limit },
    })
    return response.data
  },

  getBySpecialization: async (specialization: string): Promise<ApiResponse<Doctor[]>> => {
    const response = await api.get<ApiResponse<Doctor[]>>(`/doctors/specialization/${specialization}`)
    return response.data
  },
}