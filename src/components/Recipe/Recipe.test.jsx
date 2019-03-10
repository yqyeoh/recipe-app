import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Recipe from "./Recipe";

const history = createMemoryHistory({ initialEntries: ["/"] });

const sampleRecipe = {
    id: "3",
    title: "Mojito Shrimp",
    cuisine: "Western",
    imageUrl: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2018/6/28/0/RogerMooking_Mojito-Lime-Shrimp_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1530200127431.jpeg",
    servings: 4,
    ingredients: [
        { ingredientName: "shrimp", extraDescription: "peeled, deveined shrimp, tails on", qty: "1.5", unit: "lb", isOptional: false },
        { ingredientName: "lime juice", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false },
        { ingredientName: "mojito marinade", extraDescription: "", qty: "1", unit: "cup", isOptional: false },
        { ingredientName: "mint sprigs", extraDescription: "", qty: "", unit: "", isOptional: true }],
    timeRequired: "30",
    instructions: 'test instruction',
    availableIngredients: ['shrimp', 'mojito marinade'],
    ingredientsMatchPercentage: 50,
    missingIngredients: ['lime juice'],
    optionalIngredients: ['mint sprigs']
}

describe("Recipe Card", () => {
    test("recipe details displays in modal", () => {
        const { getByText } = render(
            <Router history={history}>
                <Recipe recipe={sampleRecipe} />
            </Router>
        )
        expect(getByText('Mojito Shrimp')).toBeInTheDocument()
        expect(getByText('Matched: 50%')).toBeInTheDocument()
        expect(getByText(/mojito marinade/i)).toBeInTheDocument()
        expect(getByText(/lime juice/i)).toBeInTheDocument()
    })

    test("recipe details appear in modal when recipe card is clicked", () => {
        const { container, getByText } = render(
            <Router history={history}>
                <Recipe recipe={sampleRecipe} />
            </Router>
        )
        const recipeCard = container.querySelector(".clickable");
        fireEvent.click(recipeCard)
        expect(getByText('Ingredients')).toBeInTheDocument()
        expect(getByText('2 tbsp lime juice')).toBeInTheDocument()
        expect(getByText('Steps')).toBeInTheDocument()
        expect(getByText('test instruction')).toBeInTheDocument()
    })
})