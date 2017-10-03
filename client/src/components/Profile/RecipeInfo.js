import React from "react";
import ReactDOM from "react";
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';


  export const RecipeInfo = React.createClass({
    render() {
      return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Recipe Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Spicy jalapeno bacon ipsum dolor amet pork jerky bresaola, 
            salami picanha pork belly corned beef chuck burgdoggen meatball 
            chicken spare ribs short ribs turducken. Kielbasa corned beef filet mignon
            bresaola beef prosciutto tri-tip ribeye pastrami meatball ham. 
            Ground round fatback ham spare ribs. Shank ribeye pancetta biltong, prosciutto cupim cow sausage pork belly.
            Salami frankfurter flank, kielbasa doner turducken t-bone shank rump pork loin sausage pork chop. 
            Porchetta meatloaf sausage filet mignon meatball pancetta rump tongue, cow tail sirloin boudin. 
            Cupim short ribs cow ground round meatball ham hock pork chop.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  });

 export const DisplayRecipe = React.createClass({
    getInitialState() {
      return { lgShow: false };
    },
    render() {
      let lgClose = () => this.setState({ lgShow: false });

      return (
        <div>
          <div bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
            <Button bsStyle="success">See Recipe</Button>
          </div>
          <RecipeInfo show={this.state.lgShow} onHide={lgClose} />
        </div>  
        
      );
    }
  });

 export default DisplayRecipe;