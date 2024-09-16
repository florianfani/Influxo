import React from "react";

// The background color of the footer will change to its original color.. this is a demo

export const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper px-[16%] bg-[#e8e9eb]">
      <div className="justify-between flex py-[125px] border-b border-[#9BA4B1]">
        <div className="w-[20%] ">
          <h2 className="text-[#061C3D] text-4xl font-medium mb-5">influxo</h2>
          <p className="text-[#6A778B] mb-5">
            We build readymade websites, mobile applications, and elaborate
            online business services
          </p>
          <div className="flex gap-x-5">
            <h2 className="text-[#061C3D] text-sm font-medium">Light Mode</h2>
            <h2 className="text-[#9BA4B1] text-sm">Dark Mode</h2>
          </div>
        </div>

        <div className="flex justify-between w-[70%]">
          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-[#061C3D] mb-3">Quick Links</h2>
            <h2 className="text-[#838E9E]">- Portfolio</h2>
            <h2 className="text-[#838E9E]">About</h2>
            <h2 className="text-[#838E9E]">Services</h2>
            <h2 className="text-[#838E9E]">Pricing Plans</h2>
            <h2 className="text-[#838E9E]">Contact</h2>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-[#061C3D] mb-3">Services</h2>
            <h2 className="text-[#838E9E]">UI/UX Design</h2>
            <h2 className="text-[#838E9E]">Branding</h2>
            <h2 className="text-[#838E9E]">Ilustration</h2>
            <h2 className="text-[#838E9E]">Design Concept</h2>
            <h2 className="text-[#838E9E]">App Design</h2>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-[#061C3D] mb-3">Product</h2>
            <h2 className="text-[#838E9E]">Figma</h2>
            <h2 className="text-[#838E9E]">Adobe</h2>
            <h2 className="text-[#838E9E]">Dribble</h2>
            <h2 className="text-[#838E9E]">Behance</h2>
            <h2 className="text-[#838E9E]">Themeforest</h2>
          </div>

          <div className="flex flex-col justify-between gap-y-2">
            <button className="text-sm font-medium bg-[#1DA1F214] rounded-md text-[#061C3D] px-3 py-2 hover:opacity-90 transform hover:scale-105 duration-300">
              Facebook
            </button>
            <button className="text-sm font-medium bg-[#0E76A8] rounded-md text-[#FFFFFF] px-3 py-2 hover:opacity-90 transform hover:scale-105 duration-300">
              Linkedin
            </button>
            <button className="text-sm font-medium bg-[#1DA1F214] rounded-md text-[#061C3D] px-3 py-2 hover:opacity-90 transform hover:scale-105 duration-300">
              X
            </button>
            <button
              className="text-sm font-medium bg-[#1DA1F214] rounded-md text-[#061C3D] px-3 py-2 hover:opacity-90 transform hover:scale-105 duration-300"
              style={{
                background:
                  "linear-gradient(45deg, rgba(255, 214, 0, 0.08) 8.39%, rgba(255, 1, 0, 0.08) 50%, rgba(216, 0, 185, 0.08) 91.61%)",
              }}
            >
              Instagram
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 flex justify-center">
        <span className="text-[#061C3D]">
          Copyright © {new Date().getFullYear()} Influxo. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};
