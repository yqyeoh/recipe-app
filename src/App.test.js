import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent, waitForElement, wait } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import * as recipeService from './services/recipeService';

beforeEach(() => {
  let sampleData = [
    {
      _id: '1',
      title: 'Chicken Pie',
      cuisine: 'Western',
      imageUrl:
        'https://kingsfoodmarkets.com/uploads/recipes-multi-size/KF_138_March2017_Site_Updates_Recipe_Image_Resize.jpg',
      servings: 4,
      ingredients: [
        { ingredientName: 'chicken breast', extraDescription: 'trimmed', qty: '2', unit: 'bunch', isOptional: false },
        { ingredientName: 'olive oil', extraDescription: '', qty: '1', unit: 'tbsp', isOptional: false },
      ],
      timeRequired: '45',
      instructions: ' test instruction 1',
    },
    {
      _id: '2',
      title: 'Ramen',
      cuisine: 'Western',
      imageUrl:
        'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/11/04/fettuccine-olive-oil-ck-x.jpg?itok=bt5Cny7R',
      servings: 4,
      ingredients: [
        { ingredientName: 'Ramen noodle', extraDescription: 'dry', qty: '12', unit: 'oz', isOptional: true },
        { ingredientName: 'red bell pepper', extraDescription: 'julienned', qty: '2', unit: '', isOptional: false },
      ],
      timeRequired: '15',
      instructions: 'test instruction 2',
    },
  ];

  jest
    .spyOn(recipeService, 'getRecipes')
    .mockImplementation(async () => Promise.resolve(sampleData.sort((a, b) => a.title.localeCompare(b.title))));
  jest.spyOn(recipeService, 'saveRecipe').mockImplementation(async recipe => {
    const existingRecipe = sampleData.find(item => item._id === recipe._id);
    let savedRecipe;
    if (existingRecipe) {
      const merged = { ...existingRecipe, ...recipe };
      sampleData = sampleData.filter(item => item._id !== recipe._id);
      sampleData.push(merged);
      savedRecipe = merged;
    } else {
      const newRecipe = {
        _id: Date.now().toString(),
        ...recipe,
      };
      sampleData.push(newRecipe);
      savedRecipe = newRecipe;
    }
    return Promise.resolve(savedRecipe);
  });
});

afterEach(() => {
  recipeService.getRecipes.mockRestore();
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
