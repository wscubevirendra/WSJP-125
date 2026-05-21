async function getRecipes() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        return data.recipes

    } catch (error) {
        throw new Error(error)
    }
}


async function getRecipeById(id) {
    try {
        const response = await fetch(`https://dummyjson.com/recipe/id/${id}`);
        const data = await response.json();
        return data

    } catch (error) {
        throw new Error(error)
    }
}
export { getRecipes, getRecipeById }