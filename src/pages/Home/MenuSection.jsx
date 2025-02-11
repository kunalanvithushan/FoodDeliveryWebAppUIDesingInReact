
import React, { useState,useRef } from "react";
import Popup from "./Popup";
import "../Home/StyleSheet/MenuSection.css";

const MenuSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const menuContainerRef = useRef(null);
  const [searchText , setSearchText]=useState( )
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const generateMenuItems = () => {
    const items = [];
    for (let i = 1; i <= 50; i++) {
      items.push({
        id: i,
        name: `Menu Item ${i}`,
        description: `Description of Menu Item ${i}`,
        price: `$${(Math.random() * (15 - 5) + 5).toFixed(2)}`, // Random price between 5 and 15
      });
    }
    return items;
  };

  const menuItems = generateMenuItems();
  const scrollItems = (direction) => {
    const container = menuContainerRef.current; // Get the scrollable container
    const scrollAmount = direction === 1 ? 300 : -300; // Adjust the scroll amount
    if (container) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleClear = () => {
    setSearchText("");
  };
 

  return (
    <section id="Menu">
      <div className="container promotion-section">
        

        {/* Scrollable Container for Menu Items */}
        <div className=" ">
          
          <h3 className="Mh3">Click on your favorite dish to customize and order instantly.</h3>
          <div className="row">
          <div className="col">
            <button className="btn-fil-getstarted" onClick={togglePopup}>
              Sort
            </button>
            <div>{showPopup && <Popup togglePopup={togglePopup} />}</div>
          </div>
          <div className="col-md-8 col-sm-9">
  <div className="search-bar">
    <input 
      type="text" 
      value={searchText} 
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search" 
    />
    {searchText && (
      <span href  className="clear-icon" onClick={handleClear}>
        &#x2715;
      </span>
    )}
  </div>
</div>

        </div>
          <div className=" menu-items-container">
            <div className="background ">
              <div className="menu-item-card"
             ref={menuContainerRef}
                         >
                {menuItems.map((item) => (
                  <div key={item.id} className="custom-col">
                    <div className="menu-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="menu-item-image"
                      />
                      <div className="menu-item-details">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="left-btn"    onClick={() => scrollItems(-1)} >
              &lt;
            </button>
            <button className="left-btn"   onClick={() => scrollItems(1)} >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );

   
};

export default MenuSection;

 