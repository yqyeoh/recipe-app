import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './RecipeDetailsModal.css'

function RecipeDetailsModal({showModal, toggleModal, recipe}) {
  const {imageUrl, title, cuisine, timeRequired, ingredients, instructions} = recipe
  const ingredientsLayout = ingredients.map(ingredient=>{
    const {qty,unit,ingredientName,extraDescription,isOptional} = ingredient
    return(
    <p>{qty} {unit} {ingredientName}{extraDescription? ', ':""} {extraDescription} {isOptional? '(optional)':""}</p>
    )
  })

  return (
    <Modal size='lg' isOpen={showModal} toggleModal={toggleModal}>
          <ModalHeader toggleModal={toggleModal}>{title}</ModalHeader>
          <ModalBody>
          <div className='modal-flex-container'>
          <img src={imageUrl} alt="food"/>
            <div>
            <h5>Ingredients</h5>
            {ingredientsLayout}
            </div>
            
          </div>
            <h5>Steps</h5>
            <p>{instructions}</p>
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
  )
}

export default RecipeDetailsModal

