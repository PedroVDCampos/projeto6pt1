import React from 'react'
import { useCart } from '../../CartContext'
import { Container, Title, CartItem, ProductName, Price } from './styles'

interface CartItem {
  name: string
  price: number
}

const Cart = () => {
  const { items }: { items: CartItem[] } = useCart()

  return (
    <Container>
      <Title>Seu Carrinho</Title>
      {items.map((item, index) => (
        <CartItem key={index}>
          <ProductName>{item.name}</ProductName>
          <Price>R$ {item.price.toFixed(2)}</Price>
        </CartItem>
      ))}
    </Container>
  )
}

export default Cart
