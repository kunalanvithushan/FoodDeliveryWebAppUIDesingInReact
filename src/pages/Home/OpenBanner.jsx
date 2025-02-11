import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../../assets/images/home/Home_girl.png";
import DeliveryMan  from '../../assets/images/home/foodDeliveryman.png'
import "../Home/StyleSheet/OpenBanner.css";
import Location from "../../assets/images/home/Tracking.png";
import TickBox from "../../assets/images/home/Tick Box.png";
import One from "../../assets/images/home/One.png";
import Two from "../../assets/images/home/Two.png";
import Three from "../../assets/images/home/Three.png";

const Home = () => {
  const bannerRef1 = useRef(null);
  const bannerRef2 = useRef(null);
  const bannerRef3 = useRef(null);
  const imageRef = useRef(null); // Reference for the image

  // Check if each banner is in view
  const isInView1 = useInView(bannerRef1, { once: false });
  const isInView2 = useInView(bannerRef2, { once: false });
  const isInView3 = useInView(bannerRef3, { once: false });
  const isInViewImage = useInView(imageRef, { once: false }); // Check if the image is in view

  // Animation variants
  const bannerVariants = {
    hidden: { opacity: 0, x:100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: (isInView1 ? 1 : isInView2 ? 1.2 : 1.5),  
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from left (x: -100)
    visible: {
      opacity: 1,
      x:  0, // End at normal position (x: 0)
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="containerB">
      <div className="row align-items-center">
        {/* Order Status Section */}
        <div className="col-md-5">
          <div className="order-status">
            <motion.div
              ref={bannerRef1}
              className="bannerCont p-3 mb-3"
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              variants={bannerVariants}
            >
              <span className="highlight-text">Order Placed</span>
              <p className="order-text">
                We've received your order!{" "}
                <img className="inerIMG" src={Location} alt="Location" />
              </p>
              <img className="NUMimg" src={One} alt="Step 1" />
            </motion.div>

            <motion.div
              ref={bannerRef2}
              className="bannerCont p-3 mb-3"
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              variants={bannerVariants}
            >
              <span className="highlight-text">Order Accepted</span>
              <p className="order-text">
                Your order will be delivered shortly.{" "}
                <img className="inerIMG" src={TickBox} alt="TickBox" />
              </p>
              <img className="NUMimg2" src={Two} alt="Step 2" />
            </motion.div>

            <motion.div
              ref={bannerRef3}
              className="bannerCont p-3 mb-3"
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
              variants={bannerVariants}
            >
              <span className="highlight-text">Order Out for Delivery</span>
              <p className="order-text">
                Your rider's nearby! They're almost there – get ready! 🚴‍♂️
              </p>
              <img className="NUMimg3" src={Three} alt="Step 3" />
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-7">
          <motion.img
            ref={imageRef}
            src={DeliveryMan}
            alt="Food illustration"
            className="Bimge"
            initial="hidden"
            animate={isInViewImage ? "visible" : "hidden"}
            variants={imageVariants}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
