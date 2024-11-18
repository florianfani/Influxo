import React, { useEffect, useState } from "react";
import ProjectsSection from "../components/ProjectsSection";
import AboutUs from "../components/AboutUs";
import ServicesHome from "../components/ServicesHome";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../lotties/animation.json";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [playAnimation, setPlayAnimation] = useState(true);

  const redirect = (path: string) => {
    navigate(path);
  };

  const defaultOptions = {
    loop: true, // Keep looping
    autoplay: true, // Start playing automatically
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayAnimation((prevPlayAnimation) => !prevPlayAnimation); // Toggle play and pause every 5 seconds
    }, 8000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="">
      <div className="min-h-screen bg-white flex flex-col items-center overflow-hidden pb-56 lg:pb-0">
        <div className="z-10 w-full mx-auto px-[8%] xl:px-[16%] py-12 flex flex-col lg:flex-row items-center justify-between">
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
            <div className="w-[400px] h-[300px] lg:w-[1000px] lg:h-[600px]">
              <Lottie
                isClickToPauseDisabled={true}
                options={{
                  ...defaultOptions,
                  autoplay: playAnimation,
                }}
                isPaused={!playAnimation}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-56 lg:-mt-24">
        <AboutUs />
      </div>
      <div>
        <ServicesHome />
      </div>

      <div>
        <ProjectsSection amount={3} />
      </div>
    </div>
  );
};

export default Home;
