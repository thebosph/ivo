import { motion, useAnimation } from "framer-motion";
import { useScrollAction } from "../../context/ScrollContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Form from "../Contact/Form";

const variants = {
  visible: {
    opacity: 1,

    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0 },
};
const containerVariants = {
  visible: {},
};
const BlogSection = () => {
  const { showAction, lastYposition } = useScrollAction();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={{
        backgroundColor: inView ? "#FF6363" : "#FFFFFF",
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen lg:px-60  flex flex-col  items-center justify-center  space-y-5 xl:py-5"
    >
      <motion.h2
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="text-6xl lg:text-9xl xl:text-7xl text-slate-800 font-ibm tracking-tightest font-extrabold p-4 rounded-md drop-shadow-2xl bg-band bg-cover      inline-block  "
      >
        {" "}
        Contact
      </motion.h2>
      <div className="flex items-center xl:justify-center w-full space-x-10 ">
        {/* <div className=" w-1/4 flex flex-col space-y-10    justify-around">
          <span className="bg-white  bg-cover text-slate-800 text-ibm font-bold tracking-tight   inline-block p-4 rounded-md text-md ">
            ibrahimsimsek01@gmail.com{" "}
          </span>
          <span className="bg-white  bg-cover text-slate-800 text-ibm font-bold tracking-tight   inline-block p-4 rounded-md text-md">
            Upwork Profile{" "}
          </span>
          <span className="bg-white  bg-cover text-slate-800 text-ibm font-bold tracking-tight   inline-block p-4 rounded-md text-md">
            Freelancer Profile{" "}
          </span>
        </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="w-full 2xl:w-2/3 xl:w-full  bg-white rounded-md h-max"
        >
          <Form />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogSection;
