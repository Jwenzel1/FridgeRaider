import React, {Component} from "react";
import DeleteBtn from "./DeleteBtn";
import {Button, ButtonToolbar, Panel, FormExample, ListGroup, ListGroupItem, FormGroup, FormControl, HelpBlock } from "react-bootstrap";
import Display from "./DisplayRecipes";

var recipes = [
{
    "_id" : "59d28ba65c594a6d78579a38",
    "title" : "Chicken Taco Ring",
    "spoonacularID" : 468732,
    "spoonacularURL" : "https://spoonacular.com/chicken-taco-ring-468732",
    "image" : "https://spoonacular.com/recipeImages/468732-556x370.jpg",
    "ingredients" : [ 
        {
            "name" : "green chilies",
            "qty" : 4,
            "unit" : "oz",
            "_id" : "59d28ba65c594a6d78579a46"
        }, 
        {
            "name" : "lime",
            "qty" : 1,
            "unit" : "",
            "_id" : "59d28ba65c594a6d78579a45"
        }, 
        {
            "name" : "lime juice",
            "qty" : 1,
            "unit" : "Tbsp",
            "_id" : "59d28ba65c594a6d78579a44"
        }, 
        {
            "name" : "low fat mayonnaise",
            "qty" : 0.5,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a43"
        }, 
        {
            "name" : "low fat shredded mexican cheese blend",
            "qty" : 0.75,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a42"
        }, 
        {
            "name" : "low fat sour cream",
            "qty" : 8,
            "unit" : "oz",
            "_id" : "59d28ba65c594a6d78579a41"
        }, 
        {
            "name" : "olives",
            "qty" : 0.25,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a40"
        }, 
        {
            "name" : "plum tomato",
            "qty" : 1,
            "unit" : "",
            "_id" : "59d28ba65c594a6d78579a3f"
        }, 
        {
            "name" : "plum tomatoes",
            "qty" : 2,
            "unit" : "",
            "_id" : "59d28ba65c594a6d78579a3e"
        }, 
        {
            "name" : "refrigerated crescent rolls",
            "qty" : 16,
            "unit" : "oz",
            "_id" : "59d28ba65c594a6d78579a3d"
        }, 
        {
            "name" : "rotisserie chicken",
            "qty" : 2,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a3c"
        }, 
        {
            "name" : "salsa",
            "qty" : 1,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a3b"
        }, 
        {
            "name" : "taco seasoning",
            "qty" : 1,
            "unit" : "Tbsp",
            "_id" : "59d28ba65c594a6d78579a3a"
        }, 
        {
            "name" : "tortilla chips",
            "qty" : 0.666666666666667,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a39"
        }
    ],
    "instructions" : [ 
        {
            "number" : 1,
            "step" : "Grease a 12-in. pizza pan. Unroll crescent dough. Sprinkle with 1/4 cup tortilla chips; press down gently. Separate into 16 triangles.",
            "_id" : "59d28ba65c594a6d78579a4b"
        }, 
        {
            "number" : 2,
            "step" : "Place wide end of one triangle, chip side down, 3 in. from edge of prepared pan, with point overhanging edge of pan. Repeat with remaining triangles, overlapping the wide ends (dough will look like a sun when complete. Lightly press wide ends together.",
            "_id" : "59d28ba65c594a6d78579a4a"
        }, 
        {
            "number" : 3,
            "step" : "In a small bowl, combine the chicken, cheese, mayonnaise, chilies, olives, tomato, taco seasoning, lime juice and remaining tortilla chips. Spoon over wide ends of dough. Fold points of triangles over filling and tuck under wide ends (filling will be visible.",
            "_id" : "59d28ba65c594a6d78579a49"
        }, 
        {
            "number" : 4,
            "step" : "Bake at 375° for 20-25 minutes or until golden brown.",
            "_id" : "59d28ba65c594a6d78579a48"
        }, 
        {
            "number" : 5,
            "step" : "Garnish with sour cream, salsa, tomatoes and lime.",
            "_id" : "59d28ba65c594a6d78579a47"
        }
    ],
    "__v" : 0
},
{
    "_id" : "59d28ba65c594a6d78579a38",
    "title" : "Chicken Taco Ring",
    "spoonacularID" : 468732,
    "spoonacularURL" : "https://spoonacular.com/chicken-taco-ring-468732",
    "image" : "https://spoonacular.com/recipeImages/468732-556x370.jpg",
    "ingredients" : [ 
        {
            "name" : "green chilies",
            "qty" : 4,
            "unit" : "oz",
            "_id" : "59d28ba65c594a6d78579a46"
        }, 
        {
            "name" : "lime",
            "qty" : 1,
            "unit" : "",
            "_id" : "59d28ba65c594a6d78579a45"
        }, 
        {
            "name" : "lime juice",
            "qty" : 1,
            "unit" : "Tbsp",
            "_id" : "59d28ba65c594a6d78579a44"
        }, 
        {
            "name" : "low fat mayonnaise",
            "qty" : 0.5,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a43"
        }, 
        {
            "name" : "low fat shredded mexican cheese blend",
            "qty" : 0.75,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a42"
        }, 
        {
            "name" : "low fat sour cream",
            "qty" : 8,
            "unit" : "oz",
            "_id" : "59d28ba65c594a6d78579a41"
        }, 
        {
            "name" : "olives",
            "qty" : 0.25,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a40"
        }, 
        {
            "name" : "plum tomato",
            "qty" : 1,
            "unit" : "",
            "_id" : "59d28ba65c594a6d78579a3f"
        }, 
        {
            "name" : "plum tomatoes",
            "qty" : 2,
            "unit" : "",
            "_id" : "59d28ba65c594a6d78579a3e"
        }, 
        {
            "name" : "refrigerated crescent rolls",
            "qty" : 16,
            "unit" : "oz",
            "_id" : "59d28ba65c594a6d78579a3d"
        }, 
        {
            "name" : "rotisserie chicken",
            "qty" : 2,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a3c"
        }, 
        {
            "name" : "salsa",
            "qty" : 1,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a3b"
        }, 
        {
            "name" : "taco seasoning",
            "qty" : 1,
            "unit" : "Tbsp",
            "_id" : "59d28ba65c594a6d78579a3a"
        }, 
        {
            "name" : "tortilla chips",
            "qty" : 0.666666666666667,
            "unit" : "cup",
            "_id" : "59d28ba65c594a6d78579a39"
        }
    ],
    "instructions" : [ 
        {
            "number" : 1,
            "step" : "Grease a 12-in. pizza pan. Unroll crescent dough. Sprinkle with 1/4 cup tortilla chips; press down gently. Separate into 16 triangles.",
            "_id" : "59d28ba65c594a6d78579a4b"
        }, 
        {
            "number" : 2,
            "step" : "Place wide end of one triangle, chip side down, 3 in. from edge of prepared pan, with point overhanging edge of pan. Repeat with remaining triangles, overlapping the wide ends (dough will look like a sun when complete. Lightly press wide ends together.",
            "_id" : "59d28ba65c594a6d78579a4a"
        }, 
        {
            "number" : 3,
            "step" : "In a small bowl, combine the chicken, cheese, mayonnaise, chilies, olives, tomato, taco seasoning, lime juice and remaining tortilla chips. Spoon over wide ends of dough. Fold points of triangles over filling and tuck under wide ends (filling will be visible.",
            "_id" : "59d28ba65c594a6d78579a49"
        }, 
        {
            "number" : 4,
            "step" : "Bake at 375° for 20-25 minutes or until golden brown.",
            "_id" : "59d28ba65c594a6d78579a48"
        }, 
        {
            "number" : 5,
            "step" : "Garnish with sour cream, salsa, tomatoes and lime.",
            "_id" : "59d28ba65c594a6d78579a47"
        }
    ],
    "__v" : 0
  }
]

class AddIngredients extends Component {
  state = {
    ingredients: [],
    ingredient: ""
  };
    componentDidMount() {
      localStorage.clear();
      localStorage.setItem("recipes", JSON.stringify(recipes));
      console.log("Set local storage to recipes array")
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
