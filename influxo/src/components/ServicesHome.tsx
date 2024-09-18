import React from "react";
import shape from "../assets/decorations/Shape.svg";
import curly from "../assets/decorations/curly-shape.svg";
import { useNavigate } from "react-router-dom";
//import { FaPencilRuler, FaMobileAlt, FaCode, FaShoppingCart } from "react-icons/fa";

const ServicesHome: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };
  return (
    <div className="relative">
      <div
        className="relative bg-[#094FB7] h-[80vh] text-white py-16"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 550px, 0 650px)" }}
      >
        <div className="absolute inset-0  mr-[80%] -top-36 justify-center items-center overflow-hidden">
          <img
            src={curly}
            alt="Background Shape"
            className="w-[700px] h-[700px]"
          />
        </div>
        <div className="absolute inset-0 flex ml-[70%] justify-center items-center overflow-hidden">
          <img
            src={shape}
            alt="Background Shape"
            className="w-[700px] h-[700px]"
          />
        </div>
        <div className="relative mx-auto px-[16%]">
          <h2 className="text-[56px] font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Influxo provides a full suite of web development services, including
            custom design, development, and e-commerce solutions. We combine the
            latest technologies with industry best practices to create visually
            stunning and highly functional websites that drive results.
          </p>
        </div>
      </div>
      <div className="relative mx-auto px-[16%] -mt-[430px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white hover:scale-105 duration-300 text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl flex items-start">
            <div className="mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nam nec tortor massa. Praesent cursus
                porttitor egestas.
              </p>
              <button
                onClick={() => redirect("/services/ui-ux-design")}
                className="text-blue-600 hover:underline flex items-center"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="bg-white hover:scale-105 duration-300 text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl flex items-start">
            <div className="mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nam nec tortor massa. Praesent cursus
                porttitor egestas.
              </p>
              <button
                onClick={() => redirect("/services/mobile")}
                className="text-blue-600 hover:underline flex items-center"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="bg-white hover:scale-105 duration-300 text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl flex items-start">
            <div className="mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nam nec tortor massa. Praesent cursus
                porttitor egestas.
              </p>
              <button
                onClick={() => redirect("/services/web")}
                className="text-blue-600 hover:underline flex items-center"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="bg-white hover:scale-105 duration-300 text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl flex items-start">
            <div className="mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                E-Commerce Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nam nec tortor massa. Praesent cursus
                porttitor egestas.
              </p>
              <button
                onClick={() => redirect("/services/e-commerce")}
                className="text-blue-600 hover:underline flex items-center"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .bg-[#094FB7] {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default ServicesHome;
