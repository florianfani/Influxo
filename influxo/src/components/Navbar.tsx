import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import influxo from "../assets/decorations/Influxo SVG.svg";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="navbar-wrapper flex justify-between px-[16%] py-7">
      <div className="">
        <img
          className="w-[40%] cursor-pointer"
          src={influxo}
          alt="logo image"
          onClick={() => redirect("/")}
        />
      </div>
      <div className="flex gap-x-10 items-center">
        <h2
          className={`cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300 ${
            isActive("/") ? "font-bold text-[#0B63E5]" : "text-[#42526B]"
          }`}
          onClick={() => redirect("/")}
        >
          Home
        </h2>
        <h2
          className={`cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300 ${
            isActive("/projects")
              ? "font-bold text-[#0B63E5]"
              : "text-[#42526B]"
          }`}
          onClick={() => redirect("/projects")}
        >
          Projects
        </h2>
        <h2
          className={`cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300 ${
            isActive("/services")
              ? "font-bold text-[#0B63E5]"
              : "text-[#42526B]"
          }`}
          onClick={() => redirect("/services")}
        >
          Services
        </h2>
        <h2
          className={`cursor-pointer hover:text-[#0B63E5] hover:duration-300 duration-300 ${
            isActive("/about") ? "font-bold text-[#0B63E5]" : "text-[#42526B]"
          }`}
          onClick={() => redirect("/about")}
        >
          About Us
        </h2>
        <button
          className={`bg-[#0B63E5] rounded-md px-[20px] duration-300 py-[10px] text-[#FFFFFF] font-medium hover:cursor-pointer hover:opacity-80 transform hover:scale-105 ${
            isActive("/contact") ? "font-bold text-[#0B63E5]" : ""
          }`}
          onClick={() => redirect("/contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};
