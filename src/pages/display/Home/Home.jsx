import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import girl from "../../../assets/images/home/Home_girl.png";
import Comment from "../../../assets/images/home/comments.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  // animation
  useEffect(() => {
    const containers = document.querySelectorAll(".container"); // Select all containers
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add "visible" class to the currently visible container
            entry.target.classList.add("visible");
          } else {
            // Remove "visible" class from containers that are not in view
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the container is visible
    );
  
    containers.forEach((container) => {
      observer.observe(container); // Observe each container
    });
  
    return () => {
      containers.forEach((container) => observer.unobserve(container)); // Cleanup
    };
  }, []);

  //most popular sample data
  const PopularFoodItems = [
    { id: 1, name: "First Order Discount", discount: 20, image: "image1.jpg" },
    { id: 2, name: "Vegan Discount", discount: 20, image: "image2.jpg" },
    { id: 3, name: "First Order Discount", discount: 20, image: "image1.jpg" },
    { id: 4, name: "Vegan Discount", discount: 20, image: "image2.jpg" },
    { id: 5, name: "First Order Discount", discount: 20, image: "image1.jpg" },
    { id: 6, name: "Vegan Discount", discount: 20, image: "image2.jpg" },
    { id: 7, name: "First Order Discount", discount: 20, image: "image1.jpg" },
    { id: 8, name: "Vegan Discount", discount: 20, image: "image2.jpg" },
  ];

  // discount sample data
  const foodDiscountSampleData = [
    { id: 1, name: "First Order Discount", discount: 20, image: "image1.jpg" },
    { id: 2, name: "Vegan Discount", discount: 20, image: "image2.jpg" },
  ];

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrollingRight, setIsScrollingRight] = useState(true);

  // Auto-scroll functionality with bidirectional looping Discounted items and most popular sold items
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current && !isPaused) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

        if (isScrollingRight) {
          if (scrollLeft + clientWidth >= scrollWidth) {
            setIsScrollingRight(false); // Switch to scroll left
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        } else {
          if (scrollLeft <= 0) {
            setIsScrollingRight(true); // Switch to scroll right
          } else {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
          }
        }
      }
    }, 5000);

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, [isPaused, isScrollingRight]);

  // Pause auto-scroll on mouse over or touch
  const handlePause = () => setIsPaused(true);

  // Resume auto-scroll on mouse leave or touch end
  const handleResume = () => setIsPaused(false);

  // menu Items
  const foodItems = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Food Item ${index + 1}  `,
  }));

  const scrollLeft = () => {
    document.querySelector(".food-items").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".food-items").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const [searchText, setSearchText] = useState("");

  //comments
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  //search button clear input clear
  const handleClear = () => {
    setSearchText("");
  };

  // static
  const stats = [
    { value: "789,900+", label: "Orders Delivered" },
    { value: "690+", label: "Customers" },
    { value: "100+", label: "Food Items" },
  ];

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
     
      <div className="container  ">
        {/*Home*/}
       
        <div class="container">
         
          <div className="   row   align-items-center shadow-lg body-tertiary rounded">
            <div className="col-md-5">
              <div className="order-status">
                <div className="  bannerCont align-items-center  col-md-8  shadow-lg body-tertiary rounded">
                  <span className="highlight-text">1. Order Placed</span>
                  <p className="order-text">We've received your order!.</p>{" "}
                </div>
                <div className="  bannerCont col-md-6 align-items-center shadow-lg body-tertiary rounded">
                  <span className="highlight-text">2. Order Accepted </span>
                  <p className="order-text">
                    Your order will be delivered shortly.
                  </p>{" "}
                </div>
                <div className=" bannerCont col-md-9 align-items-center shadow-lg body-tertiary rounded">
                  <span className="highlight-text">
                    3. Order Out for Delivery
                  </span>
                  <p className="order-text">
                    Your rider's nearby! They're almost there – get ready! and
                    enjoy
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="col-md-7 shadow-lg body-tertiary rounded">
              <img
                src={girl}
                alt="Food illustration"
                className="food-image fluid  "
              />
            </div>
          </div>
      
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <section id="Offers">
      {/* Offers*/}
      <div class="container">
      <div className="row align-items-center shadow-lg body-tertiary rounded">
      <div className=" container promotion-section">
        {foodDiscountSampleData.length > 0 ? (
          <div>
            <div className=" row rowBG  align-items-center rounded ">
              {" "}
              <p className="promotion-text">
                Unbeatable Prices, Limited Time Only!{" "}
              </p>
            </div>
            <div className=" row align-items-center shadow-lg body-tertiary  ">
              <div
                className="scrollable-container"
                ref={scrollRef}
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                onTouchStart={handlePause}
                onTouchEnd={handleResume}
              >
                {foodDiscountSampleData.map((item) => (
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
        ) : (
          <div className="banner">
            <div className="banner-content">
              <h2>Hi</h2>
              <img src={girl} alt="Banner" />
            </div>
          </div>
        )}
      </div>
      </div></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br/>
      </section>
      {/* popular */}

      <section id="Popular">
      <div class="container">
      <div className="row align-items-center shadow-lg body-tertiary rounded">
      <div className=" container promotion-section">
        <div>
          <div className=" row rowBG  align-items-center ">
            {" "}
            <p className="promotion-text">
              {" "}
              Craving the Crowd-Favorites? We've Got Them All!
            </p>
          </div>
          <div className=" row rowBG  align-items-center shadow-lg body-tertiary  ">
            <div
              className="scrollable-container"
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
      </div></div>


      
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </section>

        <section id="Menu">
      {/* Menu*/}
       

      <div className="container promotion-section">
        <div className="row">
          <div className="col">
            <button className="btn-fil-getstarted" onClick={togglePopup}>
              sort{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="15.75"
                viewBox="0 0 576 512"
              >
                {" "}
                <path
                  fill="#FFD43B"
                  d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
              </svg>{" "}
            </button>

            <div>
              {showPopup && (
                <div className="popup-overlay">
                  <div className="popup-content">
                    <h3 className="text-center">Filter Food</h3>
                    <form>
                      <div className="mb-3">
                        <label className=" form-label d-block mb-2">
                          Food Type
                        </label>
                        <div>
                          <label className="radio-label">
                            <input type="radio" name="foodType" value="veg" />
                            Veg
                          </label>
                          <label className="radio-label">
                            <input
                              type="radio"
                              name="foodType"
                              value="nonVeg"
                            />
                            Non Veg
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
                        <label className="  form-label pop-head mb-2">
                          Sort By Price
                        </label>
                        <div>
                          <label className="radio-label">
                            <input type="radio" name="foodType" value="veg" />
                            Price: High to Low
                          </label>
                          <label className="radio-label">
                            <input
                              type="radio"
                              name="foodType"
                              value="nonVeg"
                            />
                            Price: Low to High
                          </label>
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Apply
                        </button>
                      </div>
                    </form>
                    <button
                      className="btn-close"
                      onClick={togglePopup}
                    ></button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8 col-sm-9">
            <div class="search-bar">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
              />

              {searchText && (
                <button class="clear-icon" onClick={handleClear}>
                  &#x2715;
                </button>
              )}
            </div>
          </div>
        </div>

        <br />
        


        <div className=" row food-container">
          <h4> Items </h4>
          <div className="food-items">
            {foodItems.map((item) => (
              <div key={item.id} className="food-item">
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="row ">
          <div class="col rowbtn">
            <button className="  scroll-btn-item left  align-items-end" onClick={scrollLeft}>
              &#8592;
            </button>
          </div>

          <div class="col rowbtn">
            <button className="scroll-btn-item  right " onClick={scrollRight}>
              &#8594;
            </button>
          </div>
        </div>
      </div>
       <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        </section>

        <section id="Feedback">
{/* comment */}
      <div className="container">
        <div className="row rowBG  align-items-center   rounded ">
          <div className="col-md-6 shadow-lg body-tertiary rounded">
            <div className="order-status">
              <h3>Leave a Comment and Rating</h3>

              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`btn custom-btn ${
                      rating >= star ? "rated" : ""
                    }`}
                    onClick={() => handleRatingChange(star)}
                  >
                    <FontAwesomeIcon
                      icon={rating >= star ? faStar : faStarEmpty}
                    />
                  </button>
                ))}
              </div>

              <div className="comment-section">
                <textarea
                  className="form-control"
                  placeholder="Write your comment here..."
                  value={comment}
                  onChange={handleCommentChange}
                />
              </div>

              <button className="btn btn-success submit-btn">Submit</button>
            </div>
          </div>
          <div className="col-md-6 shadow-lg body-tertiary rounded">
            <img
              src={Comment}
              alt="Food illustration"
              className="food-image img-fluid"
            />
          </div>
        </div>
      </div>

       <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </section>

      <div className="stats-section">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`col-12 col-md-4 py-3 ${
                  index !== stats.length - 1 ? "border-end border-light" : ""
                }`}
              >
                <h2 className="stat-value">{stat.value}</h2>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
 

    </>
  );
};

export default Home;
