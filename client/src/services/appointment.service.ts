import api from './api'
import { Appointment, ApiResponse, BookAppointmentFormData } from '@/types'

export const appointmentService = {
  book: async (data: BookAppointmentFormData): Promise<ApiResponse<Appointment>> => {
    const response = await api.post<ApiResponse<Appointment>>('/appointments', data)
    return response.data
  },

  getMyAppointments: async (status?: string): Promise<ApiResponse<Appointment[]>> => {
    const response = await api.get<ApiResponse<Appointment[]>>('/appointments/my', {
      params: { status },
    })
    return response.data
  },

  getById: async (id: string): Promise<ApiResponse<Appointment>> => {
    const response = await api.get<ApiResponse<Appointment>>(`/appointments/${id}`)
    return response.data
  },

  cancel: async (id: string, reason?: string): Promise<ApiResponse<Appointment>> => {
    const response = await api.patch<ApiResponse<Appointment>>(`/appointments/${id}/cancel`, { reason })
    return response.data
  },

  reschedule: async (id: string, dateTime: string): Promise<ApiResponse<Appointment>> => {
    const response = await api.patch<ApiResponse<Appointment>>(`/appointments/${id}/reschedule`, { dateTime })
    return response.data
  },

  getUpcoming: async (): Promise<ApiResponse<Appointment[]>> => {
    const response = await api.get<ApiResponse<Appointment[]>>('/appointments/upcoming')
    return response.data
  },
}