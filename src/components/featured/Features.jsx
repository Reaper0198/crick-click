import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import img1 from "../../assets/formats-vk.png";
import img2 from "../../assets/interactive-experience.png";
import img3 from "../../assets/professional-setup.png";
import { BsArrowDown } from "react-icons/bs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Features = () => {
  return (
    <motion.div
      className="p-3 mt-10 mx-5 md:mx-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="title">
        <h1 className="title">Features We Offer:</h1>
      </div>
      <motion.div className="flex w-[100%] mt-20 mx-auto  gap-6  xl:flex-row flex-col">
        <motion.div variants={cardVariants}>
          <FeatureCard
            imgUrl={img1}
            heading={"Multiple Formats"}
            description={
              "We support multiple formats for your convenience including T20, ODI, and Test Matches."
            }
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <FeatureCard
            imgUrl={img2}
            heading={"Interactive Experience"}
            description={
              "Our platform provides an interactive experience for you to enjoy the game."
            }
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <FeatureCard
            imgUrl={img3}
            heading={"Professional Setup"}
            description={
              "We have a professional setup to ensure you have a seamless experience."
            }
          />
        </motion.div>
      </motion.div>
      <BsArrowDown className="text-white text-4xl flex mx-auto mt-20" />
    </motion.div>
  );
};

export default Features;
