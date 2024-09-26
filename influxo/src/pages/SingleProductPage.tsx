import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorkTogether from "../components/WorkTogether";
import projects from "../assets/projects"; // Import the projects

const SingleProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<{
    id: number;
    title: string;
    shortDescription: string;
    details: string;
    image: string;
    longDescription: string;
  } | null>(null);

  useEffect(() => {
    const product = projects.find((product) => product.id === parseInt(id || "0"));
    setProduct(product || null);
  }, [id]);

  return (
    <div>
      <div className="w-full flex justify-center items-center  py-10 px-[8%] xl:px-[16%]">
        <div className="container">
          {product ? (
            <div className="">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-20 max-h-[300px]">
                  <span className="text-sm">Creative Direction / UI/UX / Website Design / Icon Design</span>
                  <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                  <p className="text-md text-[#42526B] mb-6">{product.shortDescription}</p>
                </div>
                <div className="md:w-1/2">
                  <img src={product.image} alt={product.title} className="md:w-[600px] h-[300px] max-h-[450px] object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-4 py-16">
                <img src={product.image} alt={product.title} className="w-full max-h-[425px] object-cover my-20" />
                <div>
                  <p className="text-md text-[#42526B] mb-6">{product.longDescription}</p>
                  <p className="text-md text-[#42526B] mb-6">{product.details}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </div>
      <WorkTogether />
    </div>
  );
};

export default SingleProductPage;
