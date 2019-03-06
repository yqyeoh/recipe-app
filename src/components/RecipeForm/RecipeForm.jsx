import React, { Component } from 'react'
import {cloneDeep} from 'lodash'
import Input from "../common/Input";
import {getRecipes} from '../../services/recipeService'
import IngredientInputs from '../IngredientInputs/IngredientInputs'


export class RecipeForm extends Component {
  state={
    recipe:{
      title:"",
      cuisine:"",
      servings: "",
      timeRequired: null,
      imageUrl: "",
      ingredients:[{ ingredientName: "", extraDescription: "", qty: "", unit: "" }],
      instructions:[]
    },
    error:""
  }

  handleSubmit =(e)=>{
    e.preventDefault()

  }

  handleChange = (e) =>{
    const copyRecipe = cloneDeep(this.state.recipe)
    if(["ingredientName", "extraDescription", "qty", "unit"].includes(e.target.name)){
      copyRecipe.ingredients[e.target.dataset.id][e.target.name]=e.target.value
    } else{
      copyRecipe[e.target.name] = e.target.value
    }
    this.setState({recipe:copyRecipe})
  }

  componentDidMount = () =>{
    const id = this.props.match.params? this.props.match.params.id : null;
    console.log('id', id)
    const recipes = getRecipes()
    console.log('recipes', recipes)
    const recipeFound = recipes.find(recipe=>recipe.id===id)
    console.log('recipeFound', recipeFound)

    if(recipeFound){
      const copyRecipe = cloneDeep(recipeFound)
      this.setState({recipe:copyRecipe})
    }
  }

  addIngredient = () =>{
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients.push({ ingredientName: "", extraDescription: "", qty: "", unit: "" })
    this.setState({recipe: copyRecipe})
  }

  handleDelete = (e) =>{
    console.log('delete event', e.target)
    console.log('dataset id', e.target.dataset.id)
    const updatedIngredients = this.state.recipe.ingredients.filter((ingredient,index)=>index !== parseInt(e.target.dataset.id))
    console.log('updated Ingredients', updatedIngredients)
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients = updatedIngredients
    console.log('updatedRecipe after delete ingredient', copyRecipe)
    this.setState({recipe: copyRecipe})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const {title, cuisine, servings, timeRequired, imageUrl, ingredients, instructions} = this.state.recipe
    console.log('ingredients', ingredients)
    const {error} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Input name="title" label="Title" onChange={this.handleChange} value={title} error={error.name}/>
        <button onClick={this.addIngredient}>Add New Ingredient</button>
        <IngredientInputs ingredients={ingredients} handleDelete={this.handleDelete}/>        
        </form>
      </div>
    )
  }
}

export default RecipeForm
