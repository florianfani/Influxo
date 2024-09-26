import React from "react";
import influxo from "../assets/decorations/Influxo SVG.svg";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = (path: string) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="footer-wrapper px-[8%] xl:px-[16%] bg-[#e8e9eb] flex flex-col justify-between">
      <div className="justify-between xl:flex grid gap-3 py-[125px] border-b border-[#9BA4B1]">
        <div className="md:w-[20%] w-full">
          <div className="mb-5 items-end">
            <img className="w-[40%] md:w-[60%] cursor-pointer" src={influxo} alt="logo image" onClick={() => redirect("/")} />
          </div>
          <p className="text-[#6A778B] mb-8">We build readymade websites, mobile applications, and elaborate online business services</p>
        </div>

        <div className="xl:flex grid grid-cols-2 gap-3 justify-between  md:w-[70%] w-full mt-4">
          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-[#061C3D] mb-3">Quick Links</h2>
            <h2 className={`cursor-pointer hover:text-[#0B63E5] duration-300 ${isActive("/") ? "font-bold text-[#0B63E5]" : "text-[#838E9E]"}`} onClick={() => redirect("/")}>
              {isActive("/") ? "- Home" : "Home"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#0B63E5] duration-300 ${isActive("/about") ? "font-bold text-[#0B63E5]" : "text-[#838E9E]"}`} onClick={() => redirect("/about")}>
              {isActive("/about") ? "- About Us" : "About Us"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#0B63E5] duration-300 ${isActive("/services") ? "font-bold text-[#0B63E5]" : "text-[#838E9E]"}`} onClick={() => redirect("/services")}>
              {isActive("/services") ? "- Services" : "Services"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#0B63E5] duration-300 ${isActive("/projects") ? "font-bold text-[#0B63E5]" : "text-[#838E9E]"}`} onClick={() => redirect("/projects")}>
              {isActive("/projects") ? "- Projects" : "Projects"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#0B63E5] duration-300 ${isActive("/contact") ? "font-bold text-[#0B63E5]" : "text-[#838E9E]"}`} onClick={() => redirect("/contact")}>
              {isActive("/contact") ? "- Contact Us" : "Contact Us"}
            </h2>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-[#061C3D] mb-3">Services</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">UI/UX Design</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Branding</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Ilustration</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Design Concept</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">App Design</h2>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-[#061C3D] mb-3">Product</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Figma</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Adobe</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Dribble</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Behance</h2>
            <h2 className="text-[#838E9E] cursor-pointer hover:text-[#0B63E5] duration-300">Themeforest</h2>
          </div>

          <div className="flex flex-col justify-between gap-y-2">
            <div className="text-sm font-medium max-w-[80%] lg:max-w-full flex gap-x-2 items-center bg-[#1DA1F214] rounded-md text-[#061C3D] px-3 py-2 cursor-pointer hover:opacity-90 transform hover:scale-105 duration-300">
              <i className="fab fa-facebook text-[#1877F2]"></i>
              <a href="#">Facebook</a>
            </div>
            <div className="text-sm font-medium max-w-[80%] lg:max-w-full flex gap-x-2 items-center bg-[#0E76A8] rounded-md text-[#FFFFFF] px-3 py-2 cursor-pointer hover:opacity-90 transform hover:scale-105 duration-300">
              <i className="fab fa-linkedin"></i>
              <a href="#" target="_blank">
                Linkedin
              </a>
            </div>
            <div className="text-sm font-medium max-w-[80%] lg:max-w-full flex gap-x-2 items-center bg-gray-950 rounded-md px-3 py-2 cursor-pointer hover:opacity-90 transform hover:scale-105 duration-300">
              <a className="mx-auto" href="#" target="_blank">
                <i className="fab fa-x-twitter text-white"></i>
              </a>
            </div>
            <div
              className="text-sm font-medium max-w-[80%] lg:max-w-full flex gap-x-2 items-center bg-[#1DA1F214] rounded-md text-[#061C3D] px-3 py-2 cursor-pointer hover:opacity-90 transform hover:scale-105 duration-300"
              style={{
                background: "linear-gradient(45deg, rgba(255, 214, 0, 0.08) 8.39%, rgba(255, 1, 0, 0.08) 50%, rgba(216, 0, 185, 0.08) 91.61%)",
              }}
            >
              <i
                className="fab fa-instagram text-lg"
                style={{
                  background: "linear-gradient(45deg, #FFDC80, #F56040, #C13584, #833AB4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              ></i>
              <a href="https://www.instagram.com/influxoks/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 md:mb-0 md:py-8 flex justify-center">
        <span className="text-[#061C3D]">Copyright © {new Date().getFullYear()} Influxo. All Rights Reserved.</span>
      </div>
    </div>
  );
};
