
import React from 'react'
import { getRecipeById } from '@/lib/api';

export default async function page({ params }) {
    const resolve_promise = await params;
    const id = resolve_promise.recipe_id;
    const recipe = await getRecipeById(id);
    console.log(recipe)
    return (
        <div>page</div>
    )
}
