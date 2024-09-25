import React from "react";
import WorkTogetherSVG from "../assets/decorations/SVG/WorkTogether.svg";
import { useNavigate } from "react-router-dom";

const WorkTogether: React.FC = () => {
  const navigate = useNavigate();

  const redirectToContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };
  return (
    <div className="flex items-center justify-center w-full md:h-[500px] h-[800px] bg-[#061C3D] text-white">
      <div className="grid md:flex items-center justify-center p-6 w-[80%]">
        <div className="mr-6 md:w-1/2 w-full flex justify-center items-center">
          <img src={WorkTogetherSVG} alt="Illustration" className="md:w-96 max-w-full max-h-full md:h-auto" />
        </div>
        <div className="ml-6 md:ml-16 md:w-1/2 w-full">
          <h1 className="md:text-[56px] text-[36px] font-bold mb-4 leading-tight">Have a project idea! Let’s work together.</h1>
          <p className="text-[18px]  mb-6">
            Leading digital agency with solid design and development expertise.
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            We build readymade websites, mobile applications, and elaborate online business services.
          </p>
          <button className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300" onClick={redirectToContact}>
            Let's Work Together →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
