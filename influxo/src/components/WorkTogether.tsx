import React from "react";
import WorkTogetherSVG from "../assets/decorations/SVG/WorkTogether.svg";
import { useNavigate } from "react-router-dom";

const WorkTogether: React.FC = () => {
  const navigate = useNavigate();

  const redirectToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="flex items-center justify-center w-full h-[500px] bg-[#061C3D] text-white">
      <div className="flex items-center justify-center p-6 w-[80%]">
        <div className="mr-6 w-1/2 flex justify-center items-center">
          <img
            src={WorkTogetherSVG}
            alt="Illustration"
            className="w-96 h-auto"
          />
        </div>
        <div className="ml-16 w-1/2">
          <h1 className="text-[56px] font-bold mb-4">
            Have a project idea! Let’s work together.
          </h1>
          <p className="text-[18px] mb-6">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300"
            onClick={redirectToContact}
          >
            Let's Work Together →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
