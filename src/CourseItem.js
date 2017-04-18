import React, {Component} from 'react';
import ModalShow from './ModalShow';
import axios from 'axios';

class CourseItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  onClick = () => {
    this.setState({show: !this.state.show})
  }


  renderInfoModal = () => {
    const students = this.props.students ? this.props.course.students.split(",") : []
    const coaches = this.props.coaches ? this.props.course.coaches.split(",") : []
    return (
      <ModalShow
        onDelete={() => this.props.onDelete(this.props.course._id)}
        onClick={this.onClick}
        header='Course descrition'
        students={students}
        coaches={coaches}
        info={this.props.course.info}
        footer1='edit'
        footer2='delete'
      />
    )
  }

  render() {
    return(
      <div>
        <div className='CourseItem-box'>
          <h4 onClick={this.onClick} className='CourseItem-box-title'>{this.props.course.title}</h4>
        </div>
        {
          this.state.show ? this.renderInfoModal() : null
        }
      </div>
    )
  }

}
export default CourseItem;
