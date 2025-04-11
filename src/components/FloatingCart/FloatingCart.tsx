import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../CartContext'
import { CartContainer, CartText, CheckoutButton } from './styles'

const FloatingCart = () => {
  const { items } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) return null

  const total = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <CartContainer>
      <CartText>
        {items.length} item(s) no carrinho - R$ {total.toFixed(2)}
      </CartText>
      <CheckoutButton onClick={() => navigate('/checkout')}>
        Ver Carrinho
      </CheckoutButton>
    </CartContainer>
  )
}

export default FloatingCart
