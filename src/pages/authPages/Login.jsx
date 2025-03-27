import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook
import "../authPages/StyleSheet/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const MySwal = withReactContent(Swal);

const LoginForm = ({ onRegisterClick, onStaffLoginClick, onResetPasswordClick }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
            <div style={{ position: 'relative' }}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', fontSize: '16px', width: '100%' }}
                required
              />
              <button type="button" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <button type="submit" className="buttonLogin">
            
            
            Login</button>
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
export const OpenLoginPopup = () => {
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
    navigate('/Staff-login');
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
export default OpenLoginPopup;
