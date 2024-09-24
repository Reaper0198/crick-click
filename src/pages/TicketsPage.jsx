import React, { useState } from 'react'
import stadium from "../assets/stadium.jpg"
import TicketCard from '../components/tickets/TicketCard';
import { FaArrowRight } from 'react-icons/fa';
import {motion} from 'framer-motion';

export default function TicketsPage() {

    const [selectedMatch, setSelectedMatch] = useState("");

    const handleChange = (event) => {
      setSelectedMatch(event.target.value);
    };

    const [total, setTotal] = useState(0);



  return (
    <div className='tickets bg-black flex items-center justify-center pt-20'>
    <div className='bg-white bg-opacity-10 backdrop-blur-md px-16 pt-4 pb-12 shadow-lg  max-w-6xl rounded-[28px] overflow-hidden'>
        <h1 className='title'>Tickets</h1>
        <div className='flex flex-col-reverse md:flex-row gap-10'>
            <div>
                <div className='py-2 px-3'>
                    <label htmlFor="dropdown" className='text-white text-2xl'><b>Upcoming Matches :</b></label><br/>
                    <select id="dropdown" value={selectedMatch} onChange={handleChange}
                    className=' h-9 rounded-md font-medium block w-full bg-white border-b-2 border-gray-300 px-4'>
                        <option value="option1">Mumbai vs Lucknow   -Mon, 23 Sep 2024</option>
                        <option value="option2">Chennai vs Hydrabad  -Wed, 25 Sep 2024</option>
                        <option value="option3">Pune vs Gujarat -Fri, 12 Oct 2024</option>
                        <option value="option4">Delhi vs Punjab -Wed,18 Oct 2024</option>
                        <option value="option5">Mumbai vs Delhi -Sat, 21 Oct 2024</option>
                    </select>
                </div>
                <TicketCard seatType={"Deluxe"} price={2000} setTotal={setTotal} total={total}/>
                <TicketCard seatType={"Premium"} price={1500} setTotal={setTotal} total={total}/>
                <TicketCard seatType={"Regular"} price={800} setTotal={setTotal} total={total}/>
                <div className='text-white w-full flex justify-between text-2xl py-6 px-4'>
                    <h2>Total :</h2>
                    <h2>₹{total}</h2>
                </div>
                <div className='flex justify-end'>
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white bg-gradient-to-r from-green-800 to-green-900 font-semibold py-2 px-6 rounded-full hover:bg-gradient-to-r flex items-center gap-2 hover:from-green-600 hover:to-green-700">
                    Pay
                    <FaArrowRight className="ml-2" />
                </motion.button></div>
            </div>
            <div className='md:pt-10' >
                <img src={stadium} className='md:max-h-96 md:w-96 rounded-[28px]'/>
            </div>
        </div>
    </div>
    </div>
  )
}
