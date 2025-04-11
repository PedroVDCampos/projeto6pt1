import React from 'react'
import { useCart } from '../../CartContext'
import { Button } from './styles'

interface Props {
  name: string
  price: number
}

const AddToCartButton: React.FC<Props> = ({ name, price }) => {
  const { addToCart } = useCart()

  return (
    <Button onClick={() => addToCart({ name, price })}>
      Adicionar ao carrinho
    </Button>
  )
}

export default AddToCartButton
