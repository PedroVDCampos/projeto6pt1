import React from 'react'
import { ListContainer, CardGrid } from './styles'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

const RestaurantList = () => {
  const restaurantes = [
    {
      name: 'Pizza do Chef',
      image: 'https://via.placeholder.com/300x200',
      description: 'A melhor pizza artesanal da cidade!',
      rating: 4.8
    },
    {
      name: 'Sushi Express',
      image: 'https://via.placeholder.com/300x200',
      description: 'Combos orientais prontos para entrega.',
      rating: 4.6
    },
    {
      name: 'Burguer House',
      image: 'https://via.placeholder.com/300x200',
      description: 'Hambúrgueres suculentos e artesanais.',
      rating: 4.7
    }
  ]

  return (
    <ListContainer>
      <div className="header">Restaurantes</div>
      <CardGrid>
        {restaurantes.map((rest, index) => (
          <RestaurantCard key={index} {...rest} />
        ))}
      </CardGrid>
    </ListContainer>
  )
}

export default RestaurantList
