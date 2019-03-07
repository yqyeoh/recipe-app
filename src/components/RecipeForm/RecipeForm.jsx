import React, { Component } from 'react'
import { cloneDeep } from 'lodash'
import Joi from 'joi-browser'
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import { getRecipes, saveRecipe } from '../../services/recipeService'
import IngredientInputs from '../IngredientInputs/IngredientInputs'
import { getIngredients, saveIngredients } from '../../services/ingredientService'
import SelectInput from '../common/SelectInput'
import { getCuisines } from '../../services/cuisineService'


export class RecipeForm extends Component {
  state = {
    recipe: {
      title: "",
      cuisine: "",
      servings: "",
      timeRequired: "",
      imageUrl: "",
      ingredients: [{ ingredientName: "", extraDescription: "", qty: "", unit: "", isOptional: false }],
      instructions: ""
    },
    ingredientOptions: [],
    newIngredientOptions: [],
    error: ""
  }

  schema = {
    ingredients: Joi.array().items({
      ingredientName: Joi.string().required()
    }),
    title: Joi.string().required(),
    servings: [Joi.string(), Joi.number()],
    timeRequired: Joi.number().required(),
    cuisine: Joi.string().required(),
    instructions: Joi.string().required(),
    imageUrl: Joi.string().uri({ allowRelative: true }).allow('')
  }

  // ingredientSchema = {
  //   ingredientName: Joi.string().required()
  // }

  validateField = (inputName, value) => {
    //get schema for that field
    // console.log('validateField InputName',inputName)
    // console.log('validateField Value',value)
    const schema = { [inputName]: this.schema[inputName] }
    //call joi validate with that scheme & value
    const result = Joi.validate({ [inputName]: value }, schema)
    return result.error
    //return true/false
  }

  handleChange = (e) => {
    // console.log('form handle chnge called, event target:', e)
    // console.log('form handle chnge called, event target type:', e.target.type)
    const target = e.target
    const name = e.target.name
    const copyRecipe = cloneDeep(this.state.recipe)
    if (name === "ingredientName" || !name) {
      // console.log('called first')
      return
    }
    if (["extraDescription", "qty", "unit", "isOptional"].includes(name)) {
      // console.log('called second')
      // console.log('target.checked', target.checked)      
      const value = target.type === 'checkbox' ? target.checked : target.value;
      copyRecipe.ingredients[target.dataset.id][name] = value
    } else {
      const copy = { ...this.state.error }
      const isInvalid = this.validateField(name, target.value)
      if (isInvalid) {
        copy[name] = isInvalid.details[0].message
        this.setState({ error: copy })
      } else {
        copy[name] = ""
        this.setState({ error: copy })
      }
      copyRecipe[name] = target.value
    }
    this.setState({ recipe: copyRecipe })
  }

  handleIngredientSelectChange = id => value => {
    // console.log('handleIngredientSelectChange called value:', value)
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients[id].ingredientName = value.name
    // console.log('handleIngredientSelectChange Recipe', copyRecipe)
    // const validationResult = Joi.validate({ingredientName: value},this.ingredientSchema)
    // if(validationResult.error){
    //   const copyError = { ...this.state.error }
    //   copyError.ingredientName = validationResult.error.details[0].message
    //   this.setState({ error: copyError })
    // }
    // console.log('validate result', validationResult.error)
    this.setState({ recipe: copyRecipe })
  }

  handleCreateIngredientOption = id => value => {
    // console.log('handleCreateIngredientOption', this.state.recipe)
    value = value.toLowerCase()
    // console.log('id', id)
    const newOption = { name: value, label: value, value: value }
    const { newIngredientOptions, ingredientOptions } = this.state
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients[id].ingredientName = value

    this.setState({
      newIngredientOptions: [...newIngredientOptions, newOption],
      ingredientOptions: [...ingredientOptions, newOption]
    }, () => {
      this.setState({recipe:copyRecipe})
      // console.log('state after create new ingredient',this.state)
    })
  }

