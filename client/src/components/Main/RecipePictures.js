import React from "react";
import {Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";
import DisplayRecipe from "../Profile/RecipeInfo";

const RecipePicutres = React.createClass({

  render(){
    return(
        <Grid>
    <Row className= "rightSide">
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

      )
  }    
})

export default RecipePicutres;