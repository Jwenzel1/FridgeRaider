import React from "react";
import {Panel, Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";
import DisplayRecipe from "./RecipeInfo";

 const DisplayFavoriteRecipes = React.createClass({
  render(){
    return(
  <Panel collapsible defaultExpanded header="Favorite Recipes">
  	<Grid>
    <Row className= "rightSide">
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>ProfilePic</h3>

        <p> Profile Description</p>
      

          <DisplayRecipe />

      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipe />
        </p>
      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipe />

        </p>
      </Thumbnail>
    </Col>
    </Row>
    <Row>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipe />
        </p>
      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipe />
        </p>
      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipe />

        </p>
      </Thumbnail>
    </Col>
    </Row>    
  </Grid>
  	
  </Panel>
)
}
});

 export default DisplayFavoriteRecipes;