import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import influxo from "../assets/decorations/Influxo SVG.svg";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const redirect = (path: string) => {
    navigate(path);
    setIsDrawerOpen(false); // Close drawer on navigation
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
      <div className="gap-x-10 items-center hidden md:flex">
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
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isDrawerOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center py-10">
          <button
            className="self-end mr-10"
            onClick={() => setIsDrawerOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
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
      )}
    </div>
  );
};
