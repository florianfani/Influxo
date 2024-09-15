import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper flex justify-between px-[16%] py-7">
      <div>
        <h1 className="text-4xl font-medium text-[#061C3D] font-lexend">
          influxo
        </h1>
      </div>
      <div className="flex gap-x-10 items-center">
        <h2 className="text-[#42526B] cursor-pointer font-lexend hover:text-[#0B63E5] hover:duration-300 duration-300">
          Home
        </h2>
        <h2 className="text-[#42526B] cursor-pointer font-lexend hover:text-[#0B63E5] hover:duration-300 duration-300">
          Projects
        </h2>
        <h2 className="text-[#42526B] cursor-pointer font-lexend hover:text-[#0B63E5] hover:duration-300 duration-300">
          Services
        </h2>
        <h2 className="text-[#42526B] cursor-pointer font-lexend hover:text-[#0B63E5] hover:duration-300 duration-300">
          About Us
        </h2>
        <button className="bg-[#0B63E5] font-lexend rounded-md px-[20px] duration-300 py-[10px] text-[#FFFFFF] font-medium hover:cursor-pointer hover:opacity-80 transform hover:scale-105">
          Contact
        </button>
      </div>
    </div>
  );
};
