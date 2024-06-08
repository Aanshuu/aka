import React from "react";
import { motion } from "framer-motion";

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={close}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
