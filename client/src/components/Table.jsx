import React, { Component } from 'react'

class Table extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <table className="table">
      <tr>
        {this.props.headers.map(
          header => (<th>{ header }</th>)
        )}
      </tr>
      {this.props.datas.map(
        data => (
          <tr>
            <td>{ data.id }</td>
            <td>{ data.name }</td>
          </tr>
        )
      )}
    </table>
    )
  }
}

export default Table