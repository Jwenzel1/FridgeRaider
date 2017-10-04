import React, {Component} from "react";
import ReactDOM from "react";
import { Popover, Button, Modal, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import LoginInput from "./LoginInput"


  export class LoginModal extends Component {
    render() {
      return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginInput />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };

 export class Login extends Component {
      state = {
        lgShow: false
      };
    render() {
      let lgClose = () => this.setState({ lgShow: false });

      return (
        <div>
          <div bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
            My Profile
          </div>
          
          <LoginModal show={this.state.lgShow} onHide={lgClose} />
        </div>  
        
      );
    }
  };

 export default Login;