  componentDidMount = () => {
    const id = this.props.match.params ? this.props.match.params.id : null;
    // console.log('id', id)
    const recipes = getRecipes()
    // console.log('recipes', recipes)
    const recipeFound = recipes.find(recipe => recipe.id === id)
    // console.log('recipeFound', recipeFound)
    const ingredients = cloneDeep(getIngredients())
    const ingredientOptions = ingredients.map(ingredient => {
      ingredient.label = ingredient.name
      ingredient.value = ingredient.name
      return ingredient
    }).sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    if (recipeFound) {
      const copyRecipe = cloneDeep(recipeFound)
      this.setState({ recipe: copyRecipe, ingredientOptions: ingredientOptions })
    } else {
      this.setState({ ingredientOptions: ingredientOptions })
    }
  }

  addIngredient = () => {
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients.push({ ingredientName: "", extraDescription: "", qty: "", unit: "", isOptional: false })
    this.setState({ recipe: copyRecipe })
  }

  handleDelete = (e) => {
    // console.log('delete event', e.target)
    // console.log('dataset id', e.target.dataset.id)
    const targetButton = e.target.name
    const updatedData = this.state.recipe[targetButton].filter((item, index) => index !== parseInt(e.target.dataset.id))
    // console.log('updated Ingredients', updatedData)
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe[targetButton] = updatedData
    // console.log('updatedRecipe after delete ingredient', copyRecipe)
    this.setState({ recipe: copyRecipe })
  }

  handleSubmit = (e) => {    
    e.preventDefault()
    console.log('handle submit called, event.currentTarget:', e.currentTarget)
    const {recipe, newIngredientOptions} = this.state
    const recipeIngredientNames = recipe.ingredients.map(ingredient=>ingredient.ingredientName)
    const cleansedNewIngredients = newIngredientOptions.filter(newIngredient=> recipeIngredientNames.includes(newIngredient.name)).map(newIngredient=>({name:newIngredient.name, isExcludedFromMatch:false}))
    saveRecipe(recipe)
    saveIngredients(cleansedNewIngredients)
    this.props.history.replace(this.props.returnPath);

  }

  validate=()=>{
    const opts = {abortEarly:false, allowUnknown: true}
    const result = Joi.validate(this.state.recipe,this.schema,opts)
    console.log('validate result', result)
    return result.error
  }

  render() {
    const { title, cuisine, servings, timeRequired, imageUrl, ingredients, instructions } = this.state.recipe
    const { error, ingredientOptions } = this.state
    console.log('updated recipe:', this.state.recipe)
    console.log('error on render', error)
    console.log('updated ingredients:', this.state.ingredientOptions)
    // console.log('new ingredients:', this.state.newIngredientOptions)
    return (
      
      <div className="container">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Input name="title" label="Title" value={title} error={error.title} />
          <div className="row">
            <div className="col-sm-4">
              <SelectInput name="cuisine" label="Cuisine" value={cuisine} error={error.cuisine} options={getCuisines()} />
            </div>
            <div className="col-sm-4">
              <Input name="servings" label="Servings" value={servings} error={error.servings} />
            </div>
            <div className="col-sm-4">
              <Input name="timeRequired" label="Time Required (mins)" value={timeRequired} error={error.timeRequired} />
            </div>
          </div>
          <div className="row"></div>
              <Input name="imageUrl" label="Image URL" value={imageUrl} error={error.imageUrl} />
          <IngredientInputs ingredientOptions={ingredientOptions} handleCreateIngredientOption={this.handleCreateIngredientOption} handleIngredientSelectChange={this.handleIngredientSelectChange} ingredients={ingredients} handleDelete={this.handleDelete} addIngredient={this.addIngredient} error={error.ingredientName} />
          <TextArea name="instructions" label="Instructions" value={instructions} error={error.instructions} />
          <button className="btn btn-primary btn-sm" disabled={this.validate()}>Save</button>
        </form>
      </div>
    )
  }
}

export default RecipeForm
