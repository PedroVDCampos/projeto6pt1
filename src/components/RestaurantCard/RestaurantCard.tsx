import React from 'react'
import { Card, Image, Title, Description, Rating } from './styles'

type Props = {
  name: string
  image: string
  description: string
  rating: number
}

const RestaurantCard = ({ name, image, description, rating }: Props) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Rating>{`⭐ ${rating.toFixed(1)}`}</Rating>
    </Card>
  )
}

export default RestaurantCard
