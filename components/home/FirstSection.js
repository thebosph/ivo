import { motion } from "framer-motion";
const FirstSection = () => {
  return (
    <div className=" lg:px-30  h-screen  mt-10 lg:mt-0 flex flex-col items-center justify-center space-y-10  ">
      <div className="flex flex-row items-center lg:mr-20 ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-ibm font-extrabold  text-6xl lg:text-9xl tracking-tightest bg-band bg-cover text-slate-800 drop-shadow-2xl p-4 "
        >
          I&apos;m Ivo
        </motion.h1>
        <div className="font-ibm font-extrabold text-6xl lg:text-9xl tracking-tightest  text-slate-600 drop-shadow-2xl ">
          Dev.
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, staggerChildren: 0.08 },
        }}
        className="space-y-2 px-2 lg:ml-44 "
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-ibm text-xl text-slate-800 drop-shadow-2xl bg-white bg-opacity-50 inline-block leading-normal  tracking-tighter  p-1 rounded-md"
        >
          Ivo is a freelance and a full-stack web developer based in Istanbul.
          He still continues to develop himself
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-ibm text-xl text-slate-800 drop-shadow-2xl bg-white bg-opacity-50 rounded-md inline-block leading-normal  tracking-tighter  px-1"
        >
          He has a special interest in Reactjs. He also enjoys being at every
          stage of web development.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="font-ibm text-xl text-slate-800 drop-shadow-2xl bg-white bg-opacity-50 rounded-md inline-block leading-normal  tracking-tighter  px-1"
        >
          He continues to develop his career in this field.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="font-ibm text-xl text-slate-800 drop-shadow-2xl bg-white bg-opacity-50 rounded-md inline-block leading-normal  tracking-tighter  px-1"
        >
          Believes in development and lifelong learning.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="font-ibm text-xl text-slate-800 drop-shadow-2xl bg-white bg-opacity-50  rounded-md inline-block leading-normal  tracking-tighter  px-1"
        >
          My stack is; JavaScript,
          <strong className="text-slate-800">ReactJs,</strong> NextJs,
          TailwindCss, ExpressJs, Mongodb
        </motion.p>

        <br />
      </motion.div>
    </div>
  );
};

export default FirstSection;
