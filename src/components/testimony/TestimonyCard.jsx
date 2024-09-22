import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion"


const TestimonyCard = ({imgUrl, quote, saidBy, time}) => {
  return (
    <motion.div className='flex transition text-black h-80 w-full rounded-[28px]  bg-white  gap-2 '
    whileHover={{ scale: 1.05 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.5,}}>
        <div className='p-5'>
            <FaQuoteLeft />
            <p>{quote}</p>
                <FaQuoteRight className='ml-auto'/>
                <div className='ml-auto text-right pt-3'>
                    <p className=''><b>-{saidBy}</b></p>
                    <p className=' text-gray-600 py-0'>{time}</p>
                </div>
        </div>
        <div className='grid place-items-center'>
            <img className=' h-full rounded-br-[28px] rounded-tr-[28px] object-cover' src={imgUrl}/>
        </div>
    </motion.div>
  )
}

export default TestimonyCard