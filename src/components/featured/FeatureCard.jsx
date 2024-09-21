import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ imgUrl, heading, description }) => {
  return (
    <motion.div
      className="transition w-full max-w-[500px] h-[450px] bg-white shadow-lg rounded-[28px] overflow-hidden flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.5,
      }}
    >
      <div className="w-full h-[250px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imgUrl}
          alt="Product Image"
        />
      </div>
      <div className="flex-grow p-6">
        <h2 className="text-[28px] font-semibold text-gray-900">{heading}</h2>
        <p className="text-xl mt-4">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
