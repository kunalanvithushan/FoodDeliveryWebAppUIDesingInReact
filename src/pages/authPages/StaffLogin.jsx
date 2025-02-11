import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../pages/authPages/StyleSheet/StaffLogin.css"; // Assuming you have custom CSS for styling
import {openStaffResetPasswordPopup} from "../authPages/StaffResetPassword"
const MySwal = withReactContent(Swal);

const StaffLoginForm = ({onStaffResetPasswordPopup}) => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 const togglePasswordVisibility = () => {
  setIsPasswordVisible((prevState) => !prevState);
};
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic here
    if (username && password) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome, ${username}!`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please enter your username and password.",
      });
    }
  };

  return (
    <div className="beforeStaffLogin-container">
      <h2 className="beforeStaffLogin-text-center">Staff Login</h2>
      <form onSubmit={handleLoginSubmit}>
        {/* Role Selection Field */}
        <div className="beforeStaffLogin-form-group">
          <label htmlFor="role">Select Role</label>
          <select
            className="beforeStaffLogin-form-control"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">-- Select Role --</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        {/* Username Field */}
        <div className=" beforeStaffLogin-form-group">
          <label   >Username</label>
          <input
            type="text"
            className="beforeStaffLogin-form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Password Field */}
        
<label htmlFor="password">Password</label>
<div className="input-container">
  <input
    type={isPasswordVisible ? "text" : "password"}
    className="form-control"
    id="password"
    placeholder="Enter your password"
    required
  />
  <div
    className="lock"
    onClick={togglePasswordVisibility}
  >
    {isPasswordVisible ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="20"
        height="20"
        fill="currentColor"
      >
        {/* Eye Slash Icon */}
        <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="20"
        height="20"
        fill="currentColor"
      >
        {/* Eye Icon */}
        <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z" />
      </svg>
    )}
  </div>
</div>
        {/* Submit Button */}
        <button type="submit" className="beforeStaffLogin-btn ">
          Login
        </button>
      </form>

      {/* Forgot Password Link */}
      <div className="">
        <p>
          Forgot your password?{" "}
          <a href="#" className="beforeStaffLogin-text-centerlink" onClick={ onStaffResetPasswordPopup}>
            Reset Password
          </a>
        </p>
      </div>
    </div>
  );
};

export const openStaffLoginPopup = () => {
 const handleStaffResetPasswordClick = () => {
    console.log("Register");
    MySwal.close();
    openStaffResetPasswordPopup()
  };

  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: <StaffLoginForm 
    
    onStaffResetPasswordPopup={handleStaffResetPasswordClick}
    
    />,
    customClass: {
      popup: "responsive-staff-login-popup",
    }, showClass: {
      popup: ' animate__animated animate__fadeInDown',  
    },
    hideClass: {
      popup: 'animate__animated animate__fadeInUp',  
    },   didOpen: (popup) => {
     
      const closeButton = popup.querySelector(".swal2-close");
      closeButton.addEventListener("click", () => {
         
        popup.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => MySwal.close(), 500); // Delay to allow the animation to complete
      });
    },
    width: "600px",
  });
};
