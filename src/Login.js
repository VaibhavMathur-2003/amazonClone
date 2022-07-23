import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <div className='loginImage'>
            <img src="https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png" alt="" />
        </div>
        <div className="signIn">
            <h2>Sign In</h2>
            <span>Enter E-mail</span>
            <input type="" />
            <span>Password</span>
            <input type="text" />
        </div>
        <div className='createAccount'>
        <button type="button" className="btn btn-warning">
            Create Account
          </button>
        </div>
    </div>
  )
}
