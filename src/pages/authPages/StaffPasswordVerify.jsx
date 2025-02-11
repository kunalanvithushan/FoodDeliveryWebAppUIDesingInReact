import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoginPopup from "/src/pages/authPages/Login";
import {openStaffResetPasswordPopup} from "../authPages/StaffSetNewPassword.jsx"
import "../authPages/StyleSheet/StaffPasswordEmailOtpVerify.css"

const MySwal = withReactContent(Swal);

// Utility function to open a SweetAlert popup
const openPopup = (htmlContent, customClass, width = "600px", height = "600px") => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: htmlContent,
    customClass: customClass,
    width,
    height, showClass: {
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
};

// Verification Popup with 6 OTP inputs
export const openVerificationPopup = (email) => {
  const OTPInput = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (target, index) => {
      const value = target.value.replace(/[^0-9]/g, ""); // Only allow numeric input
      if (!value) return;

      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if available
      if (index < otp.length - 1) {
        target.nextElementSibling?.focus();
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const enteredOtp = otp.join("");
      if (enteredOtp.length === 6) {
        // Call backend to verify OTP
        console.log("Entered OTP:", enteredOtp);
        openStaffResetPasswordPopup(); // Proceed to the next step
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "Please enter all 6 digits of the OTP.",
        });
      }
    };

    return (
      <div className="StaffPasswordEmailOtpVerify-otp-container">
        <div className="StaffPasswordEmailOtpVerify-card">
          <h2 className="StaffPasswordEmailOtpVerify-text-centerH">
            Verify Your Email
          </h2>
          <p className="StaffPasswordEmailOtpVerify-text-centerP">
            Enter the 6-digit verification code sent to {email}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  className="otp-input"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <button type="submit" className="StaffPasswordEmailOtpVerifySS">
              Verify Code
            </button>
          </form>
        </div>
      </div>
    );
  };

  openPopup(<OTPInput/>, "responsive-verification-popup");
};

 