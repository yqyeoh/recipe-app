import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import Joi from 'joi-browser';
import { Spinner } from 'reactstrap';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import { getRecipes, saveRecipe } from '../../services/recipeService';
import IngredientInputs from '../IngredientInputs/IngredientInputs';
import { getIngredients, ingredientsAddLabelValueProperty } from '../../services/ingredientService';
import SelectInput from '../common/SelectInput';
import { getCuisines } from '../../services/cuisineService';
import { getUser } from '../../services/userService';
import Login from '../Login/Login';

export class RecipeForm extends Component {
  _isMounted = false;

  state = {
    recipe: {
      title: '',
      cuisine: '',
      servings: '',
      timeRequired: '',
      imageUrl: '',
      ingredients: [{ ingredientName: '', extraDescription: '', qty: '', unit: '', isOptional: false }],
      instructions: '',
    },
    cuisines: [],
    ingredientOptions: [],
    error: '',
    user: '',
    isLoading: true,
  };

  schema = {
    ingredients: Joi.array().items({
      ingredientName: Joi.string().required(),
    }),
    title: Joi.string().required(),
    servings: [Joi.string(), Joi.number()],
    timeRequired: Joi.number().required(),
    cuisine: Joi.string().required(),
    instructions: Joi.string().required(),
    imageUrl: Joi.string()
      .uri({ allowRelative: true })
      .allow(''),
  };

  validateField = (inputName, value) => {
    const schema = { [inputName]: this.schema[inputName] };
    const result = Joi.validate({ [inputName]: value }, schema);
    return result.error;
  };

  handleChange = e => {
    const target = e.target;
    const name = e.target.name;
    if (!name) {
      return;
    }
    const copyRecipe = cloneDeep(this.state.recipe);
    const copy = { ...this.state.error };
    const isInvalid = this.validateField(name, target.value);

    if (isInvalid) {
      copy[name] = isInvalid.details[0].message;
      this.setState({ error: copy });
    } else {
      copy[name] = '';
      this.setState({ error: copy });
    }
    copyRecipe[name] = target.value;
    this.setState({ recipe: copyRecipe });
  };

  // handle ingredient name change
  handleIngredientSelectChange = (idx, value) => {
    const copyRecipe = cloneDeep(this.state.recipe);
    copyRecipe.ingredients[idx].ingredientName = value.name;
    this.setState({ recipe: copyRecipe });
  };

  // handle ingredient input fields change, excluding ingredient name
  handleIngredientInputChange = (idx, e) => {
    const target = e.target;
    const name = e.target.name;
    const copyRecipe = cloneDeep(this.state.recipe);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    copyRecipe.ingredients[idx][name] = value;
    this.setState({ recipe: copyRecipe });
  };

  handleCreateIngredientOption = idx => value => {
    value = value.toLowerCase();
    const newOption = { name: value, label: value, value };
    // const { newIngredientOptions, ingredientOptions } = this.state
    const { ingredientOptions } = this.state;
    const copyRecipe = cloneDeep(this.state.recipe);
    copyRecipe.ingredients[idx].ingredientName = value;

    this.setState(
      {
        // newIngredientOptions: [...newIngredientOptions, newOption],
        ingredientOptions: [...ingredientOptions, newOption],
      },
      () => {
        this.setState({ recipe: copyRecipe });
      }
    );
  };

  async componentDidMount() {
    this._isMounted = true;
    const [user, cuisines, recipes, ingredients] = await Promise.all([
      getUser(),
      getCuisines(),
      getRecipes(),
      getIngredients(),
    ]);
    const { match } = this.props;
    const id = match ? match.params.id : null;
    const recipeFound = recipes.find(recipe => recipe._id === id);
    const ingredientOptions = ingredientsAddLabelValueProperty(ingredients);
    if (this._isMounted) {
      if (recipeFound) {
        this.setState({ recipe: recipeFound, ingredientOptions, cuisines, user, isLoading: false });
      } else {
        this.setState({ ingredientOptions, cuisines, user, isLoading: false });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  addIngredient = () => {
    const { recipe } = this.state;
    const copyRecipe = cloneDeep(recipe);
    copyRecipe.ingredients.push({ ingredientName: '', extraDescription: '', qty: '', unit: '', isOptional: false });
    this.setState({ recipe: copyRecipe });
  };

  handleDelete = (idx, e) => {
    const { recipe } = this.state;
    const targetButton = e.target.name;
    const updatedData = recipe[targetButton].filter((item, index) => index !== parseInt(idx));
    const copyRecipe = cloneDeep(recipe);
    copyRecipe[targetButton] = updatedData;
    this.setState({ recipe: copyRecipe });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { recipe } = this.state;
    const copyRecipe = cloneDeep(recipe);
    copyRecipe.ingredients = copyRecipe.ingredients.map(item => {
      item.ingredient = item.ingredientName;
      delete item.ingredientName;
      return item;
    });
    await saveRecipe(copyRecipe);
    this.props.history.replace(this.props.returnPath);
  };

  validate = () => {
    const { recipe } = this.state;
    const opts = { abortEarly: false, allowUnknown: true };
    const result = Joi.validate(recipe, this.schema, opts);
    return result.error;
  };

  render() {
    const { title, cuisine, servings, timeRequired, imageUrl, ingredients, instructions } = this.state.recipe;
    const { error, ingredientOptions, cuisines, user, isLoading } = this.state;
    if (isLoading) {
      return <Spinner color="warning" />;
    }
    if (!user) {
      return <Login />;
    }
    return (
      <div className="container">
        <h3>{title ? 'Edit Recipe' : 'New Recipe'}</h3>
        <form onSubmit={this.handleSubmit}>
          <Input name="title" label="Title" value={title} error={error.title} handleChange={this.handleChange} />
          <div className="row">
            <div className="col-sm-4">
              <SelectInput
                name="cuisine"
                label="Cuisine"
                value={cuisine}
                handleChange={this.handleChange}
                error={error.cuisine}
                options={cuisines}
              />
            </div>
            <div className="col-sm-4">
              <Input
                name="servings"
                label="Servings"
                value={servings}
                handleChange={this.handleChange}
                error={error.servings}
              />
            </div>
            <div className="col-sm-4">
              <Input
                name="timeRequired"
                label="Time Required (mins)"
                value={timeRequired}
                handleChange={this.handleChange}
                error={error.timeRequired}
              />
            </div>
          </div>

          <Input
            name="imageUrl"
            label="Image URL"
            value={imageUrl}
            error={error.imageUrl}
            handleChange={this.handleChange}
          />
          <IngredientInputs
            ingredientOptions={ingredientOptions}
            handleIngredientInputChange={this.handleIngredientInputChange}
            handleCreateIngredientOption={this.handleCreateIngredientOption}
            handleIngredientSelectChange={this.handleIngredientSelectChange}
            ingredients={ingredients}
            handleDelete={this.handleDelete}
            addIngredient={this.addIngredient}
            error={error.ingredientName}
          />
          <TextArea
            name="instructions"
            label="Instructions"
            value={instructions}
            error={error.instructions}
            handleChange={this.handleChange}
          />
          <div className="row mb-5">
            <div className="col-md">
              <button type="submit" className="btn btn-primary btn" disabled={this.validate()}>
                Save
              </button>
              <Link className="btn btn-danger btn" style={{ marginLeft: '10px' }} to="/admin">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
