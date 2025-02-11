import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "../authPages/StyleSheet/customerNewPasswordOtpVerification.css"; // Import the updated CSS
import "../authPages/StyleSheet/setCustomerNewPassword.css";

import LoginPopup  from "/src/pages/authPages/Login";

const MySwal = withReactContent(Swal);

export const openVerificationPopup = (email) => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: (
      <div className="customerNewPasswordOtpVerification otp-container">
        <div className="customerNewPasswordOtpVerification verification-card">
          <h2 className="text-center">Verify Your Email</h2>
          <p className="text-center">
            Enter the 6-digit verification code sent to {email}
          </p>
          <form onSubmit={(e) => handleVerifyCode(e, email)}>
            <div className="form-group">
              <label htmlFor="verificationCode">Verification Code</label>
              <div className="otp-inputs-Customer">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className=" otp-input-customer"
                    onChange={(e) => handleOtpInputChange(e, index)}
                    onFocus={(e) => e.target.select()}
                    required
                  />
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Verify Code
            </button>
          </form>
        </div>
      </div>
    ),
    customClass: {
      popup: "customerNewPasswordOtpVerification responsive-verification-popup",
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

  });
};

const handleVerifyCode = (e, email) => {
  e.preventDefault(); // Prevent the form from submitting

  // Here, you would usually verify the code entered by the user with your backend.

  // If the verification is successful, proceed to show the "Set New Password" popup.
  openSetNewPasswordPopup(email);
};

// Handle OTP input change to focus the next input field
const handleOtpInputChange = (e, index) => {
  const value = e.target.value;
  if (value && index < 5) {
    const nextInput = document.querySelectorAll(".otp-input")[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }
};




const openSetNewPasswordPopup = (email) => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: (
      <div className="setCustomerNewPassword">
        <div className="setCustomerNewPasswordset-password-card ">
          <h2 className="setCustomerNewPasswordh2">Set New Password</h2>
          <form onSubmit={(e) => handleSetNewPassword(e)}>
            <div className="setCustomerNewPasswordform-group">
              <label htmlFor="newPassword" className="setCustomerNewPasswordform-grouplabel"> New Password</label>
              <input
                type="password"
                className="setCustomerNewPasswordform-control"
                id="newPassword"
                placeholder="Enter your new password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                className="setCustomerNewPasswordform-control"
                id="confirmPassword"
                placeholder="Confirm your new password"
                required
              />
            </div>
            <button type="submit" className="setCustomerNewPasswordbtn">
              Confirm           </button>
          </form>
        </div>
      </div>
    ),
    customClass: {
      popup: "responsive-set-password-popup",
    }, showClass: {
      popup: ' animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeInUp',
    },
  });
};

const handleSetNewPassword = (e) => {
  e.preventDefault(); // Prevent the form from submitting

  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if both passwords match
  if (newPassword !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Passwords do not match!",
    });
  } else {
    
    console.log("New Password Set:", newPassword);
 e
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your password has been successfully updated!",
    }).then(() => {
      LoginPopup();  
    });
  }
};
