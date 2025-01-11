import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Verification from './pages/Verification'
import NewPassword from './pages/NewPassword'
import MyProfile from './pages/CustomerProfile/MyProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/CustomerProfile/Profile'
import DeliveryAddress from './pages/CustomerProfile/DeliveryAddress'
import AddNewAddress from './pages/CustomerProfile/AddNewAddress'
import EditAddress from './pages/CustomerProfile/EditAddress'
import MyOrders from './pages/CustomerProfile/MyOrders'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    
    <BrowserRouter>
    <div className='d-flex'>
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



        </div>
        </BrowserRouter>
  )
}

export default App
