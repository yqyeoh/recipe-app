import React from 'react'

function Recipe({recipe}) {
  const {imageUrl, title, cuisine, timeRequired, missingIngredients, ingredientsMatchPercentage, availableIngredients, optionalIngredients, toggleModal} = recipe
  const matchPercentageClass = ingredientsMatchPercentage>=70? "goodMatch":"averageMatch"
  return (
    <div className="col-sm-4 card-deck clickable">
    <div className="card">
    <img className="card-img-top" src={imageUrl} alt="food"/>
    <div className="card-body">
      <h6 className={`card-title ${matchPercentageClass}`}>Matched: {ingredientsMatchPercentage}%</h6>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{cuisine}</p>
      <p className="card-text">Available Ingredients: {availableIngredients.join(', ')}</p>
      {optionalIngredients.length>0?
        <p className="card-text">Optional Ingredients: {optionalIngredients.join(', ')}</p>
        :""}      
      <p className="card-text">Missing Ingredients: {missingIngredients.join(', ')}</p>
      
    </div>
    <div className="card-footer">
      <small className="text-muted">Time Required: {timeRequired} mins</small>
      </div>
    </div>
    </div>
  )
}

export default Recipe
