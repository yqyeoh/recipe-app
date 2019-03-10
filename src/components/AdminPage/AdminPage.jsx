import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getRecipes, deleteRecipe } from '../../services/recipeService'
import AdminRecipeCard from '../AdminRecipeCard/AdminRecipeCard'


export class AdminPage extends Component {

    _isMounted=false

    state = {
        recipes: [],
        filteredRecipes: [],
        inputKeyword: "",
    }

    async componentDidMount() {
        this._isMounted=true
        const recipes = await getRecipes()
        if (this._isMounted){
            this.setState({
                recipes: recipes,
                filteredRecipes: recipes
            })
        }        
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputKeyword !== this.state.inputKeyword || prevState.recipes !== this.state.recipes) {
            const filteredRecipes = this.state.recipes.filter(recipe => recipe.title.toLowerCase().includes(this.state.inputKeyword.toLowerCase()))
            if(this._isMounted){
                this.setState({ filteredRecipes })
            }            
        }
    }

    handleChange = (event) => {
        if(this._isMounted){
            this.setState({
                inputKeyword: event.target.value
            })
        }        
    }

    handleDelete = async (id) => {
        await deleteRecipe(id)
        if(this._isMounted){
            this.setState({ recipes: await getRecipes() })
        }        
    }

    render() {
        const { filteredRecipes, inputKeyword } = this.state

        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleChange} value={inputKeyword} placeholder="search by recipe title" />
                    <Link className="btn btn-primary btn-sm mb-2" to="/recipe/new">Create New</Link>
                </div>
                <div className="row">
                    {filteredRecipes.map(recipe => <AdminRecipeCard key={recipe.id} id={recipe.id} title={recipe.title} imageUrl={recipe.imageUrl} cuisine={recipe.cuisine} handleDelete={this.handleDelete} />)}
                </div>

            </div>
        )
    }
}

export default AdminPage
