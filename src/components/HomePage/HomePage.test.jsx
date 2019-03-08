import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import HomePage from "./HomePage";
import { getRecipes } from '../../services/recipeService'
import { getIngredients } from '../../services/ingredientService'
import Recipe from '../Recipe/Recipe'
import { createMemoryHistory } from "history";


const history = createMemoryHistory({ initialEntries: ["/"] });

describe('Home Page', ()=>{
    xtest('test that recipe appears for matched ingredients', ()=>{


    })
})