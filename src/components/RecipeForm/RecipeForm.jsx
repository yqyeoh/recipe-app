import React, { Component } from 'react'
import {cloneDeep} from 'lodash'
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import {getRecipes} from '../../services/recipeService'
import IngredientInputs from '../IngredientInputs/IngredientInputs'
import { getIngredients } from '../../services/ingredientService'


export class RecipeForm extends Component {
  state={
    recipe:{
      title:"",
      cuisine:"",
      servings: "",
      timeRequired: null,
      imageUrl: "",
      ingredients:[{ ingredientName: "", extraDescription: "", qty: "", unit: "", isOptional:false }],
      instructions:""
    },
    ingredientOptions:[],
    error:""
  }

  handleSubmit =(e)=>{
    e.preventDefault()

  }

  handleChange = (e) =>{
    console.log('form handle chnge called')
    const target = e.target
    const name=e.target.name
    const copyRecipe = cloneDeep(this.state.recipe)
    if(name==="ingredientName"){

      return
    }
    
    if(["extraDescription", "qty", "unit"].includes(name)){
      copyRecipe.ingredients[target.dataset.id][name]= target.value
    } else{
      const value = target.type === 'checkbox' ? target.checked : target.value;
      copyRecipe[name] = value
    }
    this.setState({recipe:copyRecipe})
  }

  handleIngredientSelectChange = id => value =>{
    console.log('handleIngredientSelectChange called value:', value)
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients[id].ingredientName= value.name
    console.log('handleIngredientSelectChange Recipe', copyRecipe)
    this.setState({recipe:copyRecipe})
  }

  componentDidMount = () =>{
    const id = this.props.match.params? this.props.match.params.id : null;
    console.log('id', id)
    const recipes = getRecipes()
    console.log('recipes', recipes)
    const recipeFound = recipes.find(recipe=>recipe.id===id)
    console.log('recipeFound', recipeFound)
    const ingredients = cloneDeep(getIngredients())
    const ingredientOptions = ingredients.map(ingredient => {
      ingredient.label = ingredient.name
      ingredient.value = ingredient.name
      return ingredient
  }).sort((a, b) => {
      return a.name.localeCompare(b.name)
  })
    if(recipeFound){
      const copyRecipe = cloneDeep(recipeFound)
      this.setState({recipe:copyRecipe, ingredientOptions:ingredientOptions})
    } else{
      this.setState({ingredientOptions: ingredientOptions})
    }
  }

  addIngredient = () =>{
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients.push({ ingredientName: "", extraDescription: "", qty: "", unit: "", isOptional:false })
    this.setState({recipe: copyRecipe})
  }

  handleDelete = (e) =>{
    console.log('delete event', e.target)
    console.log('dataset id', e.target.dataset.id)
    const targetButton = e.target.name
    const updatedData = this.state.recipe[targetButton].filter((item,index)=>index !== parseInt(e.target.dataset.id))
    console.log('updated Ingredients', updatedData)
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe[targetButton] = updatedData
    console.log('updatedRecipe after delete ingredient', copyRecipe)
    this.setState({recipe: copyRecipe})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const {title, cuisine, servings, timeRequired, imageUrl, ingredients, instructions} = this.state.recipe
    console.log('ingredients', ingredients)
    console.log('instructions', instructions)
    const {error, ingredientOptions} = this.state
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Input name="title" label="Title" value={title} error={error.name}/>
        <IngredientInputs ingredientOptions={ingredientOptions} handleIngredientSelectChange={this.handleIngredientSelectChange} ingredients={ingredients} handleDelete={this.handleDelete} addIngredient={this.addIngredient} error={error.name}/>        
        <TextArea name="instructions" label="Instructions" value={instructions} error={error.name}/>
        </form>
      </div>
    )
  }
}

export default RecipeForm
