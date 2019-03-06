import React from 'react'

function IngredientInputs({ingredients, handleDelete}) {
  console.log("ingredients in ingredientInputs", ingredients)
  return (
    ingredients.map((ingredient,index)=>{
      let ingredientNameId = `ingredient-name-${index}`, 
          extraDescriptionId=`extra-description-${index}`,
          qtyId=`qty-${index}`,
          unitId=`unit-${index}`
      return (
        <div key={index}>
          <div className="form-group">
                <label htmlFor={ingredientNameId}>Ingredient Name</label>
                <input className="form-control" data-id={index} name="ingredientName" type="text" id={ingredientNameId} value={ingredients[index].ingredientName}/>
            </div>
            <div className="form-group">
                <label htmlFor={extraDescriptionId}>Extra Description</label>
                <input className="form-control" data-id={index} name="extraDescription" type="text" id={extraDescriptionId} value={ingredients[index].extraDescription}/>
            </div>
            <div className="form-group">
                <label htmlFor="qty">Quantity</label>
                <input className="form-control" data-id={index} name="qty" type="text" id={qtyId} value={ingredients[index].qty}/>
            </div>
            <div className="form-group">
                <label htmlFor="unit">Unit</label>
                <input className="form-control" data-id={index} name="unit" type="text" id={unitId} value={ingredients[index].unit}/>
            </div>
            <button data-id={index} onClick={handleDelete} name="ingredients">Delete</button>        
      </div>

      )

    })
    
  )
}

export default IngredientInputs