import React from "react";
import AboutImage from "../assets/decorations/SVG/chatbot1.svg";
import cpu from "../assets/decorations/Cpu.svg";
import stack from "../assets/decorations/Stack.svg";

const AboutUs: React.FC = () => {
  return (
    <div className="px-[8%] lg:px-0 lg:pl-[16%] lg:pr-[8%] flex flex-col lg:flex-row justify-between mb-[124px]">
      <div className="left-side lg:w-[45%] ">
        <div>
          <h2 className="text-[#061C3D] font-bold text-4xl lg:text-[56px]">About Us</h2>
          <p className="text-[#42526B] mt-4">
            At Influxo, we specialize in transforming ideas into exceptional web experiences. Our team of experts combines advanced development techniques with creative solutions to deliver websites that not only{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            look great but also perform flawlessly. We’re passionate about crafting{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            digital experiences that elevate your brand and drive success.
          </p>
        </div>
        <div className="p-6 bg-[#FFF9EE] mt-8 rounded-2xl">
          <div className="flex items-start mb-4 border-b border-[#9BA4B1]">
            <div className="text-[#E53E3E] text-3xl mr-5">
              <img src={stack} alt="" className="w-[150px] lg:w-[100px]" />
            </div>
            <div>
              <h3 className="text-[#061C3D] font-semibold text-lg">Why Influxo Leads the Way in Web Development Excellence</h3>
              <p className="text-[#42526B] mt-2 mb-5">Our team creates custom solutions that merge advanced technology with creative design, ensuring your website performs seamlessly and captivates your audience.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-[#0B63E5] text-2xl mr-4">
              <img src={cpu} alt="" className="w-[100px] lg:w-[70px]" />
            </div>
            <div>
              <h3 className="text-[#061C3D] font-semibold text-lg">Influxo's Edge: How We Deliver Superior Web Development Results</h3>
              <p className="text-[#42526B] mt-2">Influxo delivers superior web development by combining cutting-edge technology with creative design.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side hidden lg:flex items-center ">
        <img src={AboutImage} alt="About Us" className="lg:w-[600px]" />
      </div>
    </div>
  );
};

export default AboutUs;
