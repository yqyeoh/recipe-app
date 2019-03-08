import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from './App'

const match = {params:{id:1}}
const history = createMemoryHistory({ initialEntries: ["/"] });
describe('App', ()=>{
  test('restaurants form details are saved when save button is clicked on Recipe Form', ()=>{
    const { getByText, getByLabelText } = render(<Router history={history}>
      <App/>
  </Router>)

    const AdminLink = getByText('Admin')
    fireEvent.click(AdminLink)

    const editButton = getByText('Edit')
    fireEvent.click(editButton)

    const inputTitle = getByLabelText('Title');
    fireEvent.change(inputTitle, { target: { value: "princess" } });

    const saveButton = getByText('Save')
    fireEvent.click(saveButton)

    expect(getByText('princess')).toBeInTheDocument()
  })
})