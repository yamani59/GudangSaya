import axios from 'axios'
import React, { Component, StrictMode } from 'react'
import { Navigate } from 'react-router-dom'
import { Table } from '../components'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: window && localStorage.getItem('access_token'),
      datas: {}
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/v1/product', {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({datas: data})
      })
  }


  render() {
    const headTable = ['no', 'product']
    return (
      <StrictMode>
      <div className="App">

        {!this.state.token && (<Navigate to="/" replace />)}

        <Table header={headTable} datas={this.state.datas} />

      </div>
      </StrictMode>
    )
  }
}

export default Dashboard