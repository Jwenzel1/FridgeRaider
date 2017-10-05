import React from "react";
import { Navbar, NavItem, NavDropdown, Nav, MenuItem, Panel } from 'react-bootstrap';
import Login from "../Profile/Login";
import Signup from "../Profile/Signup"

const StaticNavbar = React.createClass({
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
          <MenuItem eventKey={3.2}><Login /></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}><Signup /></MenuItem>
        </NavDropdown>
       </Nav>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
  )
}
});

export default StaticNavbar;




  
