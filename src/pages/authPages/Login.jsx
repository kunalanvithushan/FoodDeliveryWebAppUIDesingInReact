import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook
import { openResetPasswordPopup } from "../authPages/ResetPasswordCustomer";  
import "../authPages/StyleSheet/Login.css";
//import { openRegisterPopup } from "../authPages/CustomerRegister";
import { openStaffLoginPopup } from "../authPages/StaffLogin";

const MySwal = withReactContent(Swal);

const LoginForm = ({ onRegisterClick, onStaffLoginClick, onResetPasswordClick }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-controlL"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
              <div className="lock" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
                    <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
                    <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="buttonLogin">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account?{" "}
            <button className="btn btn-link p-0" onClick={onRegisterClick}>
              Register
            </button>
          </p>
          <p>Are you staff?{" "}
            <button className="btn btn-link p-0" onClick={onStaffLoginClick}>
              Staff Login
            </button>
          </p>
          <p>Forgot your password?{" "}
            <button className="btn btn-link p-0" onClick={onResetPasswordClick}>
              Reset Password
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// openLoginPopup Function
export const openLoginPopup = () => {
  const navigate = useNavigate();

  const handleResetPasswordClick = () => {
    console.log("Reset Password clicked");
    MySwal.close();
    openResetPasswordPopup();
  };

  const handleRegisterClick = () => {
    console.log("Register");
    MySwal.close();
   navigate('/customer-register');
  };

  const handleStaffLoginClick = () => {
    console.log("Register");
    MySwal.close();
    openStaffLoginPopup();
  };

  console.log("openLoginPopup called");

   useEffect(() => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: (
      <div>
        <LoginForm
          onRegisterClick={handleRegisterClick}
          onStaffLoginClick={handleStaffLoginClick}
          onResetPasswordClick={handleResetPasswordClick}
        />
      </div>
    ),
    customClass: {
      popup: "responsive-login-popup",
    },
    showClass: {
      popup: ' animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeInUp',
    },
    didOpen: (popup) => {
      const closeButton = popup.querySelector(".swal2-close");
      closeButton.addEventListener("click", () => {
        popup.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => {
          MySwal.close();
          navigate('/');  
        }, 500); 
      });
    },
  });  }, []);
};
export default openLoginPopup;
