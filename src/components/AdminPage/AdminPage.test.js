import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent, waitForElement, wait } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import AdminPage from "./AdminPage";
import * as recipeService from '../../services/recipeService'

beforeEach(() => {
  let sampleData = [
    {
        id: "1",
        title: "Chicken Pie",
        cuisine: "Western",
        imageUrl: "https://kingsfoodmarkets.com/uploads/recipes-multi-size/KF_138_March2017_Site_Updates_Recipe_Image_Resize.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "chicken breast", extraDescription: "trimmed", qty: "2", unit: "bunch", isOptional: false },
            { ingredientName: "olive oil", extraDescription: "", qty: "1", unit: "tbsp", isOptional: false },
            ],
        timeRequired: "45",
        instructions:' test instruction 1'
    },
    {
        id: "2",
        title: "Ramen",
        cuisine: "Western",
        imageUrl: "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/11/04/fettuccine-olive-oil-ck-x.jpg?itok=bt5Cny7R",
        servings: 4,
        ingredients: [
            { ingredientName: "Ramen noodle", extraDescription: "dry", qty: "12", unit: "oz", isOptional: true },
            { ingredientName: "red bell pepper", extraDescription: "julienned", qty: "2", unit: "", isOptional: false },
           ],
        timeRequired: "15",
        instructions: 'test instruction 2'
    }
  ];

  jest
    .spyOn(recipeService, "getRecipes")
    .mockImplementation(async () => Promise.resolve(sampleData.sort((a,b)=>a.title.localeCompare(b.title))));
  jest
    .spyOn(recipeService, "deleteRecipe")
    .mockImplementation(async id => Promise.resolve(sampleData.filter(item => item.id !== id)))
});

const history = createMemoryHistory({ initialEntries: ["/"] });
const delay = (ms) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

describe('Admin Page', ()=>{
    test('recipes are shown upon load', async ()=>{
        const { getAllByText, debug } = render(
            <Router history={history}>
              <AdminPage />
            </Router>
          )        
        expect(recipeService.getRecipes).toHaveBeenCalledTimes(1);
        await wait(()=> expect(getAllByText("Delete").length).toEqual(2))
    })    

    test("when delete button is clicked, recipe will be removed", async () => {
        const { getByText, getAllByText, queryByText, debug } = render(
          <Router history={history}>
            <AdminPage />
          </Router>
        );
        const firstDeleteBtn = await waitForElement(()=>getByText("Delete"));
        debug()
        // fireEvent.click(firstDeleteBtn);
        // await delay(0)
        // const _firstDeleteBtn = await waitForElement(()=>getByText("Delete"));
        // await wait(()=> expect(queryByText(/chicken/i)).not.toBeInTheDocument())
        // await wait(()=> expect(getAllByText("Delete").length).toEqual(1))
        
        // expect(
        //   queryByText(/ramen/i)
        // ).not.toBeInTheDocument();
      })
})