import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const MyProfile = () => {
    return (
       
            <div className='MyProfile d-flex flex-column bg-dark text-white p-4 vh-100'>
                <a href="d-flex align-items-center">
        

                </a>
                <div>
                    <h1 className='mx-2'>My Profile</h1>
                    <div className='row'>
                        <div className='col-4'>
                            <img src='data:image/jpeg;base64,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' alt='profile' className='MyProfileImg img-fluid rounded-circle mx-2' />
                        </div>
                        <div className='col-8'>
                            <h2>Riya</h2>
                            <p>Email: </p>
                        </div>
                    </div>
                </div>
                <hr className='text-secondary mt-2' />
                <ul className='nav nav-pills flex-column p-0 m-0'>
                    <li className='nav-item p-1'>
                        <Link to="/MyOrders" className='nav-link text-white'>
                            <i className='bi bi-cart me-2 fs-5'></i>
                            <span className='fs-5'>My Orders</span>
                        </Link>
                    </li>
                    <li className='nav-item p-1'>
                        <Link to="/profile" className='nav-link text-white'>
                            <i className='bi bi-person me-2 fs-5'></i>
                            <span className='fs-5'>Profile</span>
                        </Link>
                    </li>
                    <li className='nav-item p-1'>
                        <Link to="/DeliveryAddress" className='nav-link text-white'>
                            <i className='bi bi-geo-alt me-2 fs-5'></i>
                            <span className='fs-5'>Delivery Address</span>
                        </Link>
                    </li>
                     <li className='nav-item p-1'>
                        <a href='#' className='nav-link text-white'>
                            <i className='bi bi-star me-2 fs-5'></i>
                            <span className='fs-5'>My Reviews</span>
                        </a>
                    </li>
                    <li className='nav-item p-1'>
                        <a href='#' className='nav-link text-white'>
                            <i className='bi bi-telephone me-2 fs-5'></i>
                            <span className='fs-5'>Contact Us</span>
                        </a>
                    </li>
                    <li className='Logout nav-item p-1 position-absolute bottom-0 m-4'>
                        <a href='#' className='nav-link text-white'>
                            <i className='bi bi-box-arrow-left me-2 fs-5'></i>
                            <span className='fs-5'>Logout</span>
                        </a>
                    </li>
                </ul>

            </div>

        
    )
}

export default MyProfile
