import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Product, CartItem } from '@/types'
import toast from 'react-hot-toast'

interface CartState {
  items: CartItem[]
  isOpen: boolean

  // Computed
  totalItems: number
  subtotal: number
  deliveryFee: number
  discount: number
  total: number

  // Actions
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
}

const DELIVERY_FEE = 5.99
const FREE_DELIVERY_THRESHOLD = 50

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      get totalItems() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },

      get subtotal() {
        return get().items.reduce((sum, item) => {
          const price = item.product.discountPrice || item.product.price
          return sum + price * item.quantity
        }, 0)
      },

      get deliveryFee() {
        const subtotal = get().subtotal
        return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE
      },

      get discount() {
        return get().items.reduce((sum, item) => {
          if (item.product.discountPrice) {
            const savings = (item.product.price - item.product.discountPrice) * item.quantity
            return sum + savings
          }
          return sum
        }, 0)
      },

      get total() {
        return get().subtotal + get().deliveryFee
      },

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.product._id === product._id)

          if (existingItem) {
            toast.success(`Updated ${product.name} quantity`)
            return {
              items: state.items.map((item) =>
                item.product._id === product._id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }

          toast.success(`Added ${product.name} to cart`)
          return {
            items: [...state.items, { product, quantity }],
          }
        })
      },

      removeItem: (productId: string) => {
        set((state) => {
          const item = state.items.find((i) => i.product._id === productId)
          if (item) {
            toast.success(`Removed ${item.product.name} from cart`)
          }
          return {
            items: state.items.filter((item) => item.product._id !== productId),
          }
        })
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product._id === productId ? { ...item, quantity } : item
          ),
        }))
      },

      clearCart: () => {
        set({ items: [] })
        toast.success('Cart cleared')
      },

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: 'hygieia-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
)