import { useEffect, useState } from "react"
import Card from "./Card"


export default function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json()
    setProducts(data.products)
  }

  useEffect(
    () => {
      fetchProducts()
    },
    []
  )




  return (
    <div className="container p-2">
      <div className="row">
        {
          products.map((prod, index) => {
            return (
              <Card key={index} image={prod.thumbnail} title={prod.title} />
            )
          })
        }
        <Card />
      </div>
    </div>
  )
}
