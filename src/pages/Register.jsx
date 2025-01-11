import React from 'react';
import "./Register.css";

const Register = () => {
    return (
        <form class="form-container">

            <h4 align="center">Sign Up</h4>
            <div class="mb-3">
                <input type="text" class="form-control"  placeholder="Enter your Name"></input>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email"></input>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your Password"></input>
            </div>
            <button align="center" type="submit" class="btn btn-info mx-4">Sign Up</button>
            <br />
            <p align="center">Already have an account? <a href="">Login</a></p>
        </form>
    )
}

export default Register
