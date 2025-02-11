import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../authPages/StyleSheet/setNewpasswordforStaff.css"
const MySwal = withReactContent(Swal);

const StaffResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };



  const handleStaffSubmitNewPassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      MySwal.fire("Error", "Passwords do not match. Please try again.", "error");
    } else {
      // Placeholder for an API call to reset the staff password
      MySwal.fire(
        "Success",
        "Your password has been reset. Please log in.",
        "success"
      ).then(() => {
        // Redirect to staff login page (adjust URL if needed)
        window.location.href = "/staff-login";
      });
    }
  };

  return (

        <div className="SetNewPasswordForStaff-otp-container">
      <div className="SetNewPasswordForStaff-set-password-card">
        <h2 className="SetNewPasswordForStaff-text-center">Set New Password</h2>
        <form onSubmit={handleStaffSubmitNewPassword}>
          <div className="SetNewPasswordForStaff-form-group">
            <label htmlFor="newPassword">New Password</label>
            <div className="input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control"
                id="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <div className="lock" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div className="SetNewPasswordForStaff-form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <div className="input-container">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="lock" onClick={toggleConfirmPasswordVisibility}>
                {isConfirmPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <button type="submit" className="SetNewPasswordForStaff-btn">
            Set New Password
          </button>
        </form>
      </div>
    </div>
    
//     <div className="password-reset-container">
//       <div className="password-reset-card">
//         <h2 className="text-center">Reset Password</h2>
//         <form onSubmit={handleStaffSubmitNewPassword}>
//           <div className="form-group">
//             <label htmlFor="newPassword"> vithu New Password</label>
//             <input
//               type={isPasswordVisible ? "text" : "password"}
//               className="form-control"
//               id="newPassword"
//               placeholder="Enter new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//  <div className="lock" onClick={togglePasswordVisibility}>
//                 {isPasswordVisible ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 448 512"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                   >
//                     <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 448 512"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                   >
//                     <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z" />
//                   </svg>
//                 )}
//               </div>


//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//              type={isConfirmPasswordVisible ? "text" : "password"}
//               className="form-control"
//               id="confirmPassword"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
 
//  <div className="lock" onClick={togglePasswordVisibility}>
//                 {isPasswordVisible ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 448 512"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                   >
//                     <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 448 512"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                   >
//                     <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z" />
//                   </svg>
//                 )}
//               </div>
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
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
    width: "500px",
    height: "400px",
  });
};
