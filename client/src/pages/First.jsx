import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div className="App flex justify-center items-center">
        <div className="wrapper">
          <div className="title">
            <p className="
              text-9xl
              underline
              underline-offset-0
              text-zinc-800
              pb-3
            ">
              Gudang Saya
            </p>
          </div>
          <div className="
            navbar
            flex
            align-middle
            m-2
          ">
            <p className="text-4xl text-zinc-800 hover:text-yellow-600 mr-3"><Link to="/login">Login</Link></p>
            <p className="text-4xl text-zinc-800 hover:text-yellow-600"><Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
  )
}

export default First;
