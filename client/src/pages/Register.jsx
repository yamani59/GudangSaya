import React, { Component } from 'react'
import { Form } from '../components'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

class Register extends Component {
  constructor(props) {
    super(props)

    
    this.register = this.register.bind(this)
  }

  register({name, email, password, role}) {
    axios.post('http://127.0.0.1:8000/api/v1/register', {
      name: name,
      email: email, 
      role: role, 
      password: password
    }).then(res => {
      swal({
        title: 'Good job!',
        text: 'Register success ' . res.data.name,
        icon: 'success'
      })
      window.location = 'http://localhost:3000/'
    }).catch(err => {
      swal({
        title: 'Failed',
        text: 'Failed to register',
        icon: 'error'
      })
      console.log(err)
    })
  }

  render() {
    const inputs = [
        {type: 'text', name: 'name'},
        {type: 'email', name: 'email'},
        {type: 'password', name: 'password'},
        {type: 'text', name: 'role'}
      ] 

    return (
      <div className="component-wrapper flex flex-col justify-center items-center">
        <p className="title text-9xl text-center p-4 font-normal">Register</p>
        <Form inputs={inputs} handlePost={this.register} parrent='register' />
        <p className="
          ml-4
        "><Link to="/">Back</Link></p>
      </div>
    )
  }
}

export default Register