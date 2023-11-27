import React from "react";
import { motion, useCycle } from "framer-motion";

const loadVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 1,
      },
      y: {
        repeat: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loadVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;
