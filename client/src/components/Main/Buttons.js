import React, {Component} from "react";
import {Button, ButtonToolbar} from "react-bootstrap";

class Buttons extends Component {

render(){
  return(

  <ButtonToolbar>
    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Save Ingredients</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="info">Find Recipes</Button>
  </ButtonToolbar>
);
}

}

export default Buttons;