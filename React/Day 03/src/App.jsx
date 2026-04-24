import React, { useState } from 'react'
import Card from './Card'

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "T-Shirt",
      price: 499,
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
      id: 2,
      title: "Shoes",
      price: 1999,
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    {
      id: 3,
      title: "Watch",
      price: 999,
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    {
      id: 4,
      title: "Watch 2",
      price: 199,
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
     {
      id: 4,
      title: "Watch 2",
      price: 199,
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    }
  ])



  return (
    <div className='container-xl'>
      <div className="row">
        {
          products.map((data) => {
            return (
              < Card key={data.id} title={data.title} thumbnail={data.image} price={data.price} />
            )
          })

        }

      </div>
    </div>
  )
}
