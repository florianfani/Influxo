import { useNavigate } from "react-router-dom";
import Projects1 from "../assets/decorations/SVG/Projects1.svg";
import Projects2 from "../assets/decorations/SVG/Projects2.svg";
import Projects3 from "../assets/decorations/SVG/Projects3.svg";
import WorkTogether from "../components/WorkTogether";
const ProjectsSection = () => {
  const navigate = useNavigate();

  const redirect = (id: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/projects/${id}`);
  };
  return (
    <div className="mt-32">
      <div className="projects-wrapper px-[5%] lg:px-[16%] py-10">
        <h2 className="text-4xl font-bold mb-8">Our featured projects</h2>
        <div className="flex flex-col justify-center items-center gap-16 mt-16">
          <div className="project-item flex flex-col lg:flex-row gap-4">
            <img
              src={Projects1}
              alt="Project 1"
              className="w-full lg:w-1/2 rounded-lg"
            />
            <div className="project-info flex flex-col">
              <div className="m-0 lg:ml-10">
                <h3 className="text-[32px] font-semibold mb-2 flex flex-col">
                  <span className="text-xs">
                    Creative Direction / UX/UI / Website Design / Icon Design
                  </span>
                  PMR — online platform & responsive website design
                </h3>
                <p className="text-gray-600 mb-4">
                  Less Doing, More Living was a conference about productivity
                  and entrepreneurship hosted by Ari Meisel, author of two
                  bestselling books: "The Art of Less Doing" and "The
                  Replaceable Founder".
                </p>
                <button
                  className="bg-[#F0F5FF] text-[#0B63E5] font-bold py-2 px-4 rounded-lg w-[200px] hover:bg-blue-600 hover:text-white text-center text-md duration-300"
                  onClick={() => redirect(1)}
                >
                  View Case Study
                  <i className="fas fa-arrow-right text-sm ml-2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="project-item flex flex-col lg:flex-row gap-4">
            <div className="project-info flex flex-col">
              <div className="m-0 lg:mr-10">
                <h3 className="text-[32px] font-semibold mb-2 flex flex-col">
                  <span className="text-xs">
                    UX/UI / Photography / Website Design
                  </span>
                  Triniso — responsive eCommerce website design
                </h3>
                <p className="text-gray-600 mb-4">
                  Triniso is a Swiss watch manufacturer of luxurious and
                  affordable watches in the Sierre, a beautiful vineyard region
                  in the south of Switzerland.
                </p>
              </div>
              <button
                className="bg-[#F0F5FF] text-[#0B63E5] font-bold py-2 px-4 rounded-lg w-[200px] hover:bg-blue-600 hover:text-white text-center text-md duration-300"
                onClick={() => redirect(2)}
              >
                View Case Study
                <i className="fas fa-arrow-right text-sm ml-2"></i>
              </button>
            </div>
            <img
              src={Projects2}
              alt="Project 2"
              className="w-full lg:w-1/2 rounded-lg"
            />
          </div>
          <div className="project-item flex flex-col lg:flex-row gap-4">
            <img
              src={Projects3}
              alt="Project 3"
              className="w-full lg:w-1/2 rounded-lg"
            />
            <div className="project-info flex flex-col">
              <div className="m-0 lg:ml-10">
                <h3 className="text-[32px] font-semibold mb-2 flex flex-col">
                  <span className="text-xs">UX/UI / Website Design</span>
                  Symova — responsive website design
                </h3>
                <p className="text-gray-600 mb-4">
                  Symova is a pension fund for medium and large companies in the
                  public transport and tourism sector in Switzerland. They
                  needed a completely new design for their website.
                </p>
                <button
                  className="bg-[#F0F5FF] text-[#0B63E5] font-bold py-2 px-4 rounded-lg w-[200px] hover:bg-blue-600 hover:text-white text-center text-md duration-300"
                  onClick={() => redirect(3)}
                >
                  View Case Study
                  <i className="fas fa-arrow-right text-sm ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shto Componenting Poshte */}
      <WorkTogether />
    </div>
  );
};

export default ProjectsSection;
