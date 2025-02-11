import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//import { openOtpVerificationPopup } from "../authPages/OtpVerification";  // Correct path
import { openVerificationPopup } from "../authPages/StaffPasswordVerify"; // Correct path
 import '.././/authPages/StyleSheet/StaffResetPassword.css'

const MySwal = withReactContent(Swal);

const StaffResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleStaffEmailSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Close the current popup
    Swal.close();

    // Open the OTP verification popup
    openVerificationPopup(email);
  };

  return (
    <div className="StaffEmailVerify-otp-container">
      <div className="StaffEmailVerify-otp-card">
        <h2 className="StaffEmailVerify-text-center">Staff Reset Password</h2>
        <form onSubmit={handleStaffEmailSubmit}>
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
          <button type="submit" className="StaffEmailVerify-btn ">
            Send Verification Code
          </button>
        </form>
      </div>
    </div>
  );
};

export const openStaffResetPasswordPopup = () => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: <StaffResetPasswordForm />,
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
        setTimeout(() => MySwal.close(), 500); // Delay to allow the animation to complete
      });
    },
    
     
  });
};
