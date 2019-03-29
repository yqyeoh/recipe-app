import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent, waitForElement, wait } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AdminPage from './AdminPage';
import * as recipeService from '../../services/recipeService';

beforeEach(() => {
  let sampleData = [
    {
      _id: '1',
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
    {
      _id: '2',
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
  ];

  jest
    .spyOn(recipeService, 'getRecipes')
    .mockImplementation(async () => Promise.resolve(sampleData.sort((a, b) => a.title.localeCompare(b.title))));
  jest.spyOn(recipeService, 'deleteRecipe').mockImplementation(async id => {
    const found = sampleData.find(recipe => recipe._id === id);
    sampleData = sampleData.filter(recipe => recipe._id !== id);
    return Promise.resolve(found);
  });
});

const history = createMemoryHistory({ initialEntries: ['/'] });

describe('Admin Page', () => {
  test('recipes are shown upon load', async () => {
    const { getAllByText } = render(
      <Router history={history}>
        <AdminPage />
      </Router>
    );
    expect(recipeService.getRecipes).toHaveBeenCalledTimes(1);
    await wait(() => expect(getAllByText('Delete').length).toEqual(2));
  });

  test('when delete button is clicked, recipe will be removed', async () => {
    const { getByText, queryByText } = render(
      <Router history={history}>
        <AdminPage />
      </Router>
    );
    const firstDeleteBtn = await waitForElement(() => getByText('Delete'));
    fireEvent.click(firstDeleteBtn);
    await wait(() => expect(queryByText(/chicken pie/i)).not.toBeInTheDocument());
  });

  test('when keyword entered in input field, recipes will be filtered by title', async () => {
    const { queryByText, getByPlaceholderText } = render(
      <Router history={history}>
        <AdminPage />
      </Router>
    );
    const inputTitle = await waitForElement(() => getByPlaceholderText(/search by/i));
    fireEvent.change(inputTitle, { target: { value: 'chicken' } });
    await wait(() => expect(queryByText('Chicken Pie')).toBeInTheDocument());
    await wait(() => expect(queryByText(/ramen/i)).not.toBeInTheDocument());
  });
});
