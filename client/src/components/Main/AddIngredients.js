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
  };

  handleSubmitForm = event => {
    event.preventDefault();
    let ingredients = this.state.ingredients;
    ingredients.push(this.state.ingredient);
    this.setState({ingredients: ingredients, ingredient: ""});
  };


    deleteIngredient = event => {
    this.setState({ingredient: ""});
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

      <ListGroup>
         {this.state.ingredients.map(ingredient => (
           <ListGroupItem>
             <strong>
              {ingredient}
              <DeleteBtn onClick={this.deleteIngredient} />
             </strong>
            </ListGroupItem>
          ))}
      </ListGroup>
      <ButtonToolbar>
        <Button type="submit" bsStyle="success" onClick={this.handleSubmitForm}>Save Ingredients</Button>
        <Button type="submit" bsStyle="info">Find Recipes</Button>
      </ButtonToolbar>
      </form>
    </Panel>
    )
  }
}

export default AddIngredients;
