import React, { useState,useEffect, useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../pages/authPages/StyleSheet/StaffLogin.css"; // Assuming you have custom CSS for styling
import {openStaffResetPasswordPopup} from "../authPages/StaffResetPassword"
const MySwal = withReactContent(Swal);
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {showErrorToast,showWarningToast,showSuccessToast} from '../../utils/toastNotifications'
import BaseURL from "../../../config";
import  AuthContext  from "../../context/AuthContext";
 


const StaffLoginForm = ({onStaffResetPasswordPopup,verifyStaffAccount,navigate,setAuth}) => {
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 const [loading, setLoading] = useState(false);
 const APIUrl = BaseURL.API_BASE_URL;



 useEffect(() => {
  const fetchRoles = async () => {
    try {
      const response = await fetch(`${APIUrl}/getall_role`);  
      const result = await response.json();
      if (result.status && result.data) {
        setRoles(result.data);  
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  fetchRoles();
}, []);
 const togglePasswordVisibility = () => {
  setIsPasswordVisible((prevState) => !prevState);
};


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log('Submitting form with values:', { username, password, role });
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
    if (!username || !password || !role) {
      showWarningToast('Please fill in all fields.');
      setLoading(false);
      return;
    }
    if (!username) {
      showWarningToast('Username is required.');
      setLoading(false);
      return;
    }
    if (!password) {
      showWarningToast('Password is required.');
      setLoading(false);
      return;
    }
    if (!role) {
      showWarningToast('Role is required.');
      setLoading(false);
      return;
    }
  
   
    const formData = { email: username, password, type: role };

    try {
      const response = await fetch(`${APIUrl}/auth/systemstaff_login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      console.log('Response Status:', response.status);
      const data = await response.json(); // Convert response to JSON
      console.log('Response Data:', data); // Log the response data
  
      if (!response.ok) {
        // Handle different error messages
        if (data.error?.statusCode === 404) {
          showErrorToast("SystemStaff not found");
        } else if (data.error?.statusCode === 400) {
          showErrorToast("Wrong username or password");
        } else {
          showErrorToast(data.meta?.message || "Login failed");
        }
        return;
      }
      if (data.status) {
        showSuccessToast("Login successful");
        console.log("User Data:", data.data.token);
        setAuth({username,password,roles:data.data.role,accessToken:data.data.token})  
        localStorage.setItem("token",data.data.token);
        navigate("/admin-dash-board");
      }
    } catch (error) {
      console.error("Error during login:", error);  
      showErrorToast("An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false);
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
  <option value=""> </option>
  {roles.map((role, index) => (
    <option key={index} value={role}>{role}</option> // Using index as key since roles are strings
  ))}
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
<div style={{ position: 'relative' }}>
  <input type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-password" />
  <button type="button" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
    <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
  </button>
</div>
        {/* Submit Button */}
        <button type="submit" className="beforeStaffLogin-btn " disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>

      {/* Forgot Password Link */}
      <div className="">
        <p>
          Forgot your password?{" "}
          <a href="" className="beforeStaffLogin-text-centerlink" onClick={ onStaffResetPasswordPopup}>
            Reset Password
          </a>
        </p>
      </div>


      <div className="">
        <p>
           did you verify your account ?{" "}
          <a href="" className="beforeStaffLogin-text-centerlink" onClick={verifyStaffAccount}>
            verify
          </a>
        </p>
      </div>
    </div>
  );
};

const OpenStaffLoginPopup = () => {
  const navigate=useNavigate()
  const { setAuth } = useContext(AuthContext);
 const handleStaffResetPasswordClick = () => {
    console.log("Register");
    MySwal.close();
    openStaffResetPasswordPopup()
  };


  const HandleVerifyStaffAccount=()=>{

     navigate('/verify-staff-emails')
    MySwal.close();
     
  }
  useEffect(() => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: <StaffLoginForm 
    navigate={navigate}
    onStaffResetPasswordPopup={handleStaffResetPasswordClick}
    verifyStaffAccount={HandleVerifyStaffAccount}
    setAuth={setAuth}
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
}, []);
};
export default OpenStaffLoginPopup;