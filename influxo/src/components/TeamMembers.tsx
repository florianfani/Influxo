import { useRef } from "react";
import teamMembers from "../assets/teamMembers";
import arrow from "../assets/decorations/ArrowLeft.svg";
import Slider from "react-slick"; // Ensure you have this import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamMembers: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null); // Define the type of sliderRef

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
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
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 px-[8%] xl:px-[16%] bg-[#F0F5FF]">
      <h2 className="text-center text-4xl font-bold mb-6">
        Say hello to our team members
      </h2>
      <p className="text-center text-md text-[#42526B] mb-10">
        We are a group of passionate and skilled professionals dedicated to
        bringing your digital projects to life. At Influxo, we believe that the
        magic happens when creativity meets technical expertise. Our team
        thrives on collaboration, combining diverse skills in web development,
        UI/UX design, and strategic problem-solving to deliver exceptional
        results
      </p>
      <Slider ref={sliderRef} {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex justify-center gap-10">
            <div className="bg-white p-4  rounded-2xl shadow-lg text-center relative group w-[355px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 rounded-xl mb-4 object-cover"
              />
              <div className="justify-center gap-4 mb-4 absolute top-[60%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    className="text-white hover:text-gray-900 text-2xl p-2 rounded-md bg-[rgba(0,0,0,0.5)]  hover:bg-[rgba(255,255,255,0.5)]  shadow-md"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    className="text-white hover:text-gray-900 text-2xl p-2 rounded-md bg-[rgba(0,0,0,0.5)]  hover:bg-[rgba(255,255,255,0.5)] shadow-md"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    className="text-white hover:text-gray-900 text-2xl p-2 rounded-md bg-[rgba(0,0,0,0.5)]  hover:bg-[rgba(255,255,255,0.5)] shadow-md"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    className="text-white hover:text-gray-900 text-2xl p-2 rounded-md bg-[rgba(0,0,0,0.5)]  hover:bg-[rgba(255,255,255,0.5)] shadow-md"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-md text-[#42526B]">{member.role}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center hidden lg:flex justify-center ml-9 md:ml-0 gap-x-5 mt-5 w-[85vw] xl:w-[67.5vw]">
        <button
          className="button p-3 rounded-lg hover:scale-105 duration-300 bg-[#F0F5FF]"
          onClick={handlePrevious}
        >
          <img src={arrow} alt="Previous" />
        </button>
        <button
          className="button p-3 rounded-lg hover:scale-105 duration-300 bg-[#F0F5FF]"
          onClick={handleNext}
        >
          <img src={arrow} className="rotate-180" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default TeamMembers;
