import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalPop from '../ModalPop/ModalPop'

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
    const {showModal} = this.state
    const {recipe} = this.props
    const {imageUrl, title, cuisine, timeRequired, missingIngredients, ingredientsMatchPercentage, availableIngredients, optionalIngredients} = recipe
    const matchPercentageClass = ingredientsMatchPercentage>=70? "goodMatch":"averageMatch"
  return (
    <React.Fragment>
      <Modal isOpen={showModal} toggleModal={this.toggleModal}>
          <ModalHeader toggleModal={this.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
    <div className="col-sm-4 card-deck clickable" onClick={this.toggleModal}>
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
    </React.Fragment>
  )
      }
}

export default Recipe
