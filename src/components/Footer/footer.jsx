import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css"; // Import the CSS file
import fLogo from "../../assets/images/footerIcon/FeedUrHungryF.png";
import google from "../../assets/images/footerIcon/app-store-badges-en 1.png";
import facebook from "../../assets/images/footerIcon/Facebook.png";
import Instagram from "../../assets/images/footerIcon/Instagram.png";
import Snapchat from "../../assets/images/footerIcon/Snapchat.png";
import TikTok from "../../assets/images/footerIcon/TikTok.png";

export default function Footer() {
  return (
    <footer className="footer shadow-lg p-3 mb-5 body-tertiary rounded">
      <div className="row">
        {/* Left Section */}
        <div className="col-12 col-md-4">
          <div>
            <h4>
              <img
                src={fLogo}
                alt="FeedUrHungry Logo"
                className="img-fluid"
                style={{ width: "80%", height: "auto" }}
              />
            </h4>
          </div>
          <div>
            <h4>
              <img
                src={google}
                alt="Google Play Badge"
                className="img-fluid"
                style={{ width: "40%", height: "auto" }}
              />
            </h4>
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-6 col-md-4">
          <h5>Get Exclusive Deals in Your Inbox</h5>
          <p>FeedUrHungry@gmail.com</p>
          <h6>We won’t spam. Read our email policy.</h6>
          <div className="social-icons">
            <img
              src={facebook}
              alt="Facebook"
              className="img-fluid"
              style={{ width: "10%", height: "auto" }}
            />
            <img
              src={Instagram}
              alt="Instagram"
              className="img-fluid"
              style={{ width: "10%", height: "auto" }}
            />
            <img
              src={Snapchat}
              alt="Snapchat"
              className="img-fluid"
              style={{ width: "10%", height: "auto" }}
            />
            <img
              src={TikTok}
              alt="TikTok"
              className="img-fluid"
              style={{ width: "10%", height: "auto" }}
            />
          </div>
          <div>Address: Veppankulam, Omanthai, Vavuniya</div>
        </div>

        {/* Right Section */}
        <div className="col-6 col-md-4 legal-pages">
          <h3>Legal Pages</h3>
          <p>Terms and Conditions</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row bg-dark shadow-lg body-tertiary rounded">
        <div className="col-12 text-center">
          <p className="text-white">
            © 2024 FeedUrHungry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
