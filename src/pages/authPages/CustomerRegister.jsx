import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../pages/authPages/StyleSheet/CustomerRegister.css";
import { useNavigate } from "react-router-dom";
import BaseURL from "../../../config";
import {showErrorToast} from '../../utils/toastNotifications.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const MySwal = withReactContent(Swal);

const RegisterForm = ({ handleRegisterSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState('');
  const APIUrl = BaseURL.API_BASE_URL;
  const [loading, setLoading] = useState(false);
  // password visibility toggle
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
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
    e.preventDefault();
    setLoading(true);  
    if (validateInputs()) {
      const formData = { username, password, email, phone_no, confirm_password };
      handleRegisterSubmit(e, formData, setLoading);  
    } else {
      setLoading(false);  
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
            <div style={{ position: 'relative' }}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control ${errors.password ? "border-red-500 text-red-700" : "border-gray-300"} shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                placeholder={errors.password || "Enter your password"}
                required
              />
              <button type="button" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="form-control"
                id="ConfirmedPassword"
                placeholder="Enter your password"
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="button" onClick={toggleConfirmPasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEyeSlash : faEye} />
              </button>
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

const OpenRegisterPopup = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const handleRegisterSubmit = async (e, formData,setLoading) => {
    e.preventDefault();
    console.log(formData)
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
        const user_id = result.data?.user_id;
        console.log(user_id)
        if (!user_id) {
          showErrorToast("something went wrong try again!");
          return;
        }
        console.log(user_id);
        navigate(`/verify-otp/${user_id}`);
      } else {
        showErrorToast(result.meta?.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
       setLoading(false);
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




export default OpenRegisterPopup;
