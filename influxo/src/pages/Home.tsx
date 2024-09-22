import React from "react";
import ProjectsSection from "../components/ProjectsSection";
import AboutUs from "../components/AboutUs";
import ServicesHome from "../components/ServicesHome";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../lotties/animation.json";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <div className="min-h-screen bg-white flex flex-col items-center overflow-hidden">
        <div className="z-10 w-full mx-auto px-[5%] lg:px-[16%] py-12 flex flex-col lg:flex-row items-center justify-between">
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

          {/* Right Section - Animation */}
          <div className="lg:w-1/2 md:mt-12 lg:mt-0 md:mr-12">
            <div className="hidden md:block">
              <Lottie
                isClickToPauseDisabled={true}
                options={defaultOptions}
                height={600}
                width={1000}
              />
            </div>
            <div className=" md:hidden">
              <Lottie
                isClickToPauseDisabled={true}
                options={defaultOptions}
                height={300}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-24">
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
