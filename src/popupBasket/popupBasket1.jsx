import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import poptest from "../assets/images/popTest.webp";
import PopupBasket2 from "./popupBasket2";
import "../popupBasket/popupBasket1.css";
import Basket from "../assets/images/popup/Basket.png"

const MySwal = withReactContent(Swal);

const PopupBasket1 = ({ onClose }) => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [basketItems, setBasketItems] = useState(
    Array.from({ length: 5 }, (_, index) => ({
      id: index,
      name: `Product ${index + 1}`,
      price: 1200,
      quantity: 1,
      image: poptest,
    }))
  );

  // Handle quantity change for a specific item
  const handleQuantityChange = (id, action) => {
    setBasketItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "add"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Handle 'Next Step' action (show second popup)
  const handleNext = () => {
    setShowOrderSummary(true);
    // Close current popup and show next
    MySwal.close();
    showBasketPopup2(); // Show the second popup
  };

  // Show SweetAlert Popup for Basket
  const showBasketPopup = () => {
    MySwal.fire({
      allowOutsideClick: false,
      html: (
        <> <div className="basket-card">
          <div className="basket-header">
          <h2 className="h2H">Order Summary</h2>
          <img className="headIMG"src={Basket}/>
          </div>
          <div className="basket-content">
            {basketItems.map((item) => (
              <div className="basket-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₹{item.price.toFixed(2)}</span>
                </div>
                <div className="item-controls">
                  <button
                    className="control-button"
                    onClick={() => handleQuantityChange(item.id, "remove")}
                  >
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button
                    className="control-button"
                    onClick={() => handleQuantityChange(item.id, "add")}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="basket-footer">
            <div className="basket-sum">
              <div className="row">
                <div className="col">Sub Total</div>
                <div className="col">₹{(basketItems.length * 1200).toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col">Discounted</div>
                <div className="col">₹0.00</div>
              </div>
            </div>
            <div className="total">Total: ₹{(basketItems.length * 1200).toFixed(2)}</div>
            <div className="row">
              <div className="col">
                <button className="add-button" onClick={onClose}>
                  Add Items
                </button>
              </div>
              <div className="col">
                <button className="add-button" onClick={handleNext}>
                  Next Step
                </button>
              </div>
            </div>
          </div>
          </div>
        </>
      ),
      showCloseButton: true,
      showConfirmButton: false,
      width: "600px",
      customClass: {
        popup: "responsive-login-popup",
      },
      showClass: {
        popup: ' animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeInUp',
      },   didOpen: (popup) => {
     
        const closeButton = popup.querySelector(".swal2-close");
        closeButton.addEventListener("click", () => {
           
          popup.classList.add("animate__animated", "animate__fadeOut");
          setTimeout(() => MySwal.close(), 500); // Delay to allow the animation to complete
        });
      },
    });
  };

  // Show SweetAlert Popup for Order Summary (next step)
  const showBasketPopup2 = () => {
    MySwal.fire({
      html: <PopupBasket2 onClose={onClose} />,
      
      width: "600px",
    });
  };

  useEffect(() => {
    showBasketPopup(); // Open the first SweetAlert popup when the component mounts
  }, []);

  return null; // No need to render anything here
};

export default PopupBasket1;
