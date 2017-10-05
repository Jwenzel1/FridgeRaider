import React, {Component} from "react";
import DeleteBtn from "./DeleteBtn";
import {Button, ButtonToolbar, Panel, FormExample, ListGroup, ListGroupItem, FormGroup, FormControl, HelpBlock } from "react-bootstrap";
import Display from "./DisplayRecipes";
import axios from "axios";


class AddIngredients extends Component {
  state = {
    ingredients: [],
    ingredient: ""
  };

  setRecipes = () => {
    console.log("Running setRecipes()");
    console.log(this.state.ingredients);
    axios.post("/api/search/ingredientSearch", {ingredients: this.state.ingredients})
    .then(function(response){
      localStorage.setItem("recipes", JSON.stringify(response.data));
      console.log(response.data)
      Display.getRecipes();
    })
    .catch(function(err){
      console.log(err);
    });
  }
    componentDidMount() {
      localStorage.clear();
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
        <Button type="button" bsStyle="info" onClick={this.setRecipes}>Find Recipes</Button>
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
