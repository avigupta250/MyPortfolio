import React from "react";
import foodDelivery from "../assets/FoodDelivery.jpeg";

import { FaChevronRight } from "react-icons/fa6";
import { projects } from "./Constant";
import { moreProjects } from "./Constant";

const ProjectsSection = () => {
  return (
    <div className="myProject p-4 mt-9 md:px-[200px]  ">
      <div className="text-[#4ade80] md:text-[30px]  flex  items-center gap-3">
        {" "}
        <div className="h-[1px] w-7 bg-[#4ade80]"></div>Projects
      </div>
      <div className="h-1  bg-blue-600"></div>
      <div className=" md:flex gap-4 md:justify-between md:items-center">
        <div className="mt-8 gap-3 grid grid-cols-1 md:grid-cols-3 md:overflow-x-hidden">
          {projects.map((project) => (
            <a href={project.link} target="_blank">
            <div className="w-full rounded-md border-3 text-white border border-[#526980] bg-[#14213f  ]">
              <div className="relative justify-end">
                <img
                  className="h-[200px] rounded-md  w-full object-cover "
                  src={project.image}
                  alt="Food Delivery"
                />
                <div className="absolute text-black top-0 font-bold  text-[8px] ml-2 flex md:text-[15px]"> {project.state}</div>
              </div>
              <div className="p-2 flex flex-wrap">
                <div className="font-bold font-sans">{project.title}</div>
                <div className="text-gray-400 text-[10px] overflow-hidden">
                  {project.description}
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>

        <div className="w-full mt-4 px-2 p-3 h-fill text-white border-3 border-[#111213] bg-[#14213f]">
          <div className="text-[#4ade80] md:text-[25px]  flex  items-center gap-3">
            {" "}
            <div className="h-[1px] w-7 bg-[#4ade80]"></div> More Projects
          </div>
          <div className="h-1 w-full bg-blue-600 rounded-md mt-2 "></div>
          <div className="mt-3 flex flex-col  gap-4">
            {moreProjects.map((project) => (
              <a href={project?.link} target="_blank">
                <div className="flex p-3 gap-4 justify-between items-center md:hover:scale-105 duration-300 opacity-80 bg-blur-lg  ">
                  <div className="flex items-center gap-4">
                    <div className=" scale-150 text-[#4ade80] ">
                      {project.icon}
                    </div>
                    <div>
                      <h1 className="text-[15px]">{project.title}</h1>
                      <h1 className="text-[10px]">{project.stack}</h1>
                    </div>
                  </div>
                  <button className="flex justify-end md:hover:text-[#4ade80] ">
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
