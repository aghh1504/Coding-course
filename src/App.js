import React, { Component } from 'react';
import './App.css';
import ModalGen from './ModalGen'
import CourseItem from './CourseItem'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      courses: [],
      students: [],
      coaches: [],
      info: '',
      title: ''
    }
  }

  componentDidMount() {
    axios
      .get('/course')
      .then(response => {
        this.setState({courses: [...response.data]})
      })
      .catch(err => console.log(err))
  }

  onClick = () => {
    this.setState({show: !this.state.show})
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  addNewCourse = (e) => {
    const course = {
      title: this.state.title,
      info: this.state.info,
      students: this.state.students,
      coaches: this.state.coaches
    }
    axios
      .post('/course', course)
      .then(response => {
        console.log('response post', response);
        course.id = response.data.ops[0]._id;
        this.setState({courses: [...this.state.courses, course]})
      })
      .catch(err => console.log(err));
  }

  onDelete = (id) => {
    console.log('id on delete', id);
    axios
      .delete(`/course/${id}`)
      .then(response => {
        const courses = this.state.courses.filter(course => course._id !== id)
        this.setState({courses: courses})
  })
}

  renderAddModal = () => {
    return (
      <ModalGen
        onClick={this.onClick}
        onSubmit={this.addNewCourse}
        onChange={this.onChange}
        title={this.state.title}
        students={this.state.students}
        coaches={this.state.coaches}
        info={this.state.info}
        header='Add New Course'
        footer='Add Course'
      />
    )
  }

  render() {
    console.log('courses state', this.state.courses);
    return (
      <div className="App">
          {this.state.courses.map(course => <CourseItem course={course} onDelete={this.onDelete}/>)}
        <button className='btn btn-primary' onClick={this.onClick}>Add Course</button>

        {
          this.state.show ? this.renderAddModal() : null
        }
      </div>
    );
  }
}

export default App;
