
import React, {Component} from "react";
import "./Starbtn.css";

{/* 1. change the state of one picture to another when clicked DONE

    2. handle on Click to run another function that will save the card info to Profile Page, (integrate back end)  */}

{/* creating component and constructor for saved button,   */}



class Toggle extends Component {

   state = {
    recipes: [],
    name: "",
    instructions: "",
    prepTime: ""
  }; 


  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));


  }
  

  render() {
    return (
      <button className="star-btn" onClick={this.handleClick}>
    
        {this.state.isToggleOn ? '☆' : '★'}

      </button>
    );
  }
}
export default Toggle;



