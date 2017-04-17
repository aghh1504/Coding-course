import React,  { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class  ModalGen extends Component  {

  onChange = (e) => {
    this.props.onChange(e)
  }
  onClick = (e) => {
    this.props.onClick(e)
  }
  onSubmit = (e) => {
    this.props.onSubmit(e)
  }
  render() {
    console.log('props in modalInstance',this.props)
  return (
    <Modal.Dialog >
        <Modal.Header>
            <Modal.Title>{this.props.header}</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.onSubmit} id={this.props.id}>
            <Modal.Body>
                <h2>Name of Course</h2>
                <input value={this.props.title} name="title" onChange={this.props.onChange}/>
                <h2>Info</h2>
                <textarea value={this.props.info} name="info" onChange={this.onChange} placeholder="Add short info" className="form-control"/>
                <h2>Students Names</h2>
                <input value={this.props.students} name="students" onChange={this.onChange} placeholder="Add students names seperated by commas" className="form-control"/>
                <h2>Coaches Names</h2>
                <input value={this.props.coaches} name="coaches" onChange={this.onChange} placeholder="Add coaches names seperated by commas" className="form-control"/>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" type="submit">{this.props.footer}</Button>
                <Button onClick={this.onClick} name='close'>Close</Button>
            </Modal.Footer>
        </form>
    </Modal.Dialog>
  )
  }
};
