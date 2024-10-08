import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundIMG from "../assets/decorations/404.png";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="px-[8%] xl:px-[16%]  flex flex-col lg:flex-row items-center justify-between h-[90vh]">
      <div className="">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#061C3D]  ">
          <br />
          OPPS! PAGE NOT FOUND
        </h1>
        <p className="text-lg text-gray-600 mt-4">Something went wrong. It looks like your requested link could not be found. It looks like the link is broken or the page is removed.</p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => redirect("/")}>
          Back Home
        </button>
      </div>
      <div className="-mt-[62px] md:-mt-24">
        <img src={NotFoundIMG} alt="" className="w-[270px] md:w-[370px] lg:w-[1000px]" />
      </div>
    </div>
  );
};
