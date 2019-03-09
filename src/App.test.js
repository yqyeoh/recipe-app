import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent, waitForElement} from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from './App'

const history = createMemoryHistory({ initialEntries: ["/"] });
describe('App', ()=>{
  test('restaurants form details are saved when save button is clicked on Recipe Form', async ()=>{
    const { getByText, getAllByText, getByLabelText, debug } = render(<Router history={history}>
      <App/>
  </Router>)

    const AdminLink = getByText('Admin')
    fireEvent.click(AdminLink)

    const editButton = await waitForElement(()=>getByText('Edit'))
    fireEvent.click(editButton)

    debug()

    // const inputTitle = await waitForElement(()=>getByLabelText('Title'))
    
    // fireEvent.change(inputTitle, { target: { value: "abc" } })

    // expect(getByLabelText('Title')).toHaveAttribute('value', 'abc')

    // const saveButton = await waitForElement(()=>getByText('Save'))
    // fireEvent.click(saveButton)

    // expect(getByText('Edit')).toBeInTheDocument()
  })
})