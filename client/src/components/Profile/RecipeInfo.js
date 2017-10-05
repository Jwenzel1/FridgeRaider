import React, {Component} from "react";
import ReactDOM from "react";
import { Button, Modal, ButtonToolbar, Thumbnail } from 'react-bootstrap';
import StarButton from "../Main/StarButton";


 export class DisplayRecipe extends Component {
    state = {
     lgShow: false,
    }

    render() {
      let lgClose = () => this.setState({ lgShow: false });

      return (
        <div>
             <StarButton/>
          <div bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
            <Button bsStyle="success">See Recipe</Button>

          </div>
          <RecipeInfo 
          show={this.state.lgShow} 
          onHide={lgClose} 
          title={this.props.title}
          instructions={this.props.instructions}
          ingredients={this.props.ingredients}
          image={this.props.image}
          />
        </div>  
  )
 } 
} 

  class RecipeInfo extends Component {

 componentDidMount(){
    console.log(this.props.ingredients)
    console.log(this.props.instructions)
    }

render(){
  return(
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Thumbnail src={this.props.image} alt="50x50" style={{width:150, height:100}} className="row">
            </Thumbnail>
            <Modal.Title className="row" id="contained-modal-title-lg"><strong>{this.props.title}</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <strong>Ingredients:</strong>
              {this.props.ingredients.map((ingredient) => (<li> {ingredient.qty} {ingredient.unit} {ingredient.name} </li>))}
              <p></p>   
              <strong>Instructions:</strong>      
             {this.props.instructions.map((instruction) => ( <div> {instruction.number}) {instruction.step}</div>))}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} style={{float:"bottom"}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}    

 export default DisplayRecipe;