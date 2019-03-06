import React from 'react'
import CreatableSelect from 'react-select/lib/Creatable';

function IngredientInputs({ ingredients, handleDelete, addIngredient, ingredientOptions, handleIngredientSelectChange, handleCreateIngredientOption}) {
  console.log("ingredients in ingredientInputs", ingredients)
  console.log("handleIngredientSelectChange", handleIngredientSelectChange)
  console.log("ingredientOptions", ingredientOptions)
  
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-4">
          Ingredient Name
            </div>
        <div className="col-sm-4">
          Extra Description
        </div>
        <div className="col-sm-1">
          Quantity
    </div>
        <div className="col-sm-1">
          Unit
</div>
        <div className="col-sm-1">
          Optional
</div>
      </div>
      {ingredients.map((ingredient, index) => {
        console.log(ingredients[index].ingredientName)
        let ingredientNameId = `ingredient-name-${index}`,
          extraDescriptionId = `extra-description-${index}`,
          qtyId = `qty-${index}`,
          unitId = `unit-${index}`,
          isOptionalId = `is-optional-${index}`
        return (
          <div className="row mb-2" key={index}>
            <div className="col-sm-4">
            <CreatableSelect
        onChange={handleIngredientSelectChange(index)}
        onCreateOption={handleCreateIngredientOption}
        options={ingredientOptions}
        data-id={index}
        name="ingredientName"
        id={ingredientNameId}
        value={ingredientOptions.filter(({value}) => value ===ingredients[index].ingredientName)}
      />
            </div>
            <div className="col-sm-4">
              <input className="form-control" data-id={index} name="extraDescription" type="text" id={extraDescriptionId} value={ingredients[index].extraDescription} />
            </div>
            <div className="col-sm-1">
              <input className="form-control" data-id={index} name="qty" type="text" id={qtyId} value={ingredients[index].qty} />
            </div>
            <div className="col-sm-1">
              <input className="form-control" data-id={index} name="unit" type="text" id={unitId} value={ingredients[index].unit} />
            </div>
            <div className="col-sm-1">
              <input className="form-control" data-id={index} name="isOptional" type="checkbox" id={isOptionalId} checked={ingredients[index].isOptional} />
            </div>
            <div className="col-sm-1">
              <button className="btn btn-danger" data-id={index} onClick={handleDelete} name="ingredients">Delete</button>
            </div>
          </div>

        )

      })}
      <button onClick={addIngredient}>Add New Ingredient</button>
    </React.Fragment>

  )
}

export default IngredientInputs