import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`

export const Image = styled.img`
  width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 24px;
`

export const Info = styled.div``

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  color: #666;
`

export const DishList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
`

export const DishCard = styled.div`
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const DishImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
`

export const DishName = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`

export const DishPrice = styled.span`
  font-weight: bold;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: #ff6b00;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e65a00;
  }
`
