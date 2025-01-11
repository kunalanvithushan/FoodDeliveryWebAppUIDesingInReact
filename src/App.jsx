import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/display/Home/Home";
import Footer from "./components/Footer/footer";
//import PopupBasket1 from "./popupBasket/popupBasket1.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

//Gowsikan
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Verification from './pages/Verification'
import NewPassword from './pages/NewPassword'
import MyProfile from './pages/CustomerProfile/MyProfile';
import Profile from './pages/CustomerProfile/Profile'
import DeliveryAddress from './pages/CustomerProfile/DeliveryAddress'
import AddNewAddress from './pages/CustomerProfile/AddNewAddress'
import EditAddress from './pages/CustomerProfile/EditAddress'
import MyOrders from './pages/CustomerProfile/MyOrders'



function App() {
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
    
             </div>
    
    
    
         </div> */}
      <Header />
      <div div className="main-container" style={{ paddingTop: "100px" }}>
        <section id="Home">
         <Home /> 
        </section>
      </div>
      <Footer />

      
     

    </>
  );
  
    
     
 
}

export default App;
