import React, { useState, useEffect } from "react";
import { Offcanvas, Nav, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import cart from "../../assets/images/Header/carts.png";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Header.css";
import Pop from "../../popupBasket/popupBasket1";
import HeaderImg from '../../assets/images/home/HeaderImg.png'

const Header = () => {
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);
  const handleResize = () => setIsMobileView(window.innerWidth <= 1000);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleBasketClick = () => {
    setIsPopupOpen((prev) => !prev);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleClose = () => setShowOffcanvas(false);
  const openUserProfile = () => {
    console.log("User profile opened successfully!");
  };
  const [user, setUser] = useState(null);
  // {
  //   name: "John Doe",
  //   profilePicture: "https://via.placeholder.com/150",
  // }
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <header className="header fixed-top ">
      <div className="cart-container  sm-pe-2">
        <div>
          <button className="cart-button " onClick={handleBasketClick}>
            <img src={cart} />
            Basket
          </button>
          {isPopupOpen && <Pop onClose={handleClosePopup} />}
        </div>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a>
          <h1 className="logoH">FeedUrHungry</h1>
        </a>
        <img className="HeaderImg" src={HeaderImg} />
        {/* Navbar for larger screens */}
        <Navbar expand="lg" className="HeaderLinks d-none d-lg-flex">
          <Nav className="ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Offers">Offers</Nav.Link>
            <Nav.Link href="#Popular">Popular</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#Feedback">Feedback</Nav.Link>
            <Link to={user ? "/profile" : "/login"}  >
              <button className="btn-getstarted">
                {user ? (
                  <>
                    <img
                      src={user.profilePic}
                      alt="User Profile"
                      className="profile-pic me-2"
                    />
                    <span>{user.name}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Login/Signup
                  </>
                )}
              </button>
            </Link>
          </Nav>
        </Navbar>
        {isMobileView && (
          <>
            <Button
              variant="link"
              className="mobile-nav-toggle d-lg-none"
              onClick={handleToggle}
            >
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
                className="hamburger-icon"
              />
            </Button>
            <Offcanvas
              show={showOffcanvas}
              onHide={handleToggle}
              placement="end"
              className="custom-offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Nav.Link onClick={handleClose} href="#Home">
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={handleClose} href="#Offers">
                    Offers
                  </Nav.Link>
                  <Nav.Link onClick={handleClose} href="#Popular">
                    Popular
                  </Nav.Link>
                  <Nav.Link onClick={handleClose} href="#Menu">
                    Menu
                  </Nav.Link>
                  <Nav.Link onClick={handleClose} href="#Feedback">
                    Feedback
                  </Nav.Link>
                  <Button
                    className="btn-getstarted"
                    onClick={() => {
                      handleClose();
                      user ? openUserProfile() : handleLoginClick()
                    }}
                  >
                    {user ? (
                      <>
                        <img src={user.profilePic} alt="User Profile" />
                        <span>{user.name}</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faUser} className="me-2" />
                        Login/Signup
                      </>
                    )}
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
