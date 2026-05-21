import React from 'react'
import Hero from '@/components/Hero'
import { getRecipes } from '@/lib/api'
import RecipeCard from '@/components/RecipeCard';
import FAQ from '@/components/Faq';

export default async function page() {
  const recipes = await getRecipes();
  const topRecipes = recipes.slice(0, 4);
  const trendingRecipes = recipes.slice(4, 8);
  console.log(recipes)

  return (
    <>
      <Hero />
      <div className=' max-w-7xl p-4 bg-white mx-auto '>
        <h2 className='font-bold text-black text-4xl my-4'>Top Recipes</h2>
        <div className='grid grid-cols-4 gap-4'>
          {
            topRecipes.map((data) => (
              <RecipeCard key={data.id} recipe={data} />
            ))
          }

        </div>

      </div>
      <div className=' max-w-7xl p-4 bg-white mx-auto '>
        <h2 className='font-bold text-black text-4xl my-4'>Trending Recipes</h2>
        <div className='grid grid-cols-4 gap-4'>
          {
            trendingRecipes.map((data) => (
              <RecipeCard key={data.id} recipe={data} />
            ))
          }

        </div>

      </div>
      <FAQ />
    </>
  )
}
