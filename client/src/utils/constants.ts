export const APP_NAME = 'Hygieia'

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'hygieia_access_token',
  REFRESH_TOKEN: 'hygieia_refresh_token',
  USER: 'hygieia_user',
} as const

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  PROFILE: '/profile',
  DOCTORS: '/doctors',
  DOCTOR_DETAILS: '/doctors/:id',
  APPOINTMENTS: '/appointments',
  PHARMACY: '/pharmacy',
  PRODUCT_DETAILS: '/pharmacy/:id',
  LAB_TESTS: '/lab-tests',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDERS: '/orders',
  ABOUT: '/about',
  CONTACT: '/contact',
  VIDEO_CALL: '/video-call/:roomId',
} as const

export const QUERY_KEYS = {
  USER: 'user',
  DOCTORS: 'doctors',
  DOCTOR: 'doctor',
  APPOINTMENTS: 'appointments',
  PRODUCTS: 'products',
  PRODUCT: 'product',
  LAB_TESTS: 'labTests',
  CART: 'cart',
  ORDERS: 'orders',
} as const

export const SPECIALIZATIONS = [
  'General Physician',
  'Cardiologist',
  'Dermatologist',
  'Pediatrician',
  'Orthopedic',
  'Neurologist',
  'Psychiatrist',
  'Gynecologist',
  'ENT Specialist',
  'Ophthalmologist',
  'Dentist',
  'Urologist',
] as const