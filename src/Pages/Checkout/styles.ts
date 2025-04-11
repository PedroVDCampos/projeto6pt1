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

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`

export const Total = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
`

export const Button = styled.button`
  margin-top: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`
