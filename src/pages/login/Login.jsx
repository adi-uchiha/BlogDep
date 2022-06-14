import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'
export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="Email" className='loginInput' placeholder="Enter Email"/>
            <label>Password</label>
            <input type="Password" className='loginInput' placeholder="Enter password" />
            <button className="loginButton">Login</button>

        </form>
        <button className="loginRegisterButton">
          <Link to="/register"className='link'>Register</Link>
        </button>
    </div>
  )
}
