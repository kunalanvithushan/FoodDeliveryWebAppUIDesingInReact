import React from 'react'

const ForgotPassword = () => {
    return (
        <form class="form-container">

            <h2 align="center">Forgot Password</h2>
            <label for="exampleInputEmail1" class="form-label">Enter your Email address</label>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"></input>
            </div>
            <p align="center">Back to <a href="">Sign Up</a></p>
            <button align="center" type="submit" class="btn btn-info mx-4">Send</button>


        </form>
    )
}

export default ForgotPassword
