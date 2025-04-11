import React from 'react'
import { FooterContainer, FooterText, Logo } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/logo.png" alt="Efood logo" />
      <FooterText>Desenvolvido por Pedro Campos.</FooterText>
    </FooterContainer>
  )
}

export default Footer
