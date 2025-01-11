import React from 'react'
import { Link } from 'react-router-dom'

const DeliveryAddress = () => {
    return (
        <div className='DeliveryAddressBackground container vh-100 vw-100 d-flex align-items-center'>
            <div className='DeliveryAddress container vh-100 vw-100 d-flex align-items-center'>
                <table className='DeliveryAddressTable table table-info'>
                    <tr>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Postcode</th>
                        <th>Phone Number</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>123 Main St</td>
                        <td>San Francisco</td>
                        <td>CA</td>
                        <td>94122</td>
                        <td><Link to="/EditAddress"><button className='btn'>Edit</button></Link></td>
                        <td><Link to="/AddNewAddress"><button className='btn-info'>+Add New Address</button></Link></td>
                       
                    </tr>
                </table>

            </div>




        </div>
    )
}

export default DeliveryAddress
