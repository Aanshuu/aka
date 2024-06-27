'use client';
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0C090A] text-black py-4 flex flex-col transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-3xl font-bold p-5 text-blue-500 font-urban md:ml-40 text-nowrap">A K A</span>
        </Link>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-500 focus:outline-none p-5">
            {isOpen ? <RiCloseLargeFill  size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>
        
        {/* Navigation links for desktop */}
        <div className='hidden md:flex'>
          <ul className="flex p-2 md:mr-40">
            <li><a href="#about" className="text-blue-500 hover:text-white px-3 py-2 font-urban">About</a></li>
            <li><a href="#projects" className="text-blue-500 hover:text-white px-3 py-2 font-urban">Projects</a></li>
            <li><a href="#contact" className="text-blue-500 hover:text-white px-3 py-2 font-urban">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile view */}
      <div className={`transition-all duration-300 ease-in-out`}>
        {isOpen && (
          <div className="md:hidden bg-[#0C090A] text-white flex flex-col items-center justify-center pt-4 z-40">
            <nav className="w-full flex flex-col items-center">
              <ul className="list-none flex flex-col gap-6 text-center">
                <li>
                  <a href="#about" className="text-blue-300 text-2xl font-urban" onClick={() => setIsOpen(false)}>About</a>
                </li>
                <li>
                  <a href="#projects" className="text-blue-300 text-2xl font-urban" onClick={() => setIsOpen(false)}>Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-300 text-2xl font-urban" onClick={() => setIsOpen(false)}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
