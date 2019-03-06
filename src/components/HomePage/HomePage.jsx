import React, { Component } from 'react'
import { cloneDeep } from 'lodash'
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated'
import { getRecipes } from '../../services/recipeService'
import { getIngredients } from '../../services/ingredientService'
import Recipe from '../Recipe/Recipe'


export class HomePage extends Component {
    state = {
        selectedIngredients: null,
        recipes: [],
        ingredients: [],
        filteredRecipes: [],
        minimumMatchPercentage:30
    }

    componentDidMount() {
        this.setState({
            recipes: getRecipes(),
            ingredients: getIngredients().map(ingredient => {
                ingredient.label = ingredient.name
                ingredient.value = ingredient.name
                return ingredient
            }).sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.selectedIngredients !== prevState.selectedIngredients) {
            const selectedIngredientsNameArray = this.state.selectedIngredients.map(ingredient => ingredient.name)
            const copyStateRecipes = cloneDeep(this.state.recipes)
            for (var recipe of copyStateRecipes) {
                console.log("called recipe loop")
                for (const selectedIngredientName of selectedIngredientsNameArray) {
                    console.log("called selectedIngredientsLoop")
                    console.log("selectedIngredientName", selectedIngredientName)
                    for (const ingredient of recipe.ingredients) {
                        console.log("called recipeIngredientsLoop")
                        console.log(ingredient.ingredientName)
                        console.log(selectedIngredientName)
                        if (ingredient.isMatched || ingredient.isOptional) {
                            continue
                        }
                        if (ingredient.ingredientName === selectedIngredientName) {
                            ingredient.isMatched = true
                            break
                        }
                    }
                }

                recipe.availableIngredients = recipe.ingredients.filter(ingredient=>ingredient.isMatched).map(ingredient=>ingredient.ingredientName)
                recipe.optionalIngredients = recipe.ingredients.filter(ingredient=>ingredient.isOptional).map(ingredient=>ingredient.ingredientName)
                recipe.missingIngredients = recipe.ingredients.filter(ingredient=>!ingredient.isMatched&&!ingredient.isOptional).map(ingredient=>ingredient.ingredientName)
                console.log('missingingredients', recipe.missingIngredients)
                recipe.ingredientsMatchPercentage = Math.round(recipe.availableIngredients.length / (recipe.ingredients.length- recipe.optionalIngredients.length) * 100)
            }
            const filteredRecipes = copyStateRecipes.filter(recipe => recipe.ingredientsMatchPercentage >= this.state.minimumMatchPercentage).sort((a,b)=>b.ingredientsMatchPercentage-a.ingredientsMatchPercentage)
            this.setState({ filteredRecipes: filteredRecipes }, () => {
                console.log('filteredRecipesMoreThan30Percent', this.state.filteredRecipes)
            })
        }
    }

    handleChange = (selectedIngredients) => {
        console.log('selectedIngredients', selectedIngredients)
        this.setState({ selectedIngredients: selectedIngredients })
    }

    render() {
        const { selectedIngredients, filteredRecipes } = this.state;
        console.log('filteredRecipes', filteredRecipes)       
        const recipe=filteredRecipes.map(item=><Recipe key={item.id} recipe={item}/>)
        return (
            <React.Fragment>
            <Select
                value={selectedIngredients}
                onChange={this.handleChange}
                options={this.state.ingredients}
                isMulti
                isClearable
                components={makeAnimated()}
                className="mt-5"
            />
            <div className="row">   
            {recipe}
            </div>
            </React.Fragment>



        );
    }
}

export default HomePage
