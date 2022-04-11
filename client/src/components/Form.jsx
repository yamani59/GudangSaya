import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.formHandler = this.formHandler.bind(this)
  }

  formHandler(e) {
    e.preventDefault()
    let data = {}

    if (this.props.parrent == 'login')
      data = {
        username: e.target.username.value,
        password: e.target.password.value
      }
    if (this.props.parrent == 'register')
      data = {
        name: e.target.name.value,
        email: e.target.email.value,
        role: e.target.role.value,
        password: e.target.password.value
      }

    this.props.handlePost(data)
  }

  // isi props input {type}
  render() {
    return (
    <div className="form-wrapper">
      <form onSubmit={this.formHandler}
        className="
          p-3
          flex
          flex-col
          justify-center
          drop-shadow-lg
        ">
        {this.props.inputs.map(
          i => (
            <input 
              id={i.name}
              type={i.type} 
              name={i.name} 
              autoComplete="off"
              value={i.value && i.value}
              placeholder={i.name}
              key={i.name}
              className="
                m-2
                block 
                w-full
                rounded-md 
                p-2
                focus:outline-none 
                focus:border-sky-500 
                focus:ring-sky-500 
                focus:ring-1
                focus:ring-yellow-600" />
          )
        )}
        <input type="submit" value="Send" className="
          bg-zinc-800
          block
          m-2
          p-3
          w-full
          rounded-md
          text-white
          hover:bg-yellow-600
        " />
      </form>
    </div>
    )
  }
}

export default Form