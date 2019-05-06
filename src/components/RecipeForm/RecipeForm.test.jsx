import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent, waitForElement, wait } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import RecipeForm from './RecipeForm';
import * as userService from '../../services/userService';
import * as recipeService from '../../services/recipeService';
import * as cuisineService from '../../services/cuisineService';
import * as ingredientService from '../../services/ingredientService';
import { recipesTestData, ingredientsTestData, cuisinesTestData } from '../../tests/testdata';

const history = createMemoryHistory({ initialEntries: ['/'] });

describe('Recipe Form', () => {
  beforeEach(() => {
    const recipeData = JSON.parse(JSON.stringify(recipesTestData));
    const cuisineData = JSON.parse(JSON.stringify(cuisinesTestData));
    const ingredientData = JSON.parse(JSON.stringify(ingredientsTestData));
    jest
      .spyOn(recipeService, 'getRecipes')
      .mockImplementation(async () => Promise.resolve(recipeData.sort((a, b) => a.title.localeCompare(b.title))));
    jest
      .spyOn(cuisineService, 'getCuisines')
      .mockImplementation(async () => Promise.resolve(cuisineData.sort((a, b) => a.name.localeCompare(b.name))));
    jest
      .spyOn(ingredientService, 'getIngredients')
      .mockImplementation(async () => Promise.resolve(ingredientData.sort((a, b) => a.name.localeCompare(b.name))));

    jest.spyOn(userService, 'getUser').mockImplementation(async () => Promise.resolve('admin@recipe.com'));
  });

  test('on load button is disabled', async () => {
    const { getByText } = render(
      <Router history={history}>
        <RecipeForm />
      </Router>
    );
    const saveButton = await waitForElement(() => getByText('Save'));
    expect(saveButton).toHaveAttribute('disabled');
  });

  test('display all form fields on load', async () => {
    const { getByLabelText, getByText, getByTestId, getAllByTestId } = render(
      <Router history={history}>
        <RecipeForm />
      </Router>
    );
    await waitForElement(() => getByLabelText('Title'));
    expect(getByLabelText('Title')).toHaveAttribute('type', 'text');
    expect(getByLabelText('Servings')).toHaveAttribute('type', 'text');
    expect(getByLabelText('Time Required (mins)')).toHaveAttribute('type', 'text');
    expect(getByLabelText('Instructions')).toBeInTheDocument();
    expect(getByLabelText('Cuisine')).toBeInTheDocument();
    expect(getByLabelText('Image URL')).toHaveAttribute('type', 'text');
    expect(getByText('Ingredient Name')).toBeInTheDocument();
    expect(getByText('Extra Description')).toBeInTheDocument();
    expect(getByText('Quantity')).toBeInTheDocument();
    expect(getByText('Unit')).toBeInTheDocument();
    expect(getByText('Optional')).toBeInTheDocument();
    expect(getAllByTestId('ingredients-row').length).toEqual(1);
    expect(getByTestId('extra-description-0')).toHaveAttribute('type', 'text');
    expect(getByTestId('qty-0')).toHaveAttribute('type', 'text');
    expect(getByTestId('unit-0')).toHaveAttribute('type', 'text');
    expect(getByTestId('is-optional-0')).toHaveAttribute('type', 'checkbox');
    expect(getByTestId('delete-0')).toHaveAttribute('type', 'button');
    // data-testid={ingredientNameId} can't be found
  });

  test('error message appears if text input is invalid', async () => {
    const { getByText, queryByText, getByLabelText } = render(
      <Router history={history}>
        <RecipeForm />
      </Router>
    );

    // enter invalid input into text field
    const message = /is not allowed to be empty/i;
    const input = await waitForElement(() => getByLabelText('Title'));
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.change(input, { target: { value: '' } });
    expect(getByText(message)).toBeInTheDocument();

    // enter valid input into text field
    fireEvent.change(input, { target: { value: 'Chicken Burger' } });
    expect(queryByText(message)).not.toBeInTheDocument();
  });

  test('when add new ingredient button is clicked, new row of ingredient inputs is added', async () => {
    const { getByText, getByTestId, getAllByTestId } = render(
      <Router history={history}>
        <RecipeForm />
      </Router>
    );
    const addNewIngredientBtn = await waitForElement(() => getByText('Add New Ingredient'));
    fireEvent.click(addNewIngredientBtn);
    expect(getAllByTestId('ingredients-row').length).toEqual(2);
    expect(getByTestId('extra-description-1')).toHaveAttribute('type', 'text');
    expect(getByTestId('qty-1')).toHaveAttribute('type', 'text');
    expect(getByTestId('unit-1')).toHaveAttribute('type', 'text');
    expect(getByTestId('is-optional-1')).toHaveAttribute('type', 'checkbox');
    expect(getByTestId('delete-1')).toHaveAttribute('type', 'button');
  });

  test('when delete button is clicked, the ingredient row is removed', async () => {
    const { getByTestId, getAllByTestId, queryAllByTestId, getByLabelText } = render(
      <Router history={history}>
        <RecipeForm />
      </Router>
    );
    await waitForElement(() => getByLabelText('Title'));
    expect(getAllByTestId('ingredients-row').length).toEqual(1);
    const firstIngredientDeleteBtn = getByTestId('delete-0');
    fireEvent.click(firstIngredientDeleteBtn);
    expect(queryAllByTestId('ingredients-row').length).toEqual(0);
  });
});
