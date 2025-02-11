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
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import PopupBasket1 from "./popupBasket/popupBasket1";
 //shana
// import Sidebar from './pages/staff/DeliveryMan/Sidebar';
// import Delivery from './pages/staff/DeliveryMan/Delivery';
// import DeliveryProfile from './pages/staff/DeliveryMan/DeliveryProfile';
// import Deliverystatus from './pages/staff/DeliveryMan/Deliverystatus';
// import History from './pages/staff/DeliveryMan/History';
// import Notification from './pages/staff/DeliveryMan/Notification';



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
           {/* <Header />
           <div className="main-container">
           <Home /> 
           </div>
           <Footer />   */}
             
    
    
       
        <Header />
       <div div className="main-container" style={{ paddingTop: "100px" }}>
        <section id="Home">
         <Home />  
        </section>
       </div>
       <Footer />  

  
        <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login"  element={ <LoginPopup/> } />
        <Route path="/customer-register" element={ < OpenRegisterPopup/> } />
        <Route path="/otp-verification/:userId" element={<OpenOtpVerificationPopup/>}/>
      </Routes>  




 
      
 
     {/* <Admin/> */}
  
      

{/* 
        <div className="app">
       <Sidebar />
        <div className="main-content">
          <Routes>
           
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/profile" element={<DeliveryProfile />} />
            <Route path="/deliverystatus" element={<Deliverystatus />} />
            <Route path="/history" element={<History />} />
            <Route path="/notification" element={<Notification />} />


            { <Route path="/" element={<Delivery />} />  }
            
          </Routes>
        </div>
      </div> */}

        
        
         

 
     {/* <LoginPage/> */}
   
    </>
  );
  
    
     
 
}

export default App;



 