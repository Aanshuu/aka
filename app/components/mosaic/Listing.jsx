import React from "react";
import Feature from "./Feature";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } = data;
  const handleClick = () => {
    alert('Icon clicked!');
  };
  return (
    <motion.div
      className="relative m-5 cursor-pointer shadow-lg bg-white rounded-lg overflow-hidden w-1/4 min-w-[300px] max-w-[400px]"
      onClick={open}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-full h-0 pb-[125%] overflow-hidden">
        <img className="absolute w-full h-full object-cover" alt="real estate mansion" src={imageUrl} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-lg p-6 flex flex-col justify-evenly bg-[#000000] shadow-sm shadow-[#7DF9FF]">
        <img className="rounded-lg" src={imageUrl}></img>
        <div className="text-xl font-semibold text-white">{price}</div>
        <div className="text-gray-600">{address}</div>
        <div className="flex items-center">
          <Feature iconName="FaGithub" onClick={handleClick}/>
          <Feature iconName="FaLink" iconLabel={livingSpace} onClick={() => window.open('https://google.com', '_blank')}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
