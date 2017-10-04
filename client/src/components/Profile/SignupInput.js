import React from "react";
import API from "../utils/API"
import { Button, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

export const SignupInput = React.createClass({

  press(){
    API.checkLoginStatus();
  },

 render(){
  return(
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Confirm Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Confirm Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button href="/profile" type="submit" onClick={this.press}>
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>
  )
 }
});

export default SignupInput;
