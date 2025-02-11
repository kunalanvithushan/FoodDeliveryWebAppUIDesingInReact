import React, { useRef, useState, useEffect } from "react";
import '../Home/StyleSheet/PopularFoodSection.css';

const PopularFoodSection = () => {
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

  const PopularFoodItems = [
    {
      id: 1,
      name: "Cheeseburger",
      discount: 20,
      image: "cheeseburger.jpg",
    },
    {
      id: 2,
      name: "Fried Chicken",
      discount: 15,
      image: "fried_chicken.jpg",
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      discount: 25,
      image: "pasta_alfredo.jpg",
    },
    {
      id: 4,
      name: "Sushi Rolls",
      discount: 30,
      image: "sushi_rolls.jpg",
    },
    {
      id: 5,
      name: "Veggie Pizza",
      discount: 40,
      image: "veggie_pizza.jpg",
    }
  ];

  return (
    <section id="Popular">
      <div className="container">
        <div className=" ">
          <div className="container promotion-section">
            <div>
              <p className="promotion-text">Craving the Crowd-Favorites? We've Got Them All!</p>
              <div className="row rowBG align-items-center shadow-lg body-tertiary">
                <div
                  className="scrollable-containerPO"
                  ref={scrollRef}
                  onMouseEnter={handlePause}
                  onMouseLeave={handleResume}
                  onTouchStart={handlePause}
                  onTouchEnd={handleResume}
                >
                  {PopularFoodItems.map((item) => (
                    <div key={item.id} className="food-item">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularFoodSection;
