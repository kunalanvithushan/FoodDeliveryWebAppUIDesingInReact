import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBell } from '@fortawesome/free-solid-svg-icons'; // Import the bell icon
import './Delivery.css';
import styles from "./Sidebar.module.css"; 

const Delivery = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [currentOrder, setCurrentOrder] = useState(null);
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      address: '123 Main St',
      items: ['Pizza', 'Soda'],
      deliveryTime: '30 mins',
      price: '$120',
      phoneNumber: '0769098044',
      paymentStatus: 'Not Collected',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      address: '456 Oak St',
      items: ['Burger', 'Fries'],
      deliveryTime: '25 mins',
      price: '$110',
      phoneNumber: '0987654321',
      paymentStatus: 'Not Collected',
    },
    {
      id: 3,
      customerName: 'Smith',
      address: '456 Oak St',
      items: ['Burger', 'Fries'],
      deliveryTime: '20 mins',
      price: '$90',
      phoneNumber: '0987654321',
      paymentStatus: 'Not Collected',
    },
  ]);
  const [notifications, setNotifications] = useState([
    'New order from John Doe',
    'Your delivery status has been updated.',
  ]); // Example notifications list

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Handle order selection and show modal
  const handleOrderSelect = (order) => {
    console.log('Order Selected:', order); // Debugging line to ensure the order is selected
    setCurrentOrder(order);
    setIsModalOpen(true); // Open the modal when an order is selected
  };

  // Handle the start of delivery (navigate to another page)
  const handleStartDelivery = () => {
    navigate('/delivery-status'); // Navigate to the "Delivery Status" page
  };

  // Handle delivery completion and update payment status
  const handleCompleteDelivery = () => {
    const updatedOrders = orders.map((order) =>
      order.id === currentOrder.id
        ? { ...order, paymentStatus: 'Collected' }
        : order
    );

    // Save the updated orders to localStorage
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    // Update state with the saved orders
    setOrders(updatedOrders);

    // Set current order to null after delivery is completed
    setCurrentOrder(null);

    alert('Order Delivered!');
    navigate('/delivery'); // Navigate back to the delivery page
  };

  // Handle notification click to navigate to the Notification page
  const handleNotificationClick = () => {
    navigate('/notification'); // Navigate to the Notification page
  };

  // Handle payment status change for each order
  const handlePaymentStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, paymentStatus: newStatus } : order
    );
    setOrders(updatedOrders);

    // Optionally, update localStorage as well
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentOrder(null); // Reset the current order
  };

  useEffect(() => {
    // Load orders from localStorage on page load if available
    const savedOrders = JSON.parse(localStorage.getItem('orders'));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  return (
    <div >
      {/* Main Content */}
      <div className="main-content">
        {/* Active Orders Section */}
        <div className="active-orders">
          <h3>Active Orders</h3>
          <div className="orders-list">
            <ul>
              {orders.map((order) => (
                <li key={order.id} onClick={() => handleOrderSelect(order)}>
                  <strong>{order.customerName}</strong>
                  <p>{order.address}</p>
                  <p>Delivery Time: {order.deliveryTime}</p>
                  <div className="payment-status">
                    <label htmlFor={`paymentStatus-${order.id}`}>Payment Status:</label>
                    <select
                      id={`paymentStatus-${order.id}`}
                      value={order.paymentStatus}
                      onChange={(e) =>
                        handlePaymentStatusChange(order.id, e.target.value)
                      }
                    >
                      <option value="Not Collected">Not Collected</option>
                      <option value="Collected">Collected</option>
                    </select>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notification Icon Section */}
        <div className="notification-section">
          <FontAwesomeIcon
            icon={faBell}
            size="2x"
            className="notification-icon"
            onClick={handleNotificationClick} // Navigate to Notification page
          />
          <span className="notification-count">{notifications.length}</span>
        </div>
      </div>

      {/* Order Details Modal (Popup) */}
      {isModalOpen && currentOrder && (
        <div className="order-details-modal">
          <div className="order-details">
            <h4>Order Details</h4>
            <p>
              <strong>Items:</strong> {currentOrder.items.join(', ')}
            </p>
            <p><strong>Address:</strong> {currentOrder.address}</p>
            <p><strong>Delivery Time:</strong> {currentOrder.deliveryTime}</p>
            <p><strong>Price:</strong> {currentOrder.price}</p>
            <p><strong>Payment Status:</strong> {currentOrder.paymentStatus}</p>
            <button  className='buttonDelivery'onClick={handleStartDelivery}>Start Delivery</button>
            <button className='buttonDelivery' onClick={handleCompleteDelivery}>Mark as Delivered</button>
            <button className='buttonDelivery' onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
