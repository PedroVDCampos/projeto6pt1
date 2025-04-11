import React from 'react'
import { useCart } from '../../CartContext'
import { useNavigate } from 'react-router-dom'
import { Container, Title, Item, Total, Button } from './styles'

const Checkout = () => {
  const { items, clearCart } = useCart()
  const navigate = useNavigate()

  const total = items.reduce((acc, item) => acc + item.price, 0)

  const handleFinish = () => {
    clearCart()
    navigate('/sucesso')
  }

  return (
    <Container>
      <Title>Finalizar Pedido</Title>
      {items.map((item, index) => (
        <Item key={index}>
          <span>{item.name}</span>
          <span>R$ {item.price.toFixed(2)}</span>
        </Item>
      ))}
      <Total>Total: R$ {total.toFixed(2)}</Total>
      <Button onClick={handleFinish}>Finalizar Compra</Button>
    </Container>
  )
}

export default Checkout
