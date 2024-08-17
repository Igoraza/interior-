import React from 'react';
import { motion } from "framer-motion";
import BlurBackground from '../../Components/BlurBackground';

const InnovativeDesign: React.FC = () => {
  return (
    <div className="min-h-screen border border-gray-300">
      <div className="flex justify-between items-center p-3 lg:p-5">
        <BlurBackground/>
        <h2 className="text-5xl lg:text-7xl max-w-2xl text-right">
          Providing Innovative Interior Design.
        </h2>
      </div>
      {/* grid box section */}
      <div className="flex items-end">
        <div
          style={{backgroundImage: `url("https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
          className="h-96 w-72 lg:h-[600px] lg:w-[940px] bg-center bg-no-repeat"
        />
        <div 
          style={{backgroundImage: `url("https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
          className="relative right-6 lg:right-32 z-50 bottom-0 border-8 border-white w-full h-72 bg-gray-400 rounded-br-[600px] bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="flex justify-center lg:justify-end relative lg:bottom-44">
        <motion.div className="h-96 w-full lg:w-[940px] bg-amber-300 lg:rounded-t-full p-4 flex items-center justify-center">
          <div className="max-w-md text-left lg:mt-48">
            <p className="mb-4 font-sans text-justify">Since 1999, we have been providing great flooring solutions and customer service for homeowners and commercial clients. Among flooring materials, none is more elegant and luxurious than natural stone.</p>
            <div className="flex items-center justify-between">
            <button className='btn font-sans hover:bg-teal-900 hover:text-white bg-teal-500 border-none text-black px-6 py-2 rounded'>About Us</button>
            <img src="/arrow.svg" alt="arrow image" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeDesign;