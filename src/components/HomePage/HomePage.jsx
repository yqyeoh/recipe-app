import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import { getRecipes, filterRecipes } from '../../services/recipeService';
import { getIngredients, ingredientsAddLabelValueProperty } from '../../services/ingredientService';
import Recipe from '../Recipe/Recipe';

export class HomePage extends Component {
  _isMounted = false;

  state = {
    selectedIngredients: [],
    recipes: [],
    ingredients: [],
    filteredRecipes: [],
    minimumMatchPercentage: 1,
  };

  async componentDidMount() {
    this._isMounted = true;
    const recipes = await getRecipes();
    const ingredients = ingredientsAddLabelValueProperty(await getIngredients());
    if (this._isMounted) {
      this.setState({
        recipes,
        ingredients,
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { selectedIngredients, recipes, minimumMatchPercentage } = this.state;
    if (selectedIngredients !== prevState.selectedIngredients) {
      const selectedIngredientsNameArray = selectedIngredients.map(ingredient => ingredient.name);
      const copyStateRecipes = cloneDeep(recipes);
      const filteredRecipes = filterRecipes(selectedIngredientsNameArray, copyStateRecipes, minimumMatchPercentage);
      if (this._isMounted) {
        this.setState({ filteredRecipes });
      }
    }
  }

  handleChange = selectedIngredients => {
    if (this._isMounted) {
      this.setState({ selectedIngredients });
    }
  };

  render() {
    const { ingredients, selectedIngredients, filteredRecipes } = this.state;
    const recipe = filteredRecipes.map(item => <Recipe key={item._id} recipe={item} />);
    return (
      <React.Fragment>
        <div>
          <h1 className="landing-title">What Can I Cook?</h1>
        </div>
        <Select
          value={selectedIngredients}
          onChange={this.handleChange}
          options={ingredients}
          isMulti
          isClearable
          components={makeAnimated()}
          placeholder="enter your available ingredients..."
          className="mt-5"
        />
        <div className="row">{recipe}</div>
      </React.Fragment>
    );
  }
}

export default HomePage;
