import React, { useState } from 'react';
import './Notification.css'; // CSS for styling the notification page

const Notification = () => {
  // Sample notification data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New delivery assigned to you for John Doe.",
      date: "2025-01-21 09:00 AM",
      status: "Unread", // Unread or Read
    },
    {
      id: 2,
      message: "You have successfully delivered the order to Emily Green.",
      date: "2025-01-20 06:00 PM",
      status: "Read",
    },
    {
      id: 3,
      message: "Reminder: Pickup order for Michael Brown in 15 minutes.",
      date: "2025-01-20 12:00 PM",
      status: "Unread",
    },

    {
      id: 3,
      message: "Reminder: Pickup order for Michael Brown in 15 minutes.",
      date: "2025-01-20 12:00 PM",
      status: "Unread",
    },
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, status: "Read" } : notification
      )
    );
  };

  const handleClearNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      
      <div className="notification-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.status === "Unread" ? 'unread' : 'read'}`}
          >
            <div className="notification-message">
              <p>{notification.message}</p>
              <span className="notification-date">{notification.date}</span>
            </div>
            
            <div className="notification-actions">
              {notification.status === "Unread" && (
                <button
                  className="mark-as-read"
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  Mark as Read
                </button>
              )}
              <button
                className="clear-notification"
                onClick={() => handleClearNotification(notification.id)}
              >
                Clear
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
