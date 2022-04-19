import { motion } from "framer-motion";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: activeTab ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="h-full  items-center flex transition-all"
    >
      {children}
    </motion.div>
  ) : null;
};

export default TabContent;
