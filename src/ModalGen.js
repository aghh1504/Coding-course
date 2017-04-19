import React,  { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class  ModalGen extends Component  {

  onChange = (e) => {
    console.log(`ModelGen onChange ${e.target} ${this.props.id}`)
    this.props.onChange(e, this.props.id)
  }
  onClick = (e) => {
    this.props.onClick(e)
  }
  onSubmit = (e) => {
    this.props.onSubmit(e)
  }
  addStudent = (e) => {
    this.props.addStudent(e)
  }
  addCoach = (e) => {
    this.props.addCoach(e)
  }
  render() {
    console.log('props in modalInstance',this.props.students)
  return (
    <Modal.Dialog >
        <Modal.Header>
            <Modal.Title>{this.props.header}</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.onSubmit} id={this.props.id}>
            <Modal.Body>
                <h4>Name of Course</h4>
                <input value={this.props.title} name="title" onChange={this.onChange} className="form-control"/>
                <h4>Info</h4>
                <textarea value={this.props.info} name="info" onChange={this.onChange} placeholder="Add short info" className="form-control"/>
                <h4>Students Names</h4>
                <input value={this.props.student} name="student" onChange={this.onChange} placeholder="Add students names seperated by commas" className="form-control"/>
                  <Button onClick={this.addStudent}>Add</Button>
                  <ul>
                    {
                      this.props.students.map((student, i) => <li key={i}>{student}</li>)
                    }
                  </ul>
                <h4>Coaches Names</h4>
                <input value={this.props.coach} name="coach" onChange={this.onChange} placeholder="Add coaches names seperated by commas" className="form-control"/>
                <Button onClick={this.addCoach}>Add</Button>
                <ul>
                  {
                    this.props.coaches.map((coach, i) => <li key={i}>{coach}</li>)
                  }
                </ul>
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
