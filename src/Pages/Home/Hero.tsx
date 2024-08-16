import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        className="h-full w-full lg:w-3/4 bg-[#FFD476] rounded-tr-[50%] flex flex-col justify-center items-start text-left"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h3 
          className="z-50 text-8xl lg:px-16 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          Modern Interior Design Service
        </motion.h3>
        <motion.p 
          className="relative lg:px-16 left-0 p-2 max-w-sm lg:max-w-2xl mt-3 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          Interiorfirm is an acclaimed multidisciplinary studio specializing in interior architecture, interior design, and décor that redefines laid-back luxury.
        </motion.p>
        <motion.button 
          className="mt-12 ml-52 lg:ml-96 btn bg-teal-600 hover:text-teal-500 text-white border-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          Explore Now
          <HiArrowLongRight />
        </motion.button>
      </motion.div>
      <motion.div 
        className="h-full w-1/4 lg:flex hidden items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute right-0 p-2 bg-gray-300 w-[60%] h-[26rem] rounded-bl-[300px]"
          initial={{ scale: 0.5, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* <img 
            className="h-full w-full object-cover rounded-bl-[300px]" 
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Interior Design"
          /> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
