import React, { useState } from "react";
import { Offcanvas, Nav, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faBars } from "@fortawesome/free-solid-svg-icons";
import cart from"../../assets/images/Header/carts.png";
import "./Header.css";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => setShowOffcanvas(!showOffcanvas);
const handleClose=()=> setShowOffcanvas(false)
  return (

    <header id="header" className="header fixed-top ">
      <div  className="cart-container pe-5 sm-pe-2" >
        <div  >
        <button className="cart-button "  >
        <img src={cart} alt="Cart Icon" />
        Basket
      </button>
        </div>
    

      </div>

      <div className="container-fluid d-flex align-items-center justify-content-between">
       
        <a className="logo">
          <h1 className="logo">FeedUrHungry</h1>
        </a>

        {/* Navbar for larger screens */}
        <Navbar expand="lg" className="d-none d-lg-flex">
          <Nav className="ms-auto">
            <Nav.Link    href="#Home">Home</Nav.Link>
            <Nav.Link href="#Offers">Offers</Nav.Link>
            <Nav.Link href="#Popular">Popular</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#Feedback">Feedback</Nav.Link>
            

            {/* <Button
      className="btn-getstarted mt-3"
      onClick={isLoggedIn ? onProfileClick : onLoginClick}
    >
      {isLoggedIn ? (
        <>
          <img
            src={user.profilePicture}
            alt="Profile"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          {user.name}
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faUser} className="me-2" />
          Login/Signup
        </>
      )}
    </Button> */}

           

            <Button className="btn-getstarted">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Login/Signup
            </Button>
          </Nav>
        </Navbar>

         
        <Button
          variant="link"
          className="mobile-nav-toggle d-lg-none"
          onClick={handleToggle}
        >
       <FontAwesomeIcon icon={faBars} flip size="2xl" style={{  color: "#050505",}} />

        </Button>
        <Offcanvas show={showOffcanvas} onHide={handleToggle} placement="end">
          <Offcanvas.Header   closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
            <Nav.Link onClick={handleClose} href="#Home">Home</Nav.Link>
            <Nav.Link  onClick={handleClose} href="#Offers"> Offers</Nav.Link>
            <Nav.Link onClick={handleClose} href="#Popular">Popular</Nav.Link>
            <Nav.Link  onClick={handleClose} href="#Menu"> Menu</Nav.Link>
            <Nav.Link  onClick={handleClose} href="#Feedback">Feedback</Nav.Link>
            <Button className="btn-getstarted mt-3">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Login/Signup
              </Button>

              {/* <Button
      className="btn-getstarted mt-3"
      onClick={isLoggedIn ? onProfileClick : onLoginClick}
    >
      {isLoggedIn ? (
        <>
          <img
            src={user.profilePicture}
            alt="Profile"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          {user.name}
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faUser} className="me-2" />
          Login/Signup
        </>
      )}
    </Button> */}

            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
       
    </header>
  );
};

export default Header;