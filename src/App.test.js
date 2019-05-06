import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent, waitForElement, wait } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import * as recipeService from './services/recipeService';
import * as ingredientService from './services/ingredientService';
import * as cuisineService from './services/cuisineService';
import * as userService from './services/userService';
import { recipesTestData, ingredientsTestData, cuisinesTestData } from './tests/testdata';

beforeEach(() => {
  let sampleRecipeData = JSON.parse(JSON.stringify(recipesTestData));
  const sampleCuisineData = JSON.parse(JSON.stringify(cuisinesTestData));
  const sampleIngredientData = JSON.parse(JSON.stringify(ingredientsTestData));
  jest.spyOn(userService, 'getUser').mockImplementation(async () => Promise.resolve('admin@recipe.com'));
  jest
    .spyOn(recipeService, 'getRecipes')
    .mockImplementation(async () => Promise.resolve(sampleRecipeData.sort((a, b) => a.title.localeCompare(b.title))));
  jest
    .spyOn(ingredientService, 'getIngredients')
    .mockImplementation(async () => Promise.resolve(sampleIngredientData.sort((a, b) => a.name.localeCompare(b.name))));
  jest
    .spyOn(cuisineService, 'getCuisines')
    .mockImplementation(async () => Promise.resolve(sampleCuisineData.sort((a, b) => a.name.localeCompare(b.name))));
  jest.spyOn(recipeService, 'saveRecipe').mockImplementation(async recipe => {
    const existingRecipe = sampleRecipeData.find(item => item._id === recipe._id);
    let savedRecipe;
    if (existingRecipe) {
      const merged = { ...existingRecipe, ...recipe };
      sampleRecipeData = sampleRecipeData.filter(item => item._id !== recipe._id);
      sampleRecipeData.push(merged);
      savedRecipe = merged;
    } else {
      const newRecipe = {
        _id: Date.now().toString(),
        ...recipe,
      };
      sampleRecipeData.push(newRecipe);
      savedRecipe = newRecipe;
    }
    return Promise.resolve(savedRecipe);
  });
});

const history = createMemoryHistory({ initialEntries: ['/'] });

const delay = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

describe('App', () => {
  test('restaurants form details are saved when save button is clicked on Recipe Form', async () => {
    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    const AdminLink = getByText('Admin');
    fireEvent.click(AdminLink);

    const editButton = await waitForElement(() => getByText('Edit'));
    fireEvent.click(editButton);

    await delay(0);

    const inputTitle = await waitForElement(() => getByLabelText('Title'));
    fireEvent.change(inputTitle, { target: { value: 'abc' } });
    await wait(() => expect(getByLabelText('Title')).toHaveAttribute('value', 'abc'));

    const saveButton = getByText('Save');
    fireEvent.click(saveButton);
    await wait(() => expect(getByText('abc')).toBeInTheDocument());
  });

  test("Empty restaurant form is loaded when 'create new' is clicked on Admin Page", async () => {
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    const AdminLink = getByText('Admin');
    fireEvent.click(AdminLink);

    const newRecipeBtn = await waitForElement(() => getByText('Create New Recipe'));
    fireEvent.click(newRecipeBtn);
    await wait(() => expect(getByText('New Recipe')).toBeInTheDocument());
  });

  test('when cancel button is clicked after making changes, route to admin page and changes did not take effect', async () => {
    const { getByText, getByLabelText, queryByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    const AdminLink = getByText('Admin');
    fireEvent.click(AdminLink);

    const editButton = await waitForElement(() => getByText('Edit'));
    fireEvent.click(editButton);

    await delay(0);

    const inputTitle = await waitForElement(() => getByLabelText('Title'));
    fireEvent.change(inputTitle, { target: { value: 'abc' } });
    await wait(() => expect(getByLabelText('Title')).toHaveAttribute('value', 'abc'));

    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);
    await wait(() => expect(queryByText('abc')).not.toBeInTheDocument());
  });
});
