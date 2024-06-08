import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-[#0C090A] text-black py-4 flex">
      <div className="container mx-auto flex justify-between items-center">
      <span className="text-3xl font-bold p-5 text-blue-500 font-urban md:ml-40 text-nowrap">A K A</span>
        <div>
          <ul className="flex p-2 md:mr-40">
              <li><a href="#about" className="text-blue-500 hover:text-white px-3 py-2 font-urban ">About</a></li>
              <li><a href="#projects" className="text-blue-500 hover:text-white px-3 py-2 font-urban">Projects</a></li>
              <li><a href="#contact" className="text-blue-500 hover:text-white px-3 py-2 font-urban">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
