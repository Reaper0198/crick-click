import React from 'react' 
import TestimonyCard from './TestimonyCard';
import celebration from "../../assets/celebration.png"
import umpire from "../../assets/umpire.png"
import player from "../../assets/player.png"

import { motion } from "framer-motion"


import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'; // This imports basic Swiper styles
import 'swiper/css/pagination'; // Add additional styles if you use specific modules like Pagination
import 'swiper/css/navigation';

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


const Testimony = () => {
  return (
    <motion.div
    className="pt-6 pb-14 p-3 mt-10 mx-5 md:mx-40"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
        <div className="title">
            <h1>Testimonies & Success Stories:</h1>
        </div>
        <motion.div className='overflow-hidden p-6'>
            <Swiper
                spaceBetween={30}
                loop={true}                
                pagination={{ clickable: true }}
                breakpoints={{
                    360:{
                        slidesPerView:1,
                    },
                    900:{
                        slidesPerView:2
                    }
            }}>
                <SwiperSlide>
                    <motion.div variants={cardVariants}>
                        <TestimonyCard 
                        imgUrl={umpire}
                        quote={"As an umpire, I was impressed by how efficiently the tournament was run. The scheduling was clear, and the communication with officials was excellent.Organizers ensured that we had everything we needed on game day."}
                        saidBy={"Parvin Jain"}
                        time={"2 months ago"}/>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div variants={cardVariants} >
                        <TestimonyCard
                        imgUrl={celebration}
                        quote={"Great tournament, well-managed with attention to detail. Everything ran on time, and the overall experience was fantastic for both players and spectators."}
                        saidBy={"Sachin Verma"}
                        time={"1 months ago"}
                        />
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div variants={cardVariants}>
                        <TestimonyCard
                        imgUrl={player}
                        quote={"Everything was organized efficiently, from scheduling to match day management. The staff was friendly and helpful throughout the event."}
                        saidBy={"Rakesh Pathak"}
                        time={"2 months ago"}
                        />
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </motion.div>
    </motion.div>
  )
}


export default Testimony