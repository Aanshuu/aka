import React from "react";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ data, close }) => {
  const { imageUrl, price, address, description, numBedroom, numWashrooms, livingSpace, link } = data;

  const modalVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-4/5 max-w-7xl h-4/5 max-h-screen" variants={modalVariants} onClick={(e) => e.stopPropagation()}>
      <motion.img className="rounded-xl object-cover w-full md:w-2/3 md:ml-20 md:mt-20 md:mb-20" alt="real estate mansion" src={imageUrl} variants={imageVariants}/>
      <motion.div className="flex flex-col p-8 w-full md:w-1/3" variants={modalInfoVariants}>
        <motion.div className="text-3xl font-bold mb-5" variants={modalRowVariants}>{price}</motion.div>
        {/* <motion.div className="text-xl text-gray-600" variants={modalRowVariants}>{address}</motion.div> */}
        <motion.div className="flex items-center" variants={modalRowVariants}>
          <Feature iconName="FaGithub"/>
          {/* <Feature iconName="FaShower" iconLabel={numWashrooms} /> */}
          <Feature iconName="FaLink" iconLabel={livingSpace} onClick={() => window.open(link, '_blank')}/>
        </motion.div>
        <motion.div className="mt-4 overflow-y-auto" variants={modalRowVariants}>
          <p className="text-lg text-gray-600">{description}</p>
        </motion.div>
        <motion.button className="absolute top-4 right-4 cursor-pointer text-gray-500" whileHover={{ scale: 1.2 }} onClick={close}>
          <IoCloseCircleOutline className="w-10 h-10" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
