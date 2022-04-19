import FirstSection from "../components/home/FirstSection";
import SecondSection from "../components/home/SecondSection";
import BlogSection from "../components/home/BlogSection";
import { motion } from "framer-motion";
import { useScrollAction } from "../context/ScrollContext";

export default function Home() {
  const { lastYposition } = useScrollAction();
  return (
    <motion.div
      animate={{
        backgroundColor: lastYposition ? "#F8B400" : "#FFFFFF",
      }}
      transition={{
        duration: 0.5,
      }}
      className=" flex flex-col"
    >
      <FirstSection />
      <SecondSection />
      <BlogSection />
    </motion.div>
  );
}
