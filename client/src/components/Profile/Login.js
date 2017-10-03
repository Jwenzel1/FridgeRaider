import React from "react";
import ReactDOM from "react";
import { Popover, Button, Modal, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import FormInstance from "./Input"

export const popoverClickRootClose = (
  <Popover id="popover-trigger-click-root-close" title="Popover bottom">
    <strong>Holy guacamole!</strong> 
    <p>Spicy jalapeno bacon ipsum dolor amet picanha magna frankfurter pork chop est biltong. Nulla id bacon, ea ad short ribs ribeye bresaola ground round. Doner alcatra ullamco cillum dolor voluptate venison jerky occaecat meatloaf non. Cupim in adipisicing, velit ad veniam meatball kevin jerky prosciutto sint porchetta. Elit id tail, aliquip nisi flank ham hock. Shankle non short loin turkey. Aliquip exercitation sed tail eiusmod in venison anim pastrami cupidatat shoulder.</p>
  </Popover>
);

<OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
  <Button>Click w/rootClose</Button>
</OverlayTrigger>

  export const MyLargeModal = React.createClass({
    render() {
      return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormInstance />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  });

 export const Login = React.createClass({
    getInitialState() {
      return { smShow: false, lgShow: false };
    },
    render() {
      let lgClose = () => this.setState({ lgShow: false });

      return (
        <div>
          <div bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
            Sign Up
          </div>
          
          <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
        </div>  
        
      );
    }
  });

 export default Login;