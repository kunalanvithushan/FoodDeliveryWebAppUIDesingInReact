import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../pages/authPages/StyleSheet/CustomerRegisterVerify.css";
import { useParams, useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const OtpVerificationForm = () => {
  const { userId } = useParams();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue === "123456") {
      Swal.fire({
        icon: "success",
        title: "OTP Verified",
        text: "Your OTP has been successfully verified!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "The OTP you entered is invalid. Please try again.",
      });
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2 className="text-center">OTP Verification</h2>
        <p className="text-center">An OTP has been sent to your email.</p>
        <form onSubmit={handleOtpSubmit}>
          <div className="otp-inputs-Customer">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                className="otp-input-Customer"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <button type="submit" className="StaffPasswordEmailOtpVerifySS">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

const OpenOtpVerificationPopup = () => {
  const navigate = useNavigate(); // Define navigate

  useEffect(() => {
    MySwal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      html: `<div id="otp-container"></div>`, // Placeholder div
      customClass: {
        popup: "responsive-otp-popup",
      },
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeInUp",
      },
      didOpen: () => {
        const container = document.getElementById("otp-container");
        if (container) {
          ReactDOM.createRoot(container).render(<OtpVerificationForm />);
           ;  
        }
      },
    });
  }, [navigate]);

  return null;
};

export default OpenOtpVerificationPopup;
