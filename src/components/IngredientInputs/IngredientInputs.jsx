import React from 'react'
import CreatableSelect from 'react-select/lib/Creatable';

function IngredientInputs({ ingredients, handleDelete, addIngredient, ingredientOptions, handleIngredientInputChange, handleIngredientSelectChange, handleCreateIngredientOption, error }) {

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
        let
          extraDescriptionId = `extra-description-${index}`,
          qtyId = `qty-${index}`,
          unitId = `unit-${index}`,
          isOptionalId = `is-optional-${index}`,
          deleteId = `delete-${index}`
        return (
          <div className="row mb-2" data-testid="ingredients-row" key={index}>
            <div className="col-sm-4">
              <CreatableSelect
                onChange={(value) => handleIngredientSelectChange(index, value)}
                onCreateOption={handleCreateIngredientOption(index)}
                options={ingredientOptions}
                value={ingredientOptions.filter(({ value }) => {
                  return value === ingredients[index].ingredientName
                })}
              />
            </div>
            <div className="col-sm-4">
              <input className="form-control" data-testid={extraDescriptionId} name="extraDescription" type="text" id={extraDescriptionId} value={ingredients[index].extraDescription} onChange={(e) => handleIngredientInputChange(index, e)} />
            </div>
            <div className="col-sm-1">
              <input className="form-control" data-testid={qtyId} name="qty" type="text" id={qtyId} value={ingredients[index].qty} onChange={(e) => handleIngredientInputChange(index, e)} />
            </div>
            <div className="col-sm-1">
              <input className="form-control" data-testid={unitId} name="unit" type="text" id={unitId} value={ingredients[index].unit} onChange={(e) => handleIngredientInputChange(index, e)} />
            </div>
            <div className="col-sm-1">
              <input className="form-control" data-testid={isOptionalId} name="isOptional" type="checkbox" id={isOptionalId} checked={ingredients[index].isOptional} onChange={(e) => handleIngredientInputChange(index, e)} />
            </div>
            <div className="col-sm-1">
              <button type="button" className="btn btn-danger btn-sm" data-testid={deleteId} id={deleteId} onClick={(e) => handleDelete(index, e)} name="ingredients">Delete</button>
            </div>
          </div>

        )

      })}
      <button type="button" className="btn btn-success btn-sm" onClick={addIngredient}>Add New Ingredient</button>
    </React.Fragment>

  )
}

export default IngredientInputs