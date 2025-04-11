import React from 'react'
import { HeaderContainer, Logo, NavLinks } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>efood</Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/carrinho">Carrinho</a>
      </NavLinks>
    </HeaderContainer>
  )
}

export default Header
