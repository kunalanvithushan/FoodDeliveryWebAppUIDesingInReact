import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../pages/authPages/StyleSheet/CustomerRegister.css";
import { useNavigate } from "react-router-dom";
import BaseURL from "../../../config";
const MySwal = withReactContent(Swal);

const RegisterForm = ({ handleRegisterSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState('');
  const APIUrl = BaseURL.API_BASE_URL;
  const [loading, setLoading] = useState(false);
  // password visibility toggle
  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(prevState => !prevState);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      setPhoneNo(inputValue);
    }
  };



  const validateInputs = () => {
    let newErrors = [];
    if (phone_no.length !== 10) {
      newErrors.push("Phone number must be exactly 10 digits.");
    }
    if (password !== confirm_password) {
      newErrors.push("Passwords do not match.");
    }
    if (password.length < 8) {
      newErrors.push("Password must be at least 8 characters.");
    }
    if (!/[A-Z]/.test(password)) {
      newErrors.push("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      newErrors.push("Password must include at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      newErrors.push("Password must include at least one number.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.push("Password must include at least one special character.");
    }
     
    if (newErrors.length > 0) {
      setErrors(newErrors.join(" "));
      setTimeout(() => {
        setErrors(""); 
      }, 30000);
      return;
    }
    return newErrors.length === 0;
  };


  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (validateInputs()) {
      handleRegisterSubmit(e, { username, password, email, phone_no,confirm_password });
    }
  };

  return (
    <div className="CustomerRegisterregister-container">
      <div className="CustomerRegister-cardC">
        <h2 className="CustomerRegistercustomerh2">Register</h2>
        <form
          className="CustomerRegister-R_form-group"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="CustomerRegisterform-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control ${errors.password ? "border-red-500 text-red-700" : "border-gray-300"} shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                placeholder={errors.password || "Enter your password"}
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

          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <div className="input-container">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="form-control"
                id="ConfirmedPassword"
                placeholder="Enter your password"
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="lock" onClick={toggleConfirmPasswordVisibility}>
                {isConfirmPasswordVisible ? (
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

          <div className="CustomerRegister-R_form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="CustomerRegisterform-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="CustomerRegister-R_form-group">
            <label htmlFor="phone_no">Phone Number</label>
            <input
              type="text"
              className="CustomerRegisterform-control"
              id="phone_no"
              placeholder="Enter your phone number"
              value={phone_no}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="CustomerRegister-btn-primaryR" disabled={loading}>
            {loading ? <span className="loader"></span> : "Verify"}
          </button>
        </form>

        <label
          htmlFor="password"
          className={`error ${errors ? "visible" : "hidden"}`}
        >
          {errors || ""}
        </label>
      </div>
    </div>
  );
};

const openRegisterPopup = () => {
  const navigate = useNavigate();
  const handleRegisterSubmit = async (e, formData) => {
    e.preventDefault();
  
    
  
    const APIUrl = BaseURL.API_BASE_URL;
    try {
      const response = await fetch(`${APIUrl}/auth/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
  
      if (response.ok && result.status) {
        const userId = result.data?.user_id;
        if (!userId) {
          console.error("User ID is missing in response!");
          return;
        }
        navigate(`/otp-verification/${userId}`);
      } else {
        console.error("Error:", result.meta?.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
    finally {
      formData.setLoading(false);  
    }
  };
  useEffect(() => {
    MySwal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      html: <RegisterForm handleRegisterSubmit={handleRegisterSubmit} />,
      customClass: {
        popup: "responsive-register-popup",
      },
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeInUp",
      },
      width: "600px",
      height: "600px",
      didOpen: (popup) => {
        const closeButton = popup.querySelector(".swal2-close");
        closeButton.addEventListener("click", () => {
          popup.classList.add("animate__animated", "animate__fadeOut");
          setTimeout(() => { MySwal.close(), navigate('/'); }, 500);
        });
      },
    });
  }, []);
};

 


export default openRegisterPopup;
