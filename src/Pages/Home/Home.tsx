import React from 'react'
import Banner from '../../components/Banner/Banner'
import { Container, RestaurantList, Title } from './styles'
import { Card } from '../../components/RestaurantCard/styles'

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Title>Restaurantes</Title>
        <RestaurantList>
          <Card>Itália</Card>
          <Card>Japonês</Card>
          <Card>Fast Food</Card>
          <Card>Brasileiro</Card>
        </RestaurantList>
      </Container>
    </>
  )
}

export default Home
