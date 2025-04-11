import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Item {
  name: string
  price: number
}

interface CartContextType {
  items: Item[]
  addToCart: (item: Item) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([])

  const addToCart = (item: Item) => {
    setItems((prev) => [...prev, item])
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
