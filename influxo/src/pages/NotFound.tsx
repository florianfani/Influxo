import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundIMG from '../assets/decorations/404.png'

export const NotFound: React.FC = () => {
 const navigate = useNavigate();

 const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className='  px-[8%] lg:px-[16%]  flex flex-col lg:flex-row items-center justify-between h-[90vh]'>
       <div className="">
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[#061C3D]  ">
              <br />
              OPPS! NOT FOUND
            </h1>
            <p className="text-lg text-gray-600 mt-4">Something went wrong. It’s look that your requested could not be found. It's look like the link is broken or the page is removed.</p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"onClick={() => redirect("/")} >
              Back Home
            </button>
          </div>
          <div className=" ">
          <img src={NotFoundIMG} alt="" className='w-[1000px]' />
          </div>
    </div>
  )
}
