import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './RecipeDetailsModal.css'

function RecipeDetailsModal({ showModal, toggle, recipe }) {
  const { imageUrl, title, ingredients, instructions, servings, timeRequired } = recipe
  const ingredientsLayout = ingredients.map((ingredient, idx) => {
    const { qty, unit, ingredientName, extraDescription, isOptional } = ingredient
    return (
      <li key={idx}>{qty} {unit} {ingredientName}{extraDescription ? ', ' : ""} {extraDescription} {isOptional ? '(optional)' : ""}</li>
    )
  })

  return (
    <Modal size='lg' isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <div className='modal-flex-container'>
          <img src={imageUrl} alt="food" />
          <div>
          <h6 className='inline-block'>Servings:&nbsp;</h6><p className='inline-block'>{servings}</p>
          </div>
          <div>
          <h6 className='inline-block'>Time Required:&nbsp;</h6><p className='inline-block'>{timeRequired} mins</p>
          </div>
          
          <div>
            <h6>Ingredients</h6>
            <ul>
            {ingredientsLayout}
            </ul>
          </div>

        </div>
        <h6>Steps</h6>
        <p>{instructions}</p>

      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  )
}

export default RecipeDetailsModal

