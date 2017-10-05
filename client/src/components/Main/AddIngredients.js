import React, {Component} from "react";
import DeleteBtn from "./DeleteBtn";
import {Button, ButtonToolbar, Panel, FormExample, ListGroup, ListGroupItem, FormGroup, FormControl, HelpBlock } from "react-bootstrap";

class AddIngredients extends Component {
  state = {
    ingredients: [],
    ingredient: ""
  };

  handleInputChange = event => {
    this.setState({ ingredient: event.target.value });

    console.log(this.ingredients)
  };

  handleSubmitForm = event => {
    event.preventDefault();   
        let ingredients = this.state.ingredients;
        ingredients.push(this.state.ingredient);
        this.setState({ingredients: ingredients, ingredient: ""});
  };

  deleteIngredient = event => {
    event.preventDefault();
    let array = this.state.ingredients
    let index = array.indexOf(event.target.key)
    console.log(event.target.key)
    array.splice(index,1)
    this.setState({ ingredients: array, ingredient: ""})
  }



  render(){
    return(
      <Panel collapsible defaultExpanded header="Add Ingredients">
        <form >
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              type="text"
              value={this.state.ingredient}
              placeholder="Enter text"
              onChange={this.handleInputChange}
            />
            <FormControl.Feedback />
          </FormGroup>

      <ButtonToolbar>
        <Button id="saveBtn" type="submit" bsStyle="success" onClick={this.handleSubmitForm}>Save Ingredients</Button>
        <Button type="submit" bsStyle="info">Find Recipes</Button>
      </ButtonToolbar>

      <ListGroup>
         {this.state.ingredients.map((ingredient,index) => (
           <ListGroupItem>
             <strong>
              {ingredient}
              <DeleteBtn id={index} onClick={this.deleteIngredient} />
             </strong>
            </ListGroupItem>
          ))}
      </ListGroup>
      </form>
    </Panel>
    )
  }
}

export default AddIngredients;
