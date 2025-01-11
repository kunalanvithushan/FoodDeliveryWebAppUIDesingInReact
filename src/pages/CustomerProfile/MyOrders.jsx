import React from 'react'

const MyOrders = () => {
    return (
        <div className='MyOrdersBackground container vh-100 vw-100 d-flex align-items-center'>
             <div class="container">
        <h2>In Process Orders</h2>

        <table class="table table-bordered">
            <thead >
                <tr>
                    <th>Order Id</th>
                    <th>Order Item</th>
                    <th>Status</th>
                    <th>Arrive Time</th>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1, Cell 1</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 2</td>
                </tr>
                
            </tbody>
        </table>
        <h2>Past Orders</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Order Item</th>
                    <th>Status</th>
                    <th>Arrive Time</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1, Cell 1</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 2</td>
                </tr>
              
            </tbody>
        </table>

</div>
    </div>
    )
}

export default MyOrders
