import { useNavigate } from "react-router-dom";
import projects from "../assets/projects"; // Import the projects data
import WorkTogether from "../components/WorkTogether";

const Projects = () => {
  const navigate = useNavigate();

  const redirect = (id: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/projects/${id}`);
  };

  return (
    <div>
      <div className="projects-wrapper px-[8%] xl:px-[16%] py-10">
        <h2 className="text-4xl font-bold mb-8 ">Our featured projects</h2>
        <div className="flex flex-col justify-center items-center gap-16 mt-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-item flex flex-col ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-4`}
            >
              <img
                src={project.image[0]}
                alt={project.title}
                className="w-full lg:w-1/2 rounded-lg h-auto object-cover"
              />
              <div className="project-info flex flex-col">
                <div
                  className={`m-0 ${
                    index % 2 === 0 ? "lg:mr-10 " : "lg:ml-10"
                  }`}
                >
                  <h3 className="text-[32px] font-semibold mb-2 flex flex-col">
                    <span className="text-xs">
                      {project.servicesUsed.join(" / ")}
                    </span>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 lg:max-h-[400px] lg:overflow-auto">
                    {project.longDescription}
                  </p>
                  <button
                    className="bg-[#F0F5FF] text-[#0B63E5] font-bold py-2 px-4 rounded-lg w-[200px] hover:bg-blue-600 hover:text-white text-center text-md duration-300"
                    onClick={() => redirect(project.id)}
                  >
                    View Case Study
                    <i className="fas fa-arrow-right text-sm ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WorkTogether />
    </div>
  );
};

export default Projects;
