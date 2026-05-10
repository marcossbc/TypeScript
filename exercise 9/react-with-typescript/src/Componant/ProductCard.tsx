import React from 'react'

type Products ={
  name: string,
  price: number,
  description?: string
}

const ProductCard = ({ name, price, description }: Products) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        {description && <p>Description: {description}</p>}
    </div>
  )
}

export default ProductCard
