import React from 'react'
import Recipe from '../Recipe/Recipe'

function RecipeList({filteredRecipes, toggleModal}) {
  const recipe=filteredRecipes.map(item=><Recipe key={item.id} recipe={item} toggleModal={toggleModal}/>)
  return (
    <React.Fragment>
      <div className="row">   
      {recipe}
      </div>
    </React.Fragment>
  )
}

export default RecipeList
