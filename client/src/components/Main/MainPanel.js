import React from "react";
import {Panel, FormExample, ListGroup, ListGroupItem} from "react-bootstrap";
import AddIngredients from "./AddIngredients"; 
import Buttons from "./Buttons";

const MainPanel = React.createClass({
  render(){
    return(
  <Panel collapsible defaultExpanded header="Add Ingredients">
    <AddIngredients />
    <ListGroup fill>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>&hellip;</ListGroupItem>
    </ListGroup>
    <Buttons/>
  </Panel>
)
}
});

export default MainPanel;