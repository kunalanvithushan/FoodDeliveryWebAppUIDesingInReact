// DeliveryProfile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeliveryProfile.css'; // Importing the CSS for profile

const DeliveryProfile = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [earnings, setEarnings] = useState({
    total: 500,  // Example total earnings
    daily: 50,   // Example daily earnings
  });

  // Editable state for name, email, phone, and address
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@email.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("New York City");
  const [image, setImage] = useState("https://via.placeholder.com/150");

  const navigate = useNavigate(); // Hook for navigation

  const handleAvailabilityToggle = () => {
    setIsAvailable(!isAvailable);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert("Profile changes saved!");

    // Navigate to the Delivery page with updated profile info and state
    navigate('/delivery', {
      state: { image, name } // Passing updated image and name to the Delivery page
    });
  };

  return (
    <div className="profile-container">
      {/* Profile Header Section */}
      <div className="profile-header">
        <div className="profile-image">
          <img
            src={image}
         
            className="profile-img"
          />
          <input
            type="file"
            id="profile-image-input"
            className="profile-image-input"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }} // Hide the file input
          />
          <label htmlFor="profile-image-input" className="profile-image-button">
            📷
          </label>
        </div>
        <div className="profile-info">
          <h2 className="name">{name}</h2>
          <p className="role">Delivery Driver</p>
          <div className="rating">
            <span>⭐⭐⭐⭐☆</span> <span>(200 reviews)</span>
          </div>
          <div className={`status ${isAvailable ? 'active' : 'offline'}`}>
            <span className="status-indicator"></span>
            <span>{isAvailable ? 'Active' : 'Offline'}</span>
          </div>
        </div>
      </div>

      {/* Editable Contact Info Section */}
      <div className="contact-info">
        <h3>Contact Info</h3>
        <form onSubmit={handleSaveChanges}>
          <div>
            <strong>Name:</strong>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="editable-field"
            />
          </div>
          <div>
            <strong>Phone:</strong>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="editable-field"
            />
          </div>
          <div>
            <strong>Email:</strong>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="editable-field"
            />
          </div>
          <div>
            <strong>Location:</strong>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="editable-field"
            />
          </div>

          {/* Save Button */}
          <div>
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>

      {/* Performance Section */}
      <div className="performance">
        <h3>Performance</h3>
        <p><strong>Total Deliveries:</strong> 350</p>
        <p><strong>On-Time Rate:</strong> 98%</p>
        <p><strong>Customer Ratings:</strong> 4.8/5</p>
      </div>

      {/* Upcoming Deliveries Section */}
      <div className="upcoming-deliveries">
        <h3>Upcoming Deliveries</h3>
        <ul>
          <li>Delivery to: John Smith - 2 PM</li>
          <li>Delivery to: Emily Green - 5 PM</li>
        </ul>
      </div>

      {/* Availability Toggle */}
      <div className="availability-toggle">
        <button className="toggle-availability" onClick={handleAvailabilityToggle}>
          {isAvailable ? 'Set to Offline' : 'Set to Available'}
        </button>
      </div>

      {/* Logout Section */}
      <div className="logout">
        <button className="logout-btn">Logout</button>
      </div>
    </div> 
  );
};

export default DeliveryProfile;
