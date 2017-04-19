import React, {Component} from 'react';
import ModalShow from './ModalShow';
import ModalGen from './ModalGen'

class CourseItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      shows: false
    }
  }

  onClick = () => {
    this.setState({show: !this.state.show})
  }
  onEdit = () => {
    this.setState({shows: !this.state.shows, show: !this.state.show})
  }


  renderEditModal = () => {
    console.log(`courseItem renderEditModal ${JSON.stringify(this.props.course)} onChange: ${this.props.onChange}`)
    console.log(`courseItem renderEditModal  onChange: ${this.props.addStudent}`)
    return (
      <ModalGen
        addStudent={this.props.addStudent}
        onChange={this.props.onChange}
        onClick={this.onClick}
        onEdit={this.onEdit}
        students={this.props.course.students}
        coaches={this.props.course.coaches}
        info={this.props.course.info}
        title={this.props.course.title}
        id={this.props.course._id}
        header='Update'
        footer='Add Course'
      />
    )
  }

  renderInfoModal = () => {
    return (
      <ModalShow
        onEdit={this.onEdit}
        onDelete={() => this.props.onDelete(this.props.course._id)}
        onClick={this.onClick}
        header='Course descrition'
        students={this.props.course.students}
        coaches={this.props.course.coaches}
        info={this.props.course.info}
        title={this.props.course.title}
        footer1='edit'
        footer2='delete'
      />
    )
  }

  render() {
    return (
      <div>
        <div className='CourseItem-box'>
          <h4 onClick={this.onClick} className='CourseItem-box-title'>{this.props.course.title}</h4>
        </div>
        {
          this.state.show ? this.renderInfoModal() : null
        }
        {
          this.state.shows ? this.renderEditModal() : null
        }
      </div>
    )
  }

}
export default CourseItem;
