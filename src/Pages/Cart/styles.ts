import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
`

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
`

export const CartItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ProductName = styled.p`
  font-size: 16px;
  font-weight: 500;
`

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #e91e63;
`
