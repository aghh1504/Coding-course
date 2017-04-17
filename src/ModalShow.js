import React,  { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class  ModalShow extends Component  {

  onClick = (e) => {
    this.props.onClick(e)
  }

  render() {
    console.log('props in modalShow',this.props.students.map(student => <li>{student}</li>))
  return (
    <Modal.Dialog >
        <Modal.Header>
            <Modal.Title>{this.props.header}</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <p>{this.props.info}</p>
                <div className='modal-show-students'>
                  <h4>Students Names</h4>
                  <ul>
                  {
                    this.props.students.map(student => {
                      <li>{student}</li>
                    })
                  }
                 </ul>
                </div>
                <div className='modal-show-coaches'>
                  <h4>Coaches Names</h4>
                  <p>{this.props.coaches}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" onClick={this.onClick}>{this.props.footer1}</Button>
                <Button bsStyle="danger" onClick={this.onClick}>{this.props.footer2}</Button>
                <Button onClick={this.onClick} name='close'>Close</Button>
            </Modal.Footer>
    </Modal.Dialog>
  )
  }
};
