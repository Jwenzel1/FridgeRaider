import React from "react";
import {Button, ButtonToolbar} from "react-bootstrap";

const Buttons = React.createClass({

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

})

export default Buttons;