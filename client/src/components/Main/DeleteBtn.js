import React from "react";
import {Button} from "react-bootstrap";
import "./Deletebtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (

  <span className="delete-btn">
  	<button className="ingredient-delete" {...props}>
    ✖
    </button>
  </span>
);

export default DeleteBtn;
