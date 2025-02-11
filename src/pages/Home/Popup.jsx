import React from "react";
import '../Home/StyleSheet/Popup.css'
const Popup = ({ togglePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3 className="text-center">Filter Food</h3>
        <form>
          <div className="mb-3">
            <label className="form-label d-block mb-2">Food Type</label>
            <div>
              <label className="radio-label">
                <input type="radio" name="foodType" value="veg" /> Veg
              </label>
              <label className="radio-label">
                <input type="radio" name="foodType" value="nonVeg" /> Non Veg
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Primary Meal</label>
            <select className="form-select">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="freshJuice">Fresh Juice</option>
            </select>
          </div>

          <div className="mb-3">
          <label className="form-label pop-head mb-2">Sort By Price</label>
            <div>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sortPrice"
                  value="lowToHigh"
                  
                />
                Price: Low to High
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sortPrice"
                  value="highToLow"
                   
                />
                Price: High to Low
              </label>
            </div>
            <div className=" button-container">
              <button type="button" className=" sort-btn" onClick={() => togglePopup()}>
                Apply
              </button>
              <button type="button" className=" sort-btn" onClick={() => togglePopup()}>
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
