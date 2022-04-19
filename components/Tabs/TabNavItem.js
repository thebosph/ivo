import { motion } from "framer-motion";

const TabNavItem = ({ id, title, activeTab, setActiveTab, img }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <motion.li
      animate={{ backgroundColor: activeTab === id ? "#F8B400" : "#FFFFFF" }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
      className={`${
        activeTab === id ? "" : ""
      }  rounded-md items-center flex justify-center text-sm w-full cursor-pointer text-center lg:p-2 shadow-xl`}
    >
      <h2>{title}</h2>
    </motion.li>
  );
};
export default TabNavItem;
