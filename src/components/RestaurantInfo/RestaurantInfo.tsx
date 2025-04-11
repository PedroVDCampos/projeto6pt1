import React from 'react'
import { InfoContainer } from './styles'

const RestaurantInfo = () => {
  return (
    <InfoContainer>
      <div className="header">Destaques</div>
      <div className="info-boxes">
        <div className="info-box">Restaurantes disponíveis</div>
        <div className="info-box">Melhores avaliados</div>
        <div className="info-box">Entrega rápida</div>
        <div className="info-box">Frete grátis</div>
      </div>
    </InfoContainer>
  )
}

export default RestaurantInfo
