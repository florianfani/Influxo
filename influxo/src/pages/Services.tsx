import React from "react";
import services from "../assets/services.ts";
import { useNavigate } from "react-router-dom";

const Services: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(`${path}`);
  };
  return (
    <div className="px-[8%] xl:px-[16%] bg-[#F5F6F7] py-16">
      <div>
        <div className="">
          <h2 className="text-[56px] font-bold  mb-4 leading-tight">Our Services</h2>
          <p className=" text-lg mb-12 max-w-2xl">Influxo provides a full suite of web development services, including custom design, development, and e-commerce solutions. We combine the latest technologies with industry best practices to create visually stunning and highly functional websites that drive results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="hover:scale-105 duration-300  text-black flex flex-col bg-white  p-6 rounded-2xl shadow-lg hover:shadow-2xl">
              <div className="p-4 w-[55px] flex items-center justify-center rounded-lg bg-[#F0F5FF]">
                <i className="fas fa-database text-[#0B63E5]"></i>
              </div>
              <div className="h-[80%]">
                <h3 className="text-xl font-semibold mb-2 mt-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
              </div>
              <div className="flex align-bottom h-[20%] items-end">
                <button className="text-blue-600 hover:underline" onClick={() => redirect(service.slug)}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
