import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export async function getIngredients() {
  try {
    const ingredients = await axios.get(`${apiUrl}/ingredients`, { withCredentials: true });
    return ingredients.data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } catch (error) {
    console.error(error);
  }
}

export async function saveIngredients(newIngredients) {
  try {
    if (newIngredients.length === 0) return;
    for (const newIngredient of newIngredients) {
      await axios.post(`${apiUrl}/ingredients`, newIngredient, { withCredentials: true });
    }
  } catch (error) {
    console.error(error);
  }
}

export function ingredientsAddLabelValueProperty(ingredients) {
  return ingredients.map(ingredient => {
    ingredient.label = ingredient.name;
    ingredient.value = ingredient.name;
    return ingredient;
  });
}
