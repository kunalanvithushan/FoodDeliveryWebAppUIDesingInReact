import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { openVerificationPopup } from "./StaffPasswordVerify";  
import '.././/authPages/StyleSheet/StaffResetPassword.css'
import BaseURL from "../../../config";
import {showErrorToast,showSuccessToast} from '../../utils/toastNotifications.js'
import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);
const OpenStaffVerifyForm = ({handleStaffEmailSubmit}) => {
  const [email, setEmail] = useState("");
 const [loading,setLoading]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  
     
      const formData = {email};
      handleStaffEmailSubmit(e, formData, setLoading);  
    
      
     
  };


  return (
    <div className="StaffEmailVerify-otp-container">
      <div className="StaffEmailVerify-otp-card">
        <h2 className="StaffEmailVerify-text-center">Staff verify account</h2>
        <form onSubmit={handleSubmit}>
          <div className="StaffEmailVerify-form-group">
            <label htmlFor="email">Enter your staff email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your staff email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="StaffEmailVerify-btn " disabled={loading}>
            {loading ? <span className="loader"></span> : "Get Verification code"}
          </button>
        </form>
      </div>
    </div>
  );
};

 const OpenStaffVerify = () => {
  const APIUrl = BaseURL.API_BASE_URL;
 const  navigate= useNavigate();

  const handleStaffEmailSubmit = async (e, formData, setLoading) => {
    setLoading(true);
    
    try {
        const response = await fetch(`${APIUrl}/auth/email_otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log("API Response:", result);

       
        if (result.status) {
            const { staff_id } = result.data || {};

            if (!staff_id) {
                showErrorToast("Something went wrong. Please try again!");
                return;
            }

            console.log("Staff ID:", staff_id);
            showSuccessToast(result.meta?.message || "Verification email sent successfully!");

            navigate(`/Staff-account-verify/set-password/${staff_id}`);
        } else {
            showErrorToast(result.meta?.message || "An error occurred. Please try again.");
        }
    } catch (error) {
        console.error("Request failed:", error);
        showErrorToast("Network error. Please check your connection.");
    } finally {
        setLoading(false);
    }
};

  
  


  useEffect(() => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: <OpenStaffVerifyForm  handleStaffEmailSubmit={handleStaffEmailSubmit}/>,
    customClass: {
      popup: "responsive-reset-popup",
    }, showClass: {
      popup: ' animate__animated animate__fadeInDown',  
    },
    hideClass: {
      popup: 'animate__animated animate__fadeInUp',  
    },   didOpen: (popup) => {
     
      const closeButton = popup.querySelector(".swal2-close");
      closeButton.addEventListener("click", () => {
         
        popup.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => MySwal.close(), 500);  
      });
    },
    
     
  });
})
};
export default OpenStaffVerify;