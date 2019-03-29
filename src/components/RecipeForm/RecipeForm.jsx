import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { cloneDeep } from 'lodash'
import Joi from 'joi-browser'
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import { getRecipes, saveRecipe } from '../../services/recipeService'
import IngredientInputs from '../IngredientInputs/IngredientInputs'
import { getIngredients, saveIngredients, ingredientsAddLabelValueProperty } from '../../services/ingredientService'
import SelectInput from '../common/SelectInput'
import { getCuisines } from '../../services/cuisineService'


export class RecipeForm extends Component {

  _isMounted = false

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
    cuisines: [],
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

  validateField = (inputName, value) => {
    const schema = { [inputName]: this.schema[inputName] }
    const result = Joi.validate({ [inputName]: value }, schema)
    return result.error
  }

  handleChange = (e) => {
    const target = e.target
    const name = e.target.name
    if (!name) {
      return
    }
    const copyRecipe = cloneDeep(this.state.recipe)
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
    this.setState({ recipe: copyRecipe })
  }

  //handle ingredient name change
  handleIngredientSelectChange = (idx, value) => {
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients[idx].ingredientName = value.name
    this.setState({ recipe: copyRecipe })
  }

  //handle ingredient input fields change, excluding ingredient name
  handleIngredientInputChange = (idx, e) => {
    const target = e.target
    const name = e.target.name
    const copyRecipe = cloneDeep(this.state.recipe)
    const value = target.type === 'checkbox' ? target.checked : target.value;
    copyRecipe.ingredients[idx][name] = value
    this.setState({ recipe: copyRecipe })
  }

  handleCreateIngredientOption = idx => value => {
    value = value.toLowerCase()
    const newOption = { name: value, label: value, value: value }
    const { newIngredientOptions, ingredientOptions } = this.state
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients[idx].ingredientName = value

    this.setState({
      newIngredientOptions: [...newIngredientOptions, newOption],
      ingredientOptions: [...ingredientOptions, newOption]
    }, () => {
      this.setState({ recipe: copyRecipe })
    })
  }

  async componentDidMount() {
    this._isMounted = true
    const id = this.props.match ? this.props.match.params.id : null;
    const cuisines = await getCuisines()
    const recipes = await getRecipes()
    const recipeFound = recipes.find(recipe => recipe.id === id)
    const ingredients = cloneDeep(await getIngredients())
    const ingredientOptions = ingredientsAddLabelValueProperty(ingredients)
    if (this._isMounted) {
      if (recipeFound) {
        const copyRecipe = cloneDeep(recipeFound)
        this.setState({ recipe: copyRecipe, ingredientOptions: ingredientOptions, cuisines: cuisines })
      } else {
        this.setState({ ingredientOptions: ingredientOptions, cuisines: cuisines })
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  addIngredient = () => {
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe.ingredients.push({ ingredientName: "", extraDescription: "", qty: "", unit: "", isOptional: false })
    this.setState({ recipe: copyRecipe })
  }

  handleDelete = (idx, e) => {
    const targetButton = e.target.name
    const updatedData = this.state.recipe[targetButton].filter((item, index) => index !== parseInt(idx))
    const copyRecipe = cloneDeep(this.state.recipe)
    copyRecipe[targetButton] = updatedData
    this.setState({ recipe: copyRecipe })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { recipe, newIngredientOptions } = this.state
    const recipeIngredientNames = recipe.ingredients.map(ingredient => ingredient.ingredientName)
    const cleansedNewIngredients = newIngredientOptions.filter(newIngredient => recipeIngredientNames.includes(newIngredient.name)).map(newIngredient => ({ name: newIngredient.name, isExcludedFromMatch: false }))
    await saveRecipe(recipe)
    await saveIngredients(cleansedNewIngredients)
    this.props.history.replace(this.props.returnPath);

  }

  validate = () => {
    const opts = { abortEarly: false, allowUnknown: true }
    const result = Joi.validate(this.state.recipe, this.schema, opts)
    return result.error
  }

  render() {
    const { title, cuisine, servings, timeRequired, imageUrl, ingredients, instructions } = this.state.recipe
    const { error, ingredientOptions, cuisines } = this.state
    return (
      <div className="container">
        <h3>{title ? "Edit Recipe" : "New Recipe"}</h3>
        <form onSubmit={this.handleSubmit}>
          <Input name="title" label="Title" value={title} error={error.title} handleChange={this.handleChange} />
          <div className="row">
            <div className="col-sm-4">
              <SelectInput name="cuisine" label="Cuisine" value={cuisine} handleChange={this.handleChange} error={error.cuisine} options={cuisines} />
            </div>
            <div className="col-sm-4">
              <Input name="servings" label="Servings" value={servings} handleChange={this.handleChange} error={error.servings} />
            </div>
            <div className="col-sm-4">
              <Input name="timeRequired" label="Time Required (mins)" value={timeRequired} handleChange={this.handleChange} error={error.timeRequired} />
            </div>
          </div>
          
          <Input name="imageUrl" label="Image URL" value={imageUrl} error={error.imageUrl} handleChange={this.handleChange} />
          <IngredientInputs ingredientOptions={ingredientOptions} handleIngredientInputChange={this.handleIngredientInputChange} handleCreateIngredientOption={this.handleCreateIngredientOption} handleIngredientSelectChange={this.handleIngredientSelectChange} ingredients={ingredients} handleDelete={this.handleDelete} addIngredient={this.addIngredient} error={error.ingredientName} />
          <TextArea name="instructions" label="Instructions" value={instructions} error={error.instructions} handleChange={this.handleChange} />
          <div className="row mb-5">
          <div className='col-md'>          
          <button className="btn btn-primary btn" disabled={this.validate()}>Save</button>
          <Link className="btn btn-danger btn" style={{marginLeft:"10px"}} to="/admin">Cancel</Link>
          </div>

          </div>
        </form>
      </div>
    )
  }
}

export default RecipeForm
