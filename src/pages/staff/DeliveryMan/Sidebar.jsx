import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for accessing passed state
import './sidebar.css';

const Sidebar = () => {
  const [profile, setProfile] = useState({
    image: "https://via.placeholder.com/150",  // Default profile image
    name: "James Johnson",                    // Default name
  });
  const [sidebarActive, setSidebarActive] = useState(false); // State to toggle sidebar on smaller screens

  const location = useLocation();  // Get the location state passed via navigation

  // Update the profile with passed data, if available
  useEffect(() => {
    if (location.state) {
      setProfile(location.state);  // Set the updated profile state
    }
  }, [location.state]);

  // Toggle the sidebar visibility on smaller screens
  const toggleSidebar = () => {
    setSidebarActive(prev => !prev);
  };

  // Close the sidebar when a menu item is clicked
  const closeSidebar = () => {
    setSidebarActive(false); // Close the sidebar
  };

  return (
    <>
      {/* Hamburger Menu Icon for smaller screens */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className="profile-section">
          {/* Use an img tag instead of backgroundImage */}
          <div className="profile-picture">
            <img src={profile.image} className="profile-img"  />
          </div>
          <h2 className="profile-name">{profile.name}</h2>
          <p className="profile-role">Driver</p>
        </div>
        <div className="menu">
          <Link to="/delivery" className="menu-item" onClick={closeSidebar}>Delivery</Link>
          <Link to="/profile" className="menu-item" onClick={closeSidebar}>Profile</Link>
          <Link to="/history" className="menu-item" onClick={closeSidebar}>History</Link>
          <Link to="/deliverystatus" className="menu-item" onClick={closeSidebar}>Delivery Status</Link>
          <Link to="/notification" className="menu-item" onClick={closeSidebar}>Notification</Link>
          <Link to="/logout" className="menu-item logout" onClick={closeSidebar}>Logout</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
