import React, {Component} from "react";
import {Grid, Row, Col, Thumbnail, Button, Panel} from "react-bootstrap";
import DisplayRecipeInfo from "../Profile/RecipeInfo";
import StarButton from "./StarButton";



class DisplayRecipes extends Component {
  state = {
    recipes:[],
    id: "",
  }

componentDidMount() {
    let recipes = localStorage.getItem("recipes")
    console.log(typeof(recipes));
    recipes = JSON.parse(recipes);
    this.setState({recipes:recipes});
    
}

  render() {
    return (
  
  <Panel collapsible defaultExpanded header="Generated Recipes">  
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
 


export default DisplayRecipes;