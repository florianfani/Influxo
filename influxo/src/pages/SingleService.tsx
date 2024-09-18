import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../assets/services.ts";

const SingleService: React.FC = () => {
  const [service, setService] = useState<{
    title: string;
    shortDescription: string;
    image: string;
    longDescription: string;
    technologies: { title: string; description: string }[]; // Update this line
  } | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const foundService = services.find(
      (service: {
        title: string;
        slug: string;
        image: string;
        shortDescription: string;
        longDescription: string;
        technologies: { title: string; description: string }[]; // Update this line
      }) => service.slug === slug
    );

    if (foundService) {
      setService({
        title: foundService.title,
        shortDescription: foundService.shortDescription,
        image: foundService.image,
        longDescription: foundService.longDescription, // Assign appropriate longDescription
        technologies: foundService.technologies,
      });
    } else {
      setService(null);
    }
  }, [slug]);

  return (
    <div className="single-service-wrapper px-[16%] py-10">
      {service ? (
        <div className="flex justify-between items-start mb-10">
          <div className="">
            <div className="w-full flex flex-col md:flex-row">
              <div className="md:w-1/2 w-full">
                <h1 className="text-3xl font-bold mb-5">{service?.title}</h1>
                <p className="text-[#6A778B] mb-5">
                  {service?.shortDescription}
                </p>
              </div>
              <div className="md:w-1/2 w-full flex justify-end items-center">
                <img
                  src={service?.image} // Replace with your image URL
                  alt="Service"
                  className="md:w-[80%] w-full object-cover h-auto max-h-[300px]"
                />
              </div>
            </div>
            <p className="text-[#6A778B] my-10">{service?.longDescription}</p>
          </div>
        </div>
      ) : (
        <h2>No service found</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        {service?.technologies && service.technologies.length > 0 ? (
          service.technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center justify-center"
            >
              <h2 className="text-[28px] font-bold mb-3">{tech.title}</h2>
              <p className="text-[#6A778B] text-[20px] w-[80%]">
                {tech.description}
              </p>
            </div>
          ))
        ) : (
          <h2>No technologies found</h2>
        )}
      </div>
    </div>
  );
};

export default SingleService;
