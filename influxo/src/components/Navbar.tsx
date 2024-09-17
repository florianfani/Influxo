import React from "react";
import { useNavigate } from "react-router-dom";
import influxo from "../assets/decorations/Influxo SVG.svg";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="navbar-wrapper flex justify-between px-[16%] py-7">
      <div className="">
        <img className="w-[40%]" src={influxo} alt="logo image" />
      </div>
      <div className="flex gap-x-10 items-center">
        <h2 className="text-[#42526B] cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300">
          Home
        </h2>
        <h2
          className="text-[#42526B] cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300"
          onClick={() => redirect("/projects")}
        >
          Projects
        </h2>
        <h2 className="text-[#42526B] cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300">
          Services
        </h2>
        <h2 className="text-[#42526B] cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300">
          About Us
        </h2>
        <button
          className="bg-[#0B63E5] rounded-md px-[20px] duration-300 py-[10px] text-[#FFFFFF] font-medium hover:cursor-pointer hover:opacity-80 transform hover:scale-105"
          onClick={() => redirect("/contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};
