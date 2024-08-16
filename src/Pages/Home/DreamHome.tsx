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
          visible: { opacity: 1, y: 0, transition: { duration: 1 } }
        }}
      >
        <div className="flex gap-12 lg:gap-28">
          <motion.div
          style={{backgroundImage: `url("https://images.pexels.com/photos/6492393/pexels-photo-6492393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
            className="relative bottom-32 lg:bottom-56 h-[30rem] rounded-full w-52  bg-center bg-contain shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
            }}
          >
            {/* <img src="https://images.pexels.com/photos/6492393/pexels-photo-6492393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="h-full w-full object-cover rounded-full"
            alt="modern table with chair" /> */}

          </motion.div>
          <motion.div
          style={{backgroundImage: `url("https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
            className="h-[20rem] w-48 lg:w-64 p-2 rounded-b-full lg:block hidden bg-contain shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: "easeOut" } }
            }}
          ></motion.div>
        </div>

        <motion.div
          className="h-96   flex items-center justify-evenly w-full "
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.5, delay: 0.5, ease: "easeOut" } }
          }}
        >
          <aside className="text-center">
            <motion.h3
              className="font-bold text-6xl font-mono"
              variants={{
                hidden: { scale: 0.8 },
                visible: { scale: 1, transition: { duration: 1, ease: "easeOut" } }
              }}
            >
              24
            </motion.h3>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: "easeOut" } }
              }}
            >
              Year of experience
            </motion.span>
          </aside>
          <aside className="text-center">
            <motion.h3
              className="font-bold text-6xl font-mono"
              variants={{
                hidden: { scale: 0.8 },
                visible: { scale: 1, transition: { duration: 1, ease: "easeOut" } }
              }}
            >
              162
            </motion.h3>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: "easeOut" } }
              }}
            >
              Completed Projects
            </motion.span>
          </aside>
        </motion.div>
      </motion.section>

      {/* second section */}
      <div className="relative mt-24 bottom-56 flex flex-wrap justify-between items-center ">
        <div className="flex gap-32 lg:gap-6">
        <SvgPatternIcon/>
        <img src="/light.png" className="mt-12 shadow-xl rounded-full" alt="Ligt image" />
        </div>

        <div>
          <img src="/arrow.svg" className="hidden lg:block" alt="Arrow Image" />

        </div>

        <div className="p-2 flex justify-center items-center w-full">
            <div>
            <h3 className="text-2xl font-bold">Make Your Dream Home</h3>
            <div className="flex items-center">
                <input type="text" placeholder="your email address" className="input text-gray-900 placeholder:text-gray-900 placeholder:font-serif bg-gray-200 rounded-r-none" />
                <button className="btn bg-black text-white rounded-l-none">Lets Chat</button>
            </div>
            </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
