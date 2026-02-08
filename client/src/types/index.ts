// ============================================
// USER TYPES
// ============================================
export interface User {
  _id: string
  name: string
  email: string
  phone: string
  role: UserRole
  avatar?: string
  address?: Address
  createdAt: string
  updatedAt: string
}

export type UserRole = 'user' | 'doctor' | 'pharma' | 'lab'

export interface Doctor extends User {
  role: 'doctor'
  doctorInfo: DoctorInfo
}

export interface DoctorInfo {
  specialization: string
  experience: number
  qualification: string
  consultationFee: number
  rating: number
  reviewCount: number
  availability: DoctorAvailability[]
  about: string
  languages: string[]
  isAvailable: boolean
  hospital?: string
}

export interface DoctorAvailability {
  day: string
  slots: TimeSlot[]
}

export interface TimeSlot {
  start: string
  end: string
  isBooked: boolean
}

// ============================================
// APPOINTMENT TYPES
// ============================================
export interface Appointment {
  _id: string
  patientId: string
  doctorId: string
  doctor?: Doctor
  patient?: User
  dateTime: string
  endTime?: string
  status: AppointmentStatus
  type: AppointmentType
  reason: string
  symptoms?: string[]
  notes?: string
  prescription?: string
  meetingLink?: string
  createdAt: string
  updatedAt: string
}

export type AppointmentStatus = 'scheduled' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled'
export type AppointmentType = 'video' | 'audio' | 'chat' | 'in-person'

// ============================================
// PRODUCT TYPES (PHARMACY)
// ============================================
export interface Product {
  _id: string
  name: string
  description: string
  shortDescription?: string
  price: number
  discountPrice?: number
  discountPercentage?: number
  category: ProductCategory
  subCategory?: string
  images: string[]
  thumbnail: string
  inStock: boolean
  stockQuantity: number
  manufacturer: string
  requiresPrescription: boolean
  dosage?: string
  sideEffects?: string[]
  usage?: string
  ingredients?: string[]
  ratings: {
    average: number
    count: number
  }
  createdAt: string
  updatedAt: string
}

export type ProductCategory =
  | 'medicines'
  | 'vitamins'
  | 'personal-care'
  | 'healthcare-devices'
  | 'baby-care'
  | 'skin-care'
  | 'supplements'

// ============================================
// LAB TEST TYPES
// ============================================
export interface LabTest {
  _id: string
  name: string
  description: string
  price: number
  discountPrice?: number
  category: string
  sampleType: string
  preparationInstructions: string[]
  reportTime: string
  includedTests: string[]
  popular: boolean
  homeCollection: boolean
}

export interface LabBooking {
  _id: string
  userId: string
  tests: LabTest[]
  scheduledDate: string
  scheduledTime: string
  collectionType: 'home' | 'center'
  address?: Address
  status: 'scheduled' | 'sample-collected' | 'processing' | 'completed'
  totalAmount: number
  reportUrl?: string
  createdAt: string
}

// ============================================
// CART & ORDER TYPES
// ============================================
export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  subtotal: number
  discount: number
  deliveryFee: number
  total: number
}

export interface Order {
  _id: string
  userId: string
  orderNumber: string
  items: CartItem[]
  subtotal: number
  discount: number
  deliveryFee: number
  totalAmount: number
  status: OrderStatus
  shippingAddress: Address
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  trackingNumber?: string
  estimatedDelivery?: string
  createdAt: string
  updatedAt: string
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'
export type PaymentMethod = 'card' | 'upi' | 'netbanking' | 'cod'

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  landmark?: string
}

// ============================================
// API TYPES
// ============================================
export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

export interface ApiError {
  success: false
  message: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
  success: boolean
  message: string
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasMore: boolean
  }
}

export interface AuthResponse {
  success: boolean
  message: string
  data: {
    user: User
    accessToken: string
    refreshToken: string
  }
}

// ============================================
// FORM TYPES
// ============================================
export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export interface BookAppointmentFormData {
  doctorId: string
  date: string
  time: string
  type: AppointmentType
  reason: string
  symptoms?: string[]
}