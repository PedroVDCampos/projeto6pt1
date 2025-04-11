import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../CartContext'
import {
  Container,
  Header,
  Image,
  Info,
  Title,
  Description,
  DishList,
  DishCard,
  DishImage,
  DishName,
  DishPrice,
  Button
} from './styles'

const mockDishes = [
  {
    name: 'Pizza Margherita',
    price: 25.9,
    image: 'https://via.placeholder.com/300'
  },
  {
    name: 'Hambúrguer Artesanal',
    price: 29.5,
    image: 'https://via.placeholder.com/300'
  },
  {
    name: 'Macarrão Alfredo',
    price: 22.3,
    image: 'https://via.placeholder.com/300'
  },
  {
    name: 'Salada Caesar',
    price: 18.9,
    image: 'https://via.placeholder.com/300'
  }
]

const RestaurantDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  return (
    <Container>
      <Header>
        <Image src="https://via.placeholder.com/400x200" alt="Restaurante" />
        <Info>
          <Title>Nome do Restaurante {id}</Title>
          <Description>
            Descrição breve sobre o restaurante, especialidades, tempo de
            entrega, etc.
          </Description>
        </Info>
      </Header>

      <DishList>
        {mockDishes.map((dish, index) => (
          <DishCard key={index}>
            <DishImage src={dish.image} alt={dish.name} />
            <DishName>{dish.name}</DishName>
            <DishPrice>R$ {dish.price.toFixed(2)}</DishPrice>
            <Button onClick={() => addToCart(dish)}>
              Adicionar ao carrinho
            </Button>
          </DishCard>
        ))}
      </DishList>
    </Container>
  )
}

export default RestaurantDetails
