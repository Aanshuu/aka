import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0C090A] text-white py-8 relative bottom-0 w-full overflow-hidden">
      <div className="container mx-auto max-w-full flex justify-between items-center">
        <div className="border-t border-white flex-grow mr-10"></div>
        <div className="flex-col items-center justify-between">
          <h2 className="text-2xl font-bold text-center">A.K.A</h2>
          <h2 className="text-2xl font-bold">Designers</h2>
        </div>
        <div className="border-t border-white flex-grow ml-10"></div>
      </div>
      <div className="container mx-auto flex justify-center items-center my-10 space-x-4">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8 mr-2" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-8 h-8 mr-2" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8" />
        </a>
      </div>
      <div className="container mx-auto flex justify-center items-center mt-20">
        <div className="border-t border-white w-20 rotate-90"></div>
      </div>
    </div>
  );
};

export default Footer;
