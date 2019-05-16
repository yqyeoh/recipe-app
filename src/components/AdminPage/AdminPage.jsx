import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { getRecipes, deleteRecipe } from '../../services/recipeService';
import AdminRecipeCard from '../AdminRecipeCard/AdminRecipeCard';
import './AdminPage.css';
import { getUser, logout } from '../../services/userService';
import Login from '../Login/Login';

export class AdminPage extends Component {
  _isMounted = false;

  state = {
    recipes: [],
    filteredRecipes: [],
    inputKeyword: '',
    user: '',
    isLoading: true,
  };

  async componentDidMount() {
    this._isMounted = true;
    const [user, recipes] = await Promise.all([getUser(), getRecipes()]);
    if (this._isMounted) {
      this.setState({
        recipes,
        filteredRecipes: recipes,
        user,
        isLoading: false,
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputKeyword !== this.state.inputKeyword || prevState.recipes !== this.state.recipes) {
      const filteredRecipes = this.state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(this.state.inputKeyword.toLowerCase())
      );
      if (this._isMounted) {
        this.setState({ filteredRecipes });
      }
    }
  }

  handleChange = event => {
    if (this._isMounted) {
      this.setState({
        inputKeyword: event.target.value,
      });
    }
  };

  handleDelete = async id => {
    await deleteRecipe(id);
    const recipes = await getRecipes();
    if (this._isMounted) {
      this.setState({ recipes });
    }
  };

  handleLogout = async () => {
    await logout();
    this.props.history.push('/');
  };

  render() {
    const { filteredRecipes, inputKeyword, user, isLoading } = this.state;
    if (isLoading) {
      return <Spinner color="warning" />;
    }
    if (!user) {
      return <Login />;
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              onChange={this.handleChange}
              value={inputKeyword}
              placeholder="search by recipe title"
            />
          </div>
          <div className="col-sm-6 newRecipeDiv">
            <Link className="btn btn-success mr-4" to="/recipe/new">
              Create New Recipe
            </Link>
            <button className="btn btn-warning" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="row">
          {filteredRecipes.map(recipe => (
            <AdminRecipeCard
              key={recipe._id}
              id={recipe._id}
              title={recipe.title}
              imageUrl={recipe.imageUrl}
              cuisine={recipe.cuisine}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AdminPage;
