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
    newIngredientOptions:[],
    error:""
  }

  handleSubmit =(e)=>{
    e.preventDefault()

  }

  handleChange = (e) =>{
    console.log('form handle chnge called, event target:', e)
    console.log('form handle chnge called, event target type:', e.target.type)
    const target = e.target
    const name=e.target.name
    const copyRecipe = cloneDeep(this.state.recipe)
    if(name==="ingredientName" || !name){
      console.log('called first')
      return
    }
    
    if(["extraDescription", "qty", "unit", "isOptional"].includes(name)){
      console.log('called second')
      console.log('target.checked', target.checked)      
      const value = target.type === 'checkbox' ? target.checked : target.value;
      copyRecipe.ingredients[target.dataset.id][name]= value
    } else{
      copyRecipe[name] = target.value
    }
    this.setState({recipe:copyRecipe})
  }

  handleIngredientSelectChange = id => value =>{
    // console.log('handleIngredientSelectChange called value:', value)
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients[id].ingredientName= value.name
    // console.log('handleIngredientSelectChange Recipe', copyRecipe)
    this.setState({recipe:copyRecipe})
  }

  handleCreateIngredientOption = id => value =>{
    // console.log('handleCreateIngredientOption', this.state.recipe)
    value = value.toLowerCase()
    // console.log('id', id)
    const newOption = {name: value, label:value, value:value }
    const {newIngredientOptions, ingredientOptions} = this.state
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients[id].ingredientName= value

    this.setState({newIngredientOptions: [...newIngredientOptions, newOption],
    ingredientOptions:[...ingredientOptions, newOption]}, ()=>{
      this.setState({recipe:copyRecipe})
      // console.log('state after create new ingredient',this.state)
    })
  }

  componentDidMount = () =>{
    const id = this.props.match.params? this.props.match.params.id : null;
    // console.log('id', id)
    const recipes = getRecipes()
    // console.log('recipes', recipes)
    const recipeFound = recipes.find(recipe=>recipe.id===id)
    // console.log('recipeFound', recipeFound)
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
    // console.log('delete event', e.target)
    // console.log('dataset id', e.target.dataset.id)
    const targetButton = e.target.name
    const updatedData = this.state.recipe[targetButton].filter((item,index)=>index !== parseInt(e.target.dataset.id))
    // console.log('updated Ingredients', updatedData)
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe[targetButton] = updatedData
    // console.log('updatedRecipe after delete ingredient', copyRecipe)
    this.setState({recipe: copyRecipe})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const {title, cuisine, servings, timeRequired, imageUrl, ingredients, instructions} = this.state.recipe
    const {error, ingredientOptions} = this.state
    // console.log('updated recipe:', this.state.recipe)
    // console.log('updated ingredients:', this.state.ingredientOptions)
    // console.log('new ingredients:', this.state.newIngredientOptions)

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Input name="title" label="Title" value={title} error={error.name}/>
        <IngredientInputs ingredientOptions={ingredientOptions} handleCreateIngredientOption = {this.handleCreateIngredientOption} handleIngredientSelectChange={this.handleIngredientSelectChange} ingredients={ingredients} handleDelete={this.handleDelete} addIngredient={this.addIngredient} error={error.name}/>        
        <TextArea name="instructions" label="Instructions" value={instructions} error={error.name}/>
        </form>
      </div>
    )
  }
}

export default RecipeForm
