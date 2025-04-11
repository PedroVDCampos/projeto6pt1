import React from 'react'
import { Container, Message } from './styles'

const Success = () => {
  return (
    <Container>
      <Message>Pedido realizado com sucesso!</Message>
      <p>Em breve você receberá seu pedido.</p>
    </Container>
  )
}

export default Success
