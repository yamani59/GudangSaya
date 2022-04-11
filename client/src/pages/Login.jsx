import React, { Component } from 'react'
import { Form } from '../components'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      token: window && localStorage.getItem('access_token')
    }

    this.login = this.login.bind(this)
  }

  login({username, password}) {
    axios.post('http://127.0.0.1:8000/api/v1/login', {
      username: username,
      password: password
    }).then(res => {
      if (window) {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('refresh_token', res.data.refresh_token)
      }
      this.setState({ token: res.data.access_token })
      swal({
        title: 'Good job!',
        text: 'You login',
        icon: 'success'
      })

    }).catch(err => {
      swal({
        title: 'Failed!!',
        text: 'You need register',
        icon: 'error'
      })
      console.log(err)
    })
  }

  render() {
    const inputs = [
        {type: 'email', name: 'username'},
        {type: 'password', name: 'password'}
      ] 

    return (
      <div className="component-wrapper flex flex-col justify-center items-center">

        {this.state.token && (<Navigate to="/dashboard" replace />)}
        
        <p className="title text-9xl p-4 font-normal">Login</p>
        <Form inputs={inputs} handlePost={this.login} parrent={'login'} />
        <p className="
          ml-4
        "><Link to="/">Back</Link></p>
      </div>
    )
  }
}

export default Login