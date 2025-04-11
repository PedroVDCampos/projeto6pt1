import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 16px 24px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const CartText = styled.div`
  font-weight: bold;
`

export const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`
