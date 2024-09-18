import React from "react";
import man1 from "../assets/decorations/portrait-smiling-1.svg";
import snake from "../assets/decorations/snake-line.svg";
import home1 from "../assets/decorations/home-small-1.svg";
import home2 from "../assets/decorations/home-small-2.svg";
import home3 from "../assets/decorations/home-small-3.svg";
import ProjectsSection from "../components/ProjectsSection";
import AboutUs from "../components/AboutUs";
import ServicesHome from "../components/ServicesHome";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };
  return (
    <div className="">
      <div className="relative min-h-screen bg-white flex flex-col items-center  overflow-hidden">
        {/* Curly snake-like line (SVG) */}
        <div className="absolute inset-0">
          <img src={snake} alt="" />
        </div>

        <div className="relative z-10 w-full mx-auto pl-[16%] py-16 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <span className="bg-[#FFE9BD] text-[#061C3D] py-2 px-5 rounded-full text-sm font-semibold tracking-widest">
              WELCOME TO INFLUXO
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#061C3D] mt-4 leading-tight">
              Web Development &<br />
              Innovative Solutions
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Transforming ideas into exceptional web experiences with
              cutting-edge development and creative solutions.
            </p>
            <button
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => redirect("/contact")}
            >
              Contact Us
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            {/* Purple Gradient Behind Man */}
            <div className="absolute inset-0 w-[115%] h-[75.5%] bg-gradient-to-r from-purple-300 to-purple-100 filter  opacity-95 z-0 transform -translate-x-1/8 translate-y-[20%]"></div>

            {/* Image of the smiling man */}
            <img
              src={man1}
              alt="Developer with laptop"
              className="rounded-lg relative z-10"
            />

            {/* Floating icons around the image */}
            <div className="absolute top-6 -left-10 w-100 h-100 bg-transparent transform -translate-x-4 -translate-y-4">
              <img src={home1} alt="Icon 1" />
            </div>
            <div className="absolute top-6 right-8 w-100 h-100 bg-transparent transform translate-x-4">
              <img src={home2} alt="Icon 2" />
            </div>
            <div className="absolute -bottom-8  w-100 h-100 bg-transparent transform -translate-x-8 translate-y-8">
              <img src={home3} alt="Icon 3" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <ServicesHome />
      </div>
      <div>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;
