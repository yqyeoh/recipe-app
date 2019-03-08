import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent} from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import RecipeForm from "./RecipeForm";


const match = {params:{id:1}}

describe("Recipe Form", ()=>{
    test('on load button is disabled', ()=>{
        const history = createMemoryHistory({ initialEntries: ["/"] });
        const {getByText} = render(<Router history={history}>
    <RecipeForm match={match}/>
    </Router>)
        expect(getByText('Save')).toHaveAttribute('disabled')
    })

    test('display all form fields on load', ()=>{

    })
})