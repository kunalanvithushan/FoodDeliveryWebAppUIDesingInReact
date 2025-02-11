import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { openVerificationPopup } from "../authPages/VerifyEmailResetPasswordCustomer"; // Correct path
import "../authPages/StyleSheet/ResetPasswordCustomerEmail.css";

const MySwal = withReactContent(Swal);

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Just navigate to the verification popup without validation for simplicity
    // Close the current popup
    Swal.close();

    // Open the verification popup
    openVerificationPopup(email);
  };

  return (
    <div className="ResetPasswordCustomerEmail otp-container">
      <div className="ResetPasswordCustomerEmail otp-card">
        <h2 className="text-center">Reset Password</h2>
        <form onSubmit={handleEmailSubmit}>
          <div className="ResetPasswordCustomerEmail form-group">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              className="ResetPasswordCustomerEmail form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="ResetPasswordCustomerEmail btn btn-primary w-100">
            Send Verification Code
          </button>
        </form>
      </div>
    </div>
  );
};

export const openResetPasswordPopup = () => {
  MySwal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    html: <ResetPasswordForm />,
    customClass: {
      popup: "ResetPasswordCustomerEmail responsive-reset-popup",
    },
    showClass: {
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
