import React from 'react'

const NewPassword = () => {
    return (
        <div className="container-fluid">
        <form className="form-container">

            <h2 align="center">New Password</h2>

            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter New Password"></input>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password"></input>
            </div>

            <button type="submit" className="btn btn-info">Send</button>


        </form>
        </div>
    )
}

export default NewPassword
