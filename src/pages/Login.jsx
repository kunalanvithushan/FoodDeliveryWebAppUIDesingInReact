import React from 'react';
import "./Login.css"

const Login = () => {
  return (

    <form className="form-container">
      <div className="mb-3">
        <h2 align="center">Login</h2>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email"></input>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your Password"></input>
      </div>
      <p className="ForgetPWD"><a href="">Forgot Password?</a></p>
      <button align="center" type="submit" className="btn btn-info mx-4">Login</button>
      <br />
      <p align="center" className='m-2'>Don't have an account? <a href="">SignUp</a></p>
    </form>

  )
}

export default Login
