import React from 'react'

export default async function page() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  const recipes = data.recipes;



  return (
    <ol className='p-10'>
      {
        recipes.map((data, index) => {
          return (
            <li>{data.name}</li>
          )
        })
      }
    </ol>
  )
}
