// import React, { useState } from 'react';
// import './History.css'; // Add your custom styles here

// const History = () => {
//   // Sample data for past deliveries
//   const [history, setHistory] = useState([
//     {
//       id: 1,
//       customerName: 'John Doe',
//       deliveryDate: '2025-01-15',
//       address: '123 Main St, New York',
//       status: 'Completed',
//       items: ['Pizza', 'Soda'],
//       deliveryTime: '30 mins',
//     },
//     {
//       id: 2,
//       customerName: 'Jane Smith',
//       deliveryDate: '2025-01-16',
//       address: '456 Oak St, New York',
//       status: 'Completed',
//       items: ['Burger', 'Fries'],
//       deliveryTime: '25 mins',
//     },
//     {
//       id: 3,
//       customerName: 'Michael Brown',
//       deliveryDate: '2025-01-17',
//       address: '789 Pine St, New York',
//       status: 'Pending',
//       items: ['Sandwich', 'Lemonade'],
//       deliveryTime: '20 mins',
//     },
//   ]);

//   const handleViewDetails = (id) => {
//     console.log(`Viewing details for order ID: ${id}`);
//     // Add navigation logic if you need to navigate to a detailed order page
//   };

//   return (
//     <div className="delivery-history-container">
//       <h2>Delivery History</h2>

//       <div className="history-list">
//         {history.map((order) => (
//           <div className="history-item" key={order.id}>
//             <div className="order-info">
//               <h4>{order.customerName}</h4>
//               <p><strong>Address:</strong> {order.address}</p>
//               <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
//               <p><strong>Status:</strong> {order.status}</p>
//               <p><strong>Delivery Time:</strong> {order.deliveryTime}</p>
//             </div>

//             <div className="order-items">
//               <p><strong>Items:</strong> {order.items.join(', ')}</p>
//             </div>

//             <button className="view-details-btn" onClick={() => handleViewDetails(order.id)}>
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default History;

import React, { useState } from 'react';
import './History.css'; // Add your custom styles here

const History = () => {
  // Sample data for past deliveries
  const [history, setHistory] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      deliveryDate: '2025-01-15',
      address: '123 Main St, New York',
      status: 'Completed',
      items: ['Pizza', 'Soda'],
      deliveryTime: '30 mins',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      deliveryDate: '2025-01-16',
      address: '456 Oak St, New York',
      status: 'Completed',
      items: ['Burger', 'Fries'],
      deliveryTime: '25 mins',
    },
    {
      id: 3,
      customerName: 'Michael Brown',
      deliveryDate: '2025-01-17',
      address: '789 Pine St, New York',
      status: 'Pending',
      items: ['Sandwich', 'Lemonade'],
      deliveryTime: '20 mins',
    },
  ]);

  // State to track selected order for details
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleViewDetails = (id) => {
    // Toggle the order details visibility
    setSelectedOrderId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="delivery-history-container">
      <h2>Delivery History</h2>

      <div className="history-list">
        {history.map((order) => (
          <div className="history-item" key={order.id}>
            <div className="order-info">
              <h4>{order.customerName}</h4>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>

            <div className="order-items">
              <p><strong>Items:</strong> {order.items.join(', ')}</p>
            </div>

            <button className="view-details-btn" onClick={() => handleViewDetails(order.id)}>
              {selectedOrderId === order.id ? 'Hide Details' : 'View Details'}
            </button>

            {/* Conditionally render additional details if the order is selected */}
            {selectedOrderId === order.id && (
              <div className="additional-details">
                <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
                <p><strong>Delivery Time:</strong> {order.deliveryTime}</p>
                <p><strong>Items:</strong> {order.items.join(', ')}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
