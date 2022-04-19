import React from "react";
import Image from "next/image";
import { useScrollAction } from "../../context/ScrollContext";
import { motion } from "framer-motion";
const Card = () => {
  const { showAction, lastYposition } = useScrollAction();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: lastYposition > 800 ? 1 : 0 }}
      className="flex flex-col lg:w-1/3 justify-center bg-white -lg h-96  drop-shadow-2xl rounded-md divide-y-[1px] "
    >
      <Image
        src="/img/nasa.jpeg"
        className="w-full"
        width="140"
        height="140"
        layout="responsive"
      />
      <div className="font-ibm font-extralight tracking-normal text-4xl text-center drop-shadow-2xl ">
        Header
      </div>

      <div className="p-2 text-black text-ibm font-extralight  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam..
      </div>
      <span className="self-end p-2 font-ibm "> Read more...</span>
    </motion.div>
  );
};

export default Card;
