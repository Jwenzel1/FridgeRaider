import React from "react";
import {Panel} from "react-bootstrap";
import RecipePictures from "./RecipePictures";

 const DisplayRecipes = React.createClass({
  render(){
    return(
  <Panel collapsible defaultExpanded header="Generated Recipes">
  	<RecipePictures/>
  </Panel>
)
}
});

 export default DisplayRecipes;