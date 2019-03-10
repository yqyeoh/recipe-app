import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent, waitForElement, wait} from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from './App'

const history = createMemoryHistory({ initialEntries: ["/"] });

const delay = (ms) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

describe('App', ()=>{
  test('restaurants form details are saved when save button is clicked on Recipe Form', async ()=>{
    const { getByText, getByLabelText } = render(<Router history={history}>
                                                    <App/>
                                                </Router>)

    const AdminLink = getByText('Admin')
    fireEvent.click(AdminLink)

    const editButton = await waitForElement(()=>getByText('Edit'))
    fireEvent.click(editButton)    

    await delay(0)
    const inputTitle = await waitForElement(()=>getByLabelText('Title'))
    
    fireEvent.change(inputTitle, { target: { value: "abc" } })
    await wait(()=>expect(getByLabelText('Title')).toHaveAttribute('value', 'abc'))

    const saveButton = getByText('Save')
    fireEvent.click(saveButton)               

    await wait(()=>expect(getByText('abc')).toBeInTheDocument())
  })
})