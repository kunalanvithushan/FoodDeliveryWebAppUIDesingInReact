import React, { useState } from 'react';
import './Deliverystatus.css'; // Add styles in this CSS file

const Deliverystatus = () => {
  // Sample list of deliveries with initial statuses
  const [deliveries, setDeliveries] = useState([
    { id: 1, customerName: 'John Smith', status: 'Pending' },
    { id: 2, customerName: 'Emily Green', status: 'In Progress' },
    { id: 3, customerName: 'Michael Brown', status: 'Completed' },
    { id: 4, customerName: ' Brown', status: 'Completed' }
  ]);

  // Function to update the delivery status
  const updateStatus = (id, newStatus) => {
    setDeliveries(prevDeliveries =>
      prevDeliveries.map(delivery =>
        delivery.id === id ? { ...delivery, status: newStatus } : delivery
      )
    );
  };

  return (
    <div className="delivery-status-container">
      <h2>Delivery Status</h2>
      <div className="delivery-list">
        {deliveries.map((delivery) => (
          <div className="delivery-item" key={delivery.id}>
            <div className="delivery-info">
              <p><strong>Customer:</strong> {delivery.customerName}</p>
              <p><strong>Status:</strong> {delivery.status}</p>
            </div>
            <div className="status-actions">
              {delivery.status !== 'Completed' && (
                <>
                  <button
                    onClick={() => updateStatus(delivery.id, 'In Progress')}
                    disabled={delivery.status === 'In Progress'}
                  >
                    Start Delivery
                  </button>
                  <button
                    onClick={() => updateStatus(delivery.id, 'Completed')}
                    disabled={delivery.status === 'Completed'}
                  >
                    Mark as Completed
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deliverystatus;
