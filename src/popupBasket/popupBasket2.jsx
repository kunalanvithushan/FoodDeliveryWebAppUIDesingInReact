import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./popupBasket2.css";
import DeliveryScooter from "../assets/images/popup/Delivery Scooter.png";
import Home from "../assets/images/popup/home.png";
import Basket from "../assets/images/popup/Basket.png";

const MySwal = withReactContent(Swal);

const PopupBasket2 = ({ onClose }) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    partAddress: "",
    environment: "",
    baseLocation: "",
  });

  const [selectedOption, setSelectedOption] = useState("");

  const customerAddresses = [
    { id: 1, partAddress: "123 Main St, City Center" },
    { id: 2, partAddress: "456 Elm St, Suburb" },
    { id: 3, partAddress: "789 Oak St, Riverside" },
  ];

  const baseLocations = [
    { id: 1, district: "District 1", hometown: "City A" },
    { id: 2, district: "District 2", hometown: "City B" },
    { id: 3, district: "District 3", hometown: "City C" },
  ];

  const filteredAddresses = customerAddresses.filter((address) =>
    address.partAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAddress = (address) => {
    setSelectedAddress(address.partAddress);
    setIsDropdownOpen(false);
  };

  const handleAddNewAddress = () => {
    if (
      newAddress.partAddress &&
      newAddress.environment &&
      newAddress.baseLocation
    ) {
      customerAddresses.push({
        id: customerAddresses.length + 1,
        partAddress: newAddress.partAddress,
      });
      setNewAddress({ partAddress: "", environment: "", baseLocation: "" });
      setShowAddressForm(false);
      Swal.fire("Success", "New address added successfully!", "success");
    } else {
      Swal.fire("Error", "Please fill in all fields.", "error");
    }
  };

  const renderOrderSummaryPopup = () => {
    MySwal.fire({
      allowOutsideClick: false,
      html: (
        
        <div className="basket-card">
          {/* Header */}
          <div className="basket-header">
            <h2 className="basket-headerh2">Order Summary</h2>
            <img className="headIMG" src={Basket} alt="Basket" />
          </div>

          {/* Address Section */}
          <div className="address-section">
            <h3>Address</h3>
          
            
            <label> Select Your location </label>

            <div class="select-button-container">
            <select
              id="dropdown"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="Cform-select"
            >
              <option value="">--Select--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <a
              class="Cbtn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Add New
            </a>
</div>
            <div class="  AddcardA  collapse mt-3" id="collapseExample">
              <div class="">
                <form className="Aform">
                  <div class="mb-3">
                    <label for="dropdown" className="Aform-label">
                      Home town{" "}
                    </label>
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="Aform-select"
                    >
                      <option value="">Your Home town </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="textInput" className="Aform-label">
                      Part Address
                    </label>
                    <input
                      type="text"
                      class="Aform-control"
                      id="textInput"
                      placeholder="Type something..."
                    />
                  </div>

                  <button type="submit" class=" Addbtn">
                    Add
                  </button>
                </form>
              </div>
            </div>
            <div className="selected-address">
              <h4>Your Delivery Location</h4>
              <p> Vavniya,Omanthai,VeppanKulam</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary2">
            <div className="row">
              <div className="col-6">Sub Total</div>
              <div className="col-6">1000.00 Rs</div>
            </div>
            <div className="row">
              <div className="col-6">Discounted</div>
              <div className="col-6">100.00 Rs</div>
            </div>
            <div className="row">
              <div className="col-6">Total</div>
              <div className="col-6">900.00 Rs</div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info">
            <div className="row">
              <div className="col-6">
                <div className="border-box">
                  <img className="ima-s" src={DeliveryScooter} alt="Delivery" />
                  <p>Delivery</p>
                  <div className="time">Starts at 17:20</div>
                </div>
              </div>
              <div className="col-6">
                <div className="border-box">
                  <img className="ima-s" src={Home} alt="Home" />
                  <p>Estimate to Delivery</p>
                  <div className="time">Starts at 17:20</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="back-button " onClick={onClose}>
            <span className=" back-icon">&larr;</span>   Go Back
            </button>
            <button className="confirm-button  " onClick={onClose}>
              Confirm<span>&#10004;</span> 
            </button>
          </div>
        </div>
      ),
      showCloseButton: true,
      customClass: {
        popup: "responsive-basket-popup",
      },showClass: {
        popup: ' animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeInUp',
      },
          didOpen: (popup) => {
     
        const closeButton = popup.querySelector(".swal2-close");
        closeButton.addEventListener("click", () => {
           
          popup.classList.add("animate__animated", "animate__fadeOut");
          setTimeout(() => MySwal.close(), 500); // Delay to allow the animation to complete
        });
      },
      showConfirmButton: false,
      width: "600px",
    });
  };

  useEffect(() => {
    renderOrderSummaryPopup();
  }, []);

  return null;
};

export default PopupBasket2;
