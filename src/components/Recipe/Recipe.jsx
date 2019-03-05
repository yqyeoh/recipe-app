import React, { Component } from 'react'
import RecipeDetailsModal from '../RecipeDetailsModal/RecipeDetailsModal'
import './Recipe.css'

export class Recipe extends Component {

  state={
    showModal:false
  }

  toggleModal=()=>{
    console.log('called')
    this.setState({
      showModal:!this.state.showModal
    })
  }
  
  render(){
    const{toggleModal} = this
    const {showModal} = this.state
    const {recipe} = this.props
    const {imageUrl, title, cuisine, timeRequired, missingIngredients, ingredientsMatchPercentage, availableIngredients} = recipe
    const matchPercentageClass = ingredientsMatchPercentage>=70? "goodMatch":"averageMatch"
  return (
    <React.Fragment>
      <RecipeDetailsModal showModal={showModal} toggleModal={toggleModal} recipe={recipe}/>
    <div className="col-sm-4 card-deck clickable mt-3" onClick={toggleModal}>
    <div className="card">
    <img className="card-img-top" src={imageUrl} alt="food"/>
    <div className="card-body">
      <h6 className={`card-title ${matchPercentageClass}`}>Matched: {ingredientsMatchPercentage}%</h6>
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{cuisine}</h6>
      <p className="card-text">Available Ingredients {availableIngredients.join(', ')}</p>
      <p className="card-text">Missing: {missingIngredients.join(', ')}</p>
      
    </div>
    <div className="card-footer">
      <small className="text-muted">Time Required: {timeRequired} mins</small>
      </div>
    </div>
    </div>
    </React.Fragment>
  )
      }
}

export default Recipe
