import { useState,useEffect,useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/footer";
import Admin from "./pages/staff/Admin/Admin";
import  LoginPopup  from "./pages/authPages/Login.jsx";
import OpenRegisterPopup from "./pages/authPages/CustomerRegister.jsx"
import OpenOtpVerificationPopup from "./pages/authPages/CustomerRegisterVerify.jsx"
import OpenStaffVerify from "./pages/authPages/VerifyStaff.jsx"
import OpenStaffLoginPopup from "./pages/authPages/StaffLogin.jsx"
import OpenVerifyOtpAndSetPasswordPopup from "./pages/authPages/VrifyOtpAndsetPassword.jsx"
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext.jsx";
//import { AuthContextProvider } from "./context/AuthContext";
import {  Routes, Route,Link } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import BaseURL from '../config'


function App() {

   
   
   console.log(BaseURL.API_BASE_URL,BaseURL.PUBLIC_URL)
 
const {user}=useContext(AuthContext)


  return (


    <>
             
    
    
        <ToastContainer />


       
                    <Header />
                    <div className="main-container" style={{ paddingTop: "100px" }}>
                        <section id="Home">
                            <Home />
                        </section>
                    </div>
                    <Footer />
                 <Routes>
                    <Route path="/login" element={<LoginPopup />} />
                    <Route path="/customer-register" element={<OpenRegisterPopup />} />
                    <Route path="/verify-otp/:user_id" element={<OpenOtpVerificationPopup />} />
                    <Route path="/verify-staff-emails" element={<OpenStaffVerify />} />
                    <Route path="/Staff-login" element={<OpenStaffLoginPopup />} />
                    <Route path="/Staff-account-verify/set-password/:staff_id" element={<OpenVerifyOtpAndSetPasswordPopup />} />

                    {/* Protected route for admin */}
                    
               
      
                    </Routes>




       
        

 
      
 
    </>
  );
  
    
     
 
}

export default App;



 