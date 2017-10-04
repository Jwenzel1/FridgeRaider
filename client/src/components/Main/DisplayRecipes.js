import React, {Component} from "react";
import {Grid, Row, Col, Thumbnail, Button, Panel} from "react-bootstrap";
import DisplayRecipeInfo from "../Profile/RecipeInfo";

class DisplayRecipes extends Component {

render(){
 return(
  <Panel collapsible defaultExpanded header="Generated Recipes">
        <Grid>
    <Row className= "rightSide">
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipeInfo />
        </p>
      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipeInfo />
        </p>
      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipeInfo />

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
          <DisplayRecipeInfo />
        </p>
      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipeInfo />
        </p>
      </Thumbnail>
    </Col>
    <Col xs={4} md={2}>
      <Thumbnail src="./strawberry.jpg" alt="100x100">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <DisplayRecipeInfo />

        </p>
      </Thumbnail>
    </Col>
    </Row>
   </Grid>
  </Panel>

      )
  }
}

export default DisplayRecipes;
