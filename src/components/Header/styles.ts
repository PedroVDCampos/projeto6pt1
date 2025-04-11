import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e91e63;
  padding: 16px 24px;
  color: white;
  border-radius: 0 0 12px 12px;
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export const NavLinks = styled.nav`
  a {
    color: white;
    margin-left: 24px;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`
