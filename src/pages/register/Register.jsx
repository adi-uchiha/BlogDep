import React from 'react'
import {Link} from 'react-router-dom'
import './register.css'
export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" className='registerInput' placeholder="Enter Username"/>
            <label>Email</label>
            <input type="Email" className='registerInput' placeholder="Enter Email"/>
            <label>Password</label>
            <input type="Password" className='registerInput' placeholder="Enter password" />
            <button className="registerButton">Register</button>

        </form>
        <button className="registerLoginButton">
          <Link to="/login"className='link' >Login</Link>
        </button>
    </div>
  )
}
