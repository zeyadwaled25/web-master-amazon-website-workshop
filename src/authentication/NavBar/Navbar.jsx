import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-black">
  <div className="container">
    <NavLink className="navbar-brand text-white" to="home">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-white" aria-current="page" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="Register">Register</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar