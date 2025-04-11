import styled from 'styled-components'

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`

export const Card = styled.div`
  background-color: #fafafa;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-bottom: 12px;
`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Title = styled.h3`
  margin: 12px 0 4px;
  font-size: 18px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 12px;
`

export const Rating = styled.div`
  margin-top: 8px;
  font-weight: bold;
  color: #f5a623;
`
