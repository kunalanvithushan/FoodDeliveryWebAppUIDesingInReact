import React from 'react'

const Verification = () => {
    return (
        <form class="form-container">

            <h2 align="center">Verification</h2>
            <label for="exampleInputEmail1" class="form-label">Enter Verification Code</label>
            <div class="mb-3">
                <input type="number" class="form-control" placeholder="Enter your Verification Code"></input>
            </div>
            <p align="center">If you didn't receive a code, <a href="">Resend</a></p>
            <button align="center" type="submit" class="btn btn-primary">Send</button>


        </form>
    )
}

export default Verification
