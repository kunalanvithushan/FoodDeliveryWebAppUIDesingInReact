import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import OffersSection from "../Home/OffersSection";
import PopularFoodSection from "../Home/PopularFoodSection";
import MenuSection from "../Home/MenuSection";
import FeedbackSection from "../Home/FeedbackSection";
import StatsSection from "../Home/StatsSection";
import OpenBanner from "../Home/OpenBanner";
import "../Home/StyleSheet/Home.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },  
  visible: { opacity: 1, y: 0 },  
};

const Home = () => {
  return (
    <div className="body">
<section id="Home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}  
        transition={{ duration: 0.5, delay: 0.2 }}  
        variants={sectionVariants}
      >
        <OpenBanner />
      </motion.div>
      </section>

<section id="Offers">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}  
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={sectionVariants}
      >
        <OffersSection />
      </motion.div>
      </section>
      <section id="Popular">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}  
        transition={{ duration: 0.5, delay: .5 }}
        variants={sectionVariants}
      >
        <PopularFoodSection />
      </motion.div>
      </section>
      <section id="Menu">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}  
        transition={{ duration: 0.5, delay: .5 }}
        variants={sectionVariants}
      >
        <MenuSection />
      </motion.div>
</section>

<section id="Feedback">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}  
        transition={{ duration: 0.5, delay: .5 }}
        variants={sectionVariants}
      >
        <FeedbackSection />
      </motion.div>
      </section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}  
        transition={{ duration: 0.5, delay: 0.5}}
        variants={sectionVariants}
      >
        <StatsSection />
      </motion.div>
    </div>
  );
};

export default Home;
