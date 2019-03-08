import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import RecipeForm from "./RecipeForm";


// const match = {params:{id:1}}
const history = createMemoryHistory({ initialEntries: ["/"] });

describe("Recipe Form", () => {
    test('on load button is disabled', () => {

        const { getByText } = render(<Router history={history}>
            <RecipeForm />
        </Router>)
        expect(getByText('Save')).toHaveAttribute('disabled')
    })

    test('display all form fields on load', () => {
        const { getByLabelText, getByText, getByTestId,getAllByTestId } = render(<Router history={history}>
            <RecipeForm />
        </Router>);
        expect(getByLabelText("Title")).toHaveAttribute("type", "text");
        expect(getByLabelText("Servings")).toHaveAttribute("type", "text");
        expect(getByLabelText("Time Required (mins)")).toHaveAttribute("type", "text");
        expect(getByLabelText("Instructions")).toBeInTheDocument();
        expect(getByLabelText("Cuisine")).toBeInTheDocument();
        expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
        expect(getByText('Ingredient Name')).toBeInTheDocument();
        expect(getByText('Extra Description')).toBeInTheDocument();
        expect(getByText('Quantity')).toBeInTheDocument();
        expect(getByText('Unit')).toBeInTheDocument();
        expect(getByText('Optional')).toBeInTheDocument();
        expect(getAllByTestId("ingredients-row").length).toEqual(1)
        expect(getByTestId('extra-description-0')).toHaveAttribute("type", "text")
        expect(getByTestId('qty-0')).toHaveAttribute("type", "text")
        expect(getByTestId('unit-0')).toHaveAttribute("type", "text")
        expect(getByTestId('is-optional-0')).toHaveAttribute("type", "checkbox")
        expect(getByTestId('delete-0')).toHaveAttribute("type", "button")
        //data-testid={ingredientNameId} can't be found
    })

    test("error message appears if text input is invalid", () => {
        const { getByText, queryByText, getByLabelText,} = render(<Router history={history}>
            <RecipeForm />
        </Router>);

        //enter invalid input into text field
        const message = /is not allowed to be empty/i;
        const input = getByLabelText('Title');
        fireEvent.change(input, { target: { value: "a" } });
        fireEvent.change(input, { target: { value: "" } });
        expect(getByText(message)).toBeInTheDocument();

        // enter valid input into text field
        fireEvent.change(input, { target: { value: "Chicken Burger" } });
        expect(queryByText(message)).not.toBeInTheDocument();
    })

    test("when add new ingredient button is clicked, new row of ingredient inputs is added", ()=>{
        const { getByText, getByTestId, getAllByTestId} = render(<Router history={history}>
            <RecipeForm />
        </Router>);

        const addNewIngredientBtn = getByText("Add New Ingredient");
        fireEvent.click(addNewIngredientBtn)
        expect(getAllByTestId("ingredients-row").length).toEqual(2)
        expect(getByTestId('extra-description-1')).toHaveAttribute("type", "text")
        expect(getByTestId('qty-1')).toHaveAttribute("type", "text")
        expect(getByTestId('unit-1')).toHaveAttribute("type", "text")
        expect(getByTestId('is-optional-1')).toHaveAttribute("type", "checkbox")
        expect(getByTestId('delete-1')).toHaveAttribute("type", "button")
    })

    test("when delete button is clicked, the ingredient row is removed", ()=>{
        const {getByTestId, getAllByTestId, queryAllByTestId} = render(<Router history={history}>
            <RecipeForm />
        </Router>);

        expect(getAllByTestId("ingredients-row").length).toEqual(1)
        const firstIngredientDeleteBtn = getByTestId("delete-0");
        fireEvent.click(firstIngredientDeleteBtn)
        expect(queryAllByTestId("ingredients-row").length).toEqual(0)

    })


})