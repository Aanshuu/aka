"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cards from './Cards';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row container mx-auto py-8 justify-between">
      <div className="flex flex-col justify-center mb-10 md:ml-40 text-white">
        <div className="flex text-2xl font-bold mb-4 px-10 text-start text-blue-700 sm:text-yellow-500 md:text-red-600 lg:text-green-500 xl:text-orange-600 items-start ">
          Hello, We’re
        </div>
        <div className="text-5xl font-bold text-red-500 mb-6 px-10 items-center">
          A.K.A
        </div>
        <div className="text-2xl font-semibold mb-6 px-10">
          Building Your <span className="text-blue-500">Vision</span> Into <span className="text-blue-500">Reality</span>
        </div>
        <div className="mb-8 px-10 text-lg lg:text-wrap ">
          Your One-Stop Shop to brew up a Brand-Boosting Website with <br className=''/>creativity and functionality.
        </div>
        <div className="flex space-x-4 px-10">
          <button className="bg-red-500 text-white py-2 px-4 rounded-full text-lg">About us</button>
          {/* <button className="border border-red-500 text-red-500 py-2 px-4 rounded-full">About us</button> */}
        </div>
      </div>
      <div className="md:mr-60">
        <Cards/>
      </div>
    </section>
  );
};

export default Hero;
