import React, {Component} from "react";
import ReactDOM from "react";
import { Popover, Button, Modal, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import SignupInput from "./SignupInput"


  export class SignupModal extends Component {
    render() {
      return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignupInput />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };

 export class Signup extends Component {
      state = {
        lgShow: false
      };
    render() {
      let lgClose = () => this.setState({ lgShow: false });

      return (
        <div>
          <div bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
            Sign Up
          </div>
          
          <SignupModal show={this.state.lgShow} onHide={lgClose} />
        </div>  
        
      );
    }
  };

 export default Signup;