import React,  { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class  ModalShow extends Component  {

  onClick = (e) => {
    this.props.onClick(e)
  }
  onDelete = (e) => {
    this.props.onDelete(e)
  }
  onEdit = (e) => {
     this.props.onEdit(e)
  }



  render() {
    console.log('modalshow', this.props.students);
  return (
    <Modal.Dialog >
        <Modal.Header>
            <Modal.Title>{this.props.header}</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <p>{this.props.info}</p>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <div className='modal-show-students'>
                        <h4>Students</h4>
                        <ul>
                        {
                          this.props.students.map((student, i) => {
                            return <li key={i}>{student}</li>
                          })
                        }
                       </ul>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className='modal-show-coaches'>
                        <h4>Coaches</h4>
                        <ul>
                        {
                          this.props.coaches.map((coach, i) => {
                            return <li key={i}>{coach}</li>
                          })
                        }
                       </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" onClick={this.onEdit}>{this.props.footer1}</Button>
                <Button bsStyle="danger" onClick={this.onDelete}>{this.props.footer2}</Button>
                <Button onClick={this.onClick} name='close'>Close</Button>
            </Modal.Footer>
    </Modal.Dialog>

  )
  }
};
