import React, {Component} from "react";
import {Grid, Row, Col, Thumbnail, Button, Panel} from "react-bootstrap";
import DisplayRecipeInfo from "../Profile/RecipeInfo";

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


class DisplayFavoriteRecipes extends Component {
state = {
  recipes
}

 componentDidMount(){
      
    }
  render() {
    return (

  
  <Panel collapsible defaultExpanded header="Favorite Recipes">  
    <Grid>
    <Row>
    {this.state.recipes.map(recipe => (
    <Col xs={4}>
      <Thumbnail src={recipe.image} alt="100x100">
        <p>{recipe.title}</p>
        <p>
          <DisplayRecipeInfo
          title={recipe.title}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          image={recipe.image}
          />
        </p>
      </Thumbnail>
    </Col>
    ))}
    </Row> 
   </Grid>
  </Panel>
  )
  }

 } 
 


export default DisplayFavoriteRecipes;