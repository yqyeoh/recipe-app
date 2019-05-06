/* eslint-disable no-restricted-syntax */
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export async function getRecipes() {
  try {
    const recipes = await axios.get(`${apiUrl}/recipes`, { withCredentials: true });
    const mappedRecipes = recipes.data.map(recipe => {
      recipe.cuisine = recipe.cuisine.name;
      recipe.ingredients.map(item => {
        delete item._id;
        item.ingredientName = item.ingredient.name;
        return item;
      });
      return recipe;
    });
    return mappedRecipes.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteRecipe(id) {
  try {
    await axios.delete(`${apiUrl}/recipes/${id}`, { withCredentials: true });
  } catch (error) {
    console.error(error);
  }
}

export async function saveRecipe(recipe) {
  let savedRecipe;
  try {
    if (!recipe._id) {
      savedRecipe = await axios.post(`${apiUrl}/recipes`, recipe, { withCredentials: true });
    } else {
      savedRecipe = await axios.put(`${apiUrl}/recipes/${recipe._id}`, recipe, { withCredentials: true });
    }
    return savedRecipe.data;
  } catch (error) {
    console.error(error);
  }
}

export function filterRecipes(selectedIngredients, recipes, minimumMatchPercentage) {
  for (const recipe of recipes) {
    for (const selectedIngredientName of selectedIngredients) {
      for (const ingredient of recipe.ingredients) {
        if (ingredient.isMatched || ingredient.isOptional) {
          continue;
        }
        if (ingredient.ingredientName === selectedIngredientName) {
          ingredient.isMatched = true;
          break;
        }
      }
    }
    recipe.availableIngredients = recipe.ingredients
      .filter(ingredient => ingredient.isMatched)
      .map(ingredient => ingredient.ingredientName);
    recipe.optionalIngredients = recipe.ingredients
      .filter(ingredient => ingredient.isOptional)
      .map(ingredient => ingredient.ingredientName);
    recipe.missingIngredients = recipe.ingredients
      .filter(ingredient => !ingredient.isMatched && !ingredient.isOptional)
      .map(ingredient => ingredient.ingredientName);
    recipe.ingredientsMatchPercentage = Math.round(
      (recipe.availableIngredients.length / (recipe.ingredients.length - recipe.optionalIngredients.length)) * 100
    );
  }
  return recipes
    .filter(recipe => recipe.ingredientsMatchPercentage >= minimumMatchPercentage)
    .sort((a, b) => b.ingredientsMatchPercentage - a.ingredientsMatchPercentage);
}
