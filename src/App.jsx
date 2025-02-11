import { useState,useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/footer";
import Admin from "./pages/staff/Admin/Admin";
import  LoginPopup  from "./pages/authPages/Login.jsx";
import OpenRegisterPopup from "./pages/authPages/CustomerRegister.jsx"
import OpenOtpVerificationPopup from "./pages/authPages/CustomerRegisterVerify.jsx"


 
//import PopupBasket1 from "./popupBasket/popupBasket1.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopupBasket1 from "./popupBasket/popupBasket1";
//Gowsikan
 
import MyProfile from './pages/CustomerProfile/MyProfile';
import Profile from './pages/CustomerProfile/Profile'
import DeliveryAddress from './pages/CustomerProfile/DeliveryAddress'
import AddNewAddress from './pages/CustomerProfile/AddNewAddress'
import EditAddress from './pages/CustomerProfile/EditAddress'
import MyOrders from './pages/CustomerProfile/MyOrders'
import BaseURL from '../config'


function App() {

   
   
   console.log(BaseURL.API_BASE_URL,BaseURL.PUBLIC_URL)
 



  return (
    <>
      {/* <div className='d-flex'>
            <div className='col-auto'>
            <MyProfile />
             </div>
             <div>
            
       <Routes>
         <Route path="MyOrders" element={<MyOrders />} />
         <Route path="profile" element={<Profile />} />
         <Route path="DeliveryAddress" element={<DeliveryAddress />} />
         <Route path="AddNewAddress" element={<AddNewAddress />} />
         <Route path="EditAddress" element={<EditAddress />} />
         </Routes>
    
             </div> */}
{/*     
    
    
         </div> */}
           <Header />
           <div className="main-container">
           <Home /> 
           </div>
           <Footer />  

 
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login"  element={ <LoginPopup/> } />
        <Route path="/customer-register" element={ < OpenRegisterPopup/> } />
        <Route path="/otp-verification/:userId" element={<OpenOtpVerificationPopup/>}/>
      </Routes>
    




 {/* <PopupBasket1/> */}
      
     {/* <Admin/> */}

 
     {/* <LoginPage/> */}
   
    </>
  );
  
    
     
 
}

export default App;



// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Swal from "sweetalert2";

// const Home = () => <h1>Home Page</h1>;

// const AlertPage = () => {
//   useEffect(() => {
//     Swal.fire({
//       title: "Alert!",
//       text: "This is a SweetAlert popup triggered by a route!",
//       icon: "success",
//       confirmButtonText: "OK",
//     });
//   }, []);

  
// };

// const App = () => {
//   return (
//     <>
//     <Home/>
    
   
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/alert" element={<AlertPage />} />
//       </Routes>
//       </>
//   );
// };

// export default App;
