import React from "react";
import Insta from "./Icons/insta";
import Github from "./Icons/github";
import Twitter from "./Icons/twitter";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-white bg-opacity-0 lg:flex-row     ">
      <div className=" w-full lg:w-1/6 p-4  fixed bg-white z-50 lg:bg-opacity-0 left-0 top-0 lg:left-2 lg:top-2 flex justify-between lg:flex-col  items-center space-y-5 ">
        <motion.img
          src="/img/man.png"
          initial={{ rotate: -360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 2 }}
          className=" w-20  lg:w-40 lg:h-40  bg-white  drop-shadow-xl rounded-full  lg:block"
        ></motion.img>

        <div className="flex space-x-2 ">
          <div className="p-2 bg-white  rounded-lg flex items-center">
            <Insta />
          </div>
          <div className="p-2 bg-white  rounded-lg flex items-center">
            <Github />
          </div>
          <div className="p-2 bg-white  rounded-lg flex items-center">
            <Twitter />
          </div>
        </div>
      </div>
      <div className="h-screen ">{children}</div>
    </div>
  );
};

export default Layout;
