import { motion, useAnimation } from "framer-motion";
import { useScrollAction } from "../../context/ScrollContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Tabs from "../Tabs";

const variants = {
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
  hidden: { opacity: 0 },
};

const SecondSection = () => {
  const { showAction } = useScrollAction();
  const controls = useAnimation();
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className=" bg-white h-screen lg:h-auto  flex flex-col items-center  lg:space-y-10 lg:justify-center overflow-scroll scrollbar-hide   py-40">
      <motion.h2
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="drop-shadow-2xl text-6xl  lg:text-9xl font-ibm font-extrabold tracking-tighter leading-normal  text-slate-800 "
      >
        My Services
      </motion.h2>
      <div className="w-4/6 lg:h-60 h-96">
        <Tabs />
      </div>
    </section>
  );
};

export default SecondSection;
