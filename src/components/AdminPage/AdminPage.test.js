import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent, waitForElement, wait } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AdminPage from './AdminPage';
import * as recipeService from '../../services/recipeService';
import * as userService from '../../services/userService';
import { recipesTestData } from '../../tests/testdata';

beforeEach(() => {
  let sampleData = JSON.parse(JSON.stringify(recipesTestData));
  jest
    .spyOn(recipeService, 'getRecipes')
    .mockImplementation(async () => Promise.resolve(sampleData.sort((a, b) => a.title.localeCompare(b.title))));
  jest.spyOn(recipeService, 'deleteRecipe').mockImplementation(async id => {
    const found = sampleData.find(recipe => recipe._id === id);
    sampleData = sampleData.filter(recipe => recipe._id !== id);
    return Promise.resolve(found);
  });
  jest.spyOn(userService, 'getUser').mockImplementation(async () => Promise.resolve('admin@recipe.com'));
});

const history = createMemoryHistory({ initialEntries: ['/'] });

describe('Admin Page with valid token', () => {
  test('recipes are shown upon load', async () => {
    const { getAllByText } = render(
      <Router history={history}>
        <AdminPage />
      </Router>
    );
    await wait(() => expect(getAllByText('Delete').length).toEqual(2));
    expect(recipeService.getRecipes).toHaveBeenCalledTimes(1);
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
