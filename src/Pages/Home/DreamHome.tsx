import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SvgPatternIcon from "../../Components/SvgPatternIcon";

export default function DreamHome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="lg:px-16">
      <motion.section
        className="lg:flex  grid justify-between"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >

        
        <div className="flex gap-12 lg:gap-28">
          <motion.div
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/6492393/pexels-photo-6492393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
            className="relative bottom-32 lg:bottom-56 h-[30rem] rounded-full w-52  bg-center bg-contain shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            {/* <img src="https://images.pexels.com/photos/6492393/pexels-photo-6492393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="h-full w-full object-cover rounded-full"
            alt="modern table with chair" /> */}
          </motion.div>
          <motion.div
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
            className="h-[20rem] w-48 lg:w-64 p-2 rounded-b-full lg:block hidden bg-contain shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.3, ease: "easeOut" },
              },
            }}
          ></motion.div>
        </div>

        

        {/*  */}
      </motion.section>

      {/* second section */}
      <div className="relative mt-24 lg:bottom-56 flex flex-wrap justify-between items-center ">
        <div className="flex gap-3 lg:gap-6">
          <SvgPatternIcon />
          <img
            src="/light.png"
            className="mt-12 shadow-xl rounded-full"
            alt="Ligt image"
          />
        </div>

       

        <div className="flex gap-3 lg:gap-6 hidden lg:flex">
          <SvgPatternIcon />
          <img
            src="/light.png"
            className="mt-12 shadow-xl rounded-full "
            alt="Ligt image"
          />
        </div>

                <motion.div
          className="h-96   flex items-center justify-evenly w-full mt-20 lg:mt-40 lg:rounded-t-full p-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 1.5, delay: 0.5, ease: "easeOut" },
            },
          }}
        >
          <div className="flex flex-col justify-center lg:gap-12 ">
          <div className="flex gap-8 lg:gap-16">
            <aside className="text-center">
              <motion.h3
                className="font-bold text-3xl lg:text-6xl font-mono text-red-600"
                variants={{
                  hidden: { scale: 0.8 },
                  visible: {
                    scale: 1,
                    transition: { duration: 1, ease: "easeOut" },
                  },
                }}
              >
                10+
              </motion.h3>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
                  },
                }}
              >
                Year of experience
              </motion.span>
            </aside>
            <aside className="text-center">
              <motion.h3
                className="font-bold text-3xl lg:text-6xl font-mono text-red-600"
                variants={{
                  hidden: { scale: 0.8 },
                  visible: {
                    scale: 1,
                    transition: { duration: 1, ease: "easeOut" },
                  },
                }}
              >
                100+
              </motion.h3>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
                  },
                }}
              >
                Completed Projects
              </motion.span>
            </aside>
          </div>
          <div className="p-2 flex justify-center items-center w-full mb-24 ">
            {/* ?input */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Make Your Dream Home</h3>
              <div className="lg:flex grid gap-y-2 items-center">
                <input
                  type="text"
                  placeholder="Enter your WhatsApp number"
                  className="input w-72 text-gray-900 placeholder:text-gray-900 placeholder:font-serif bg-gray-200 rounded-r-none"
                />
                <a href="https://api.whatsapp.com/send?phone=919747738133&text=Hi%2C%20I%20want%20to%20know%20more%20about%20Rethna%20Interiors" className="btn w-full lg:w-24 bg-black text-white lg:rounded-l-none">
                  Lets Chat
                </a>
              </div>
            </div>
            {/* ?input close */}
          </div>
          </div>
        </motion.div>

        

        {/*  */}
      </div>
    </div>
  );
}
