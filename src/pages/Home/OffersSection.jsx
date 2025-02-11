import React, { useRef, useEffect, useState } from "react";
import "../Home/StyleSheet/OffersSection.css";
import DeliveryMan from '../../assets/images/home/MotorBikeMan.png'
import { motion } from "framer-motion"; 
const OffersSection = () => {
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const [scrollInterval, setScrollInterval] = useState(null);

  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    if (scrollInterval) return;

    const scrollContainer = scrollRef.current;

    const interval = setInterval(() => {
      if (scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollContainer.scrollLeft >= maxScrollLeft && scrollDirection === 1) {
          setScrollDirection(-1);
        } else if (scrollContainer.scrollLeft <= 0 && scrollDirection === -1) {
          setScrollDirection(1);
        }

        scrollContainer.scrollLeft += scrollDirection;
      }
    }, 20);

    setScrollInterval(interval);
  };

  const stopAutoScroll = () => {
    clearInterval(scrollInterval);
    setScrollInterval(null);
  };

  const handlePause = () => {
    stopAutoScroll();
  };

  const handleResume = () => {
    startAutoScroll();
  };

  const foodDiscountSampleData = [
    { id: 1, title: "50% Off on Pizza", description: "Enjoy 50% off on your first pizza order.", discount: 50, image: "pizza.jpg", name: "Pizza" },
    { id: 2, title: "Free Drink with Burger", description: "Order a burger and get a free drink.", discount: 100, image: "burger.jpg", name: "Burger" },
    { id: 3, title: "Buy 1 Get 1 Free", description: "Buy any sandwich and get another one free.", discount: 100, image: "sandwich.jpg", name: "Sandwich" },
    { id: 4, title: "Buy 1 Get 1 Free", description: "Buy any sandwich and get another one free.", discount: 100, image: "sandwich.jpg", name: "Sandwich" },
    { id: 5, title: "Buy 1 Get 1 Free", description: "Buy any sandwich and get another one free.", discount: 100, image: "sandwich.jpg", name: "Sandwich" },
    { id: 6, title: "Buy 1 Get 1 Free", description: "Buy any sandwich and get another one free.", discount: 100, image: "sandwich.jpg", name: "Sandwich" }
  ];

  const feedbackRightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 150,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <section id="Offers">
      <div className="promotion-section">
        {foodDiscountSampleData.length > 0 ? (
          <div>
            <div className="rowBG">
              <p className="promotion-textOFF">
                Unbeatable Prices, Limited Time Only!
              </p>
            </div>
            <div
              className="scrollable-containerOFF"
              ref={scrollRef}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
              onTouchStart={handlePause}
              onTouchEnd={handleResume}
            >
              {foodDiscountSampleData.map((item) => (
                <div key={item.id} className="custom-cols">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.discount}% off</p>
                  </div>
                </div>
              ))}
            </div>

 
<motion.div
            className="feedback-right"
            initial="hidden"
            whileInView="visible" // Trigger animation every time it enters the viewport
            variants={feedbackRightVariants}
            viewport={{ once: false }} // Remove `once` to allow animations to trigger every time
          > 
          
          <img   className="DeliveryMan"src={DeliveryMan} />
          
          </motion.div>
  
 
  
  
          </div>
        ) : (
          <div className="banner">
            <div className="banner-content">
              <h2>Hi</h2>
              <img src="girl.jpg" alt="Banner" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OffersSection;
