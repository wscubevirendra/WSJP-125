import { getRecipes } from '@/lib/api'
import RecipeCard from '@/components/RecipeCard';

export default async function page() {
    const recipes = await getRecipes();
    return (
        <div className=' max-w-7xl p-4 bg-white mx-auto '>
       
            <div className='grid grid-cols-4 gap-4'>
                {
                    recipes.map((data) => (
                        <RecipeCard key={data.id} recipe={data} />
                    ))
                }

            </div>

        </div>
    )
}
