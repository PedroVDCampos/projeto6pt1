import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import RestaurantDetail from './Pages/RestaurantDetail/RestaurantDetail'
import Cart from './Pages/Cart/Cart'
import Header from './components/Header/Header'
import { CartProvider } from './CartContext'
import Checkout from './Pages/Checkout/Checkout'
import Success from './Pages/Success/Success'
import RestaurantDetails from './Pages/RestaurantDetail/RestaurantDetail'
import FloatingCart from './components/FloatingCart/FloatingCart'

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:name" element={<RestaurantDetail />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/finalizar" element={<Checkout />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="/restaurante/:id" element={<RestaurantDetails />} />
      </Routes>
      <FloatingCart />
    </CartProvider>
  )
}

export default App
