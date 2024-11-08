import React, { useRef, useState } from "react";
import services from "../assets/services.ts";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/decorations/ArrowLeft.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesHome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next), // Update current slide index
    appendDots: (dots: React.ReactNode) => {
      const totalDots = React.Children.count(dots);
      const currentDotIndex = currentSlide % totalDots; // Calculate the current dot index based on the total number of dots

      // Calculate the indices for the 3 dots to show
      const start = Math.floor(currentDotIndex / 5) * 5; // Start from the current group of 5
      const end = Math.min(start + 5, totalDots); // Ensure we don't exceed total dots

      return (
        <div>
          <ul style={{ display: "flex", justifyContent: "center" }}>
            {React.Children.toArray(dots).slice(start, end)}{" "}
            {/* Show 5 dots based on the current slide */}
          </ul>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="px-[8%] xl:px-[16%]">
      <div className="flex flex-col lg:flex-row justify-between mb-8">
        <h2 className="text-3xl font-bold mb-5 lg:mb-0">
          Explore our influxo team services.
        </h2>
        <button
          className="bg-[#F0F5FF] text-[#0B63E5] font-bold py-2 px-4 rounded-lg w-[200px] hover:bg-blue-600 hover:text-white text-center text-md duration-300"
          onClick={() => redirect(`services`)}
        >
          View All Services
          <i className="fas fa-arrow-right text-sm ml-2"></i>
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {services.map((service, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-300 w-[350px] h-[350px] text-black flex-col p-6 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            <div className="p-4 w-[55px] flex items-center justify-center rounded-lg mb-4 bg-[#F0F5FF]">
              <i className="fas fa-database text-[#0B63E5]"></i>
            </div>
            <div className="h-[80%]">
              <h3 className="text-xl font-semibold mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4  line-clamp-5">
                {service.shortDescription}
              </p>
            </div>
            <div className="flex align-bottom h-[2%] items-end">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => redirect(`/services/${service.slug}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center hidden absolute lg:flex justify-center gap-x-5 -mt-5 w-[85vw] xl:w-[67.5vw]">
        <button
          className="button p-3 rounded-lg hover:scale-105 duration-300 bg-[#F0F5FF]"
          onClick={previous}
        >
          <img src={arrow} alt="" />
        </button>
        <button
          className="button p-3 rounded-lg hover:scale-105 duration-300 bg-[#F0F5FF]"
          onClick={next}
        >
          <img src={arrow} className="rotate-180" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ServicesHome;
