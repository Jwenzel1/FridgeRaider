import React from "react";
import { Navbar, NavItem, NavDropdown, Nav, MenuItem, Panel, ListGroup, ListGroupItem, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import Login from "./Login"

export const NavbarInstance = React.createClass({
render(){
  return(
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">FridgeRaider</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
           <Nav>
        <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
          <MenuItem href="/" eventKey={3.1}>Home</MenuItem>
          <MenuItem href="/profile"eventKey={3.2}>My Profile</MenuItem>
          <MenuItem href="/profile"eventKey={3.3}>My Recipes</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}><Login /></MenuItem>
        </NavDropdown>
      </Nav>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
  )
}
});

export const PanelInstance = React.createClass({
  render(){
    return(
  <Panel collapsible defaultExpanded header="Add Ingredients">
    <FormExample />
    <ListGroup fill>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>&hellip;</ListGroupItem>
    </ListGroup>
    Some more panel content here.
  </Panel>
)
}
});


export const FormExample = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>This is the profile page!</HelpBlock>
        </FormGroup>
      </form>
    );
  }
});
  
