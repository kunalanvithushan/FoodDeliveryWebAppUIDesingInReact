 
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Comment from "../../assets/images/home/comments.png";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "../Home/StyleSheet/FeedbackSection.css";
import TackAway from '../../assets/images/home/TakeAwayMan.png'


const FeedbackSection = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleRatingChange = (rate) => setRating(rate);
  const handleCommentChange = (e) => setComment(e.target.value);

  // Animation variants for feedback-left and feedback-right
  const feedbackVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const feedbackRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <section id="Feedback">
      <div className="feedback-container">
        <div className="feedback-content">
          {/* Feedback Left with scroll animation */}
          <motion.div
            className="feedback-left"
            initial="hidden"
            whileInView="visible" // Trigger animation every time it enters the viewport
            variants={feedbackVariants}
            viewport={{ once: false }} // Remove `once` to allow animations to trigger every time
          >
            <h3 className="Fh3">
              how was your experience? Share your feedback and make a difference!
            </h3>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`btn custom-btn ${rating >= star ? "rated" : "unrated"}`}
                  onClick={() => handleRatingChange(star)}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: rating >= star ? "var(--star-gold)" : "var(--star-gray)",
                    }}
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
            <button className="submit-btn">Submit</button>
          </motion.div>

          {/* Feedback Right with scroll animation */}
          <motion.div
            className="feedback-right"
            initial="hidden"
            whileInView="visible" // Trigger animation every time it enters the viewport
            variants={feedbackRightVariants}
            viewport={{ once: false }} // Remove `once` to allow animations to trigger every time
          >
            <img src={TackAway} alt="Food illustration" className="food-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
