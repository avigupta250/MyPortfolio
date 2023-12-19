import React from "react";
import foodDelivery from "../assets/FoodDelivery.jpeg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa6";
import { GiCat } from "react-icons/gi";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: foodDelivery,
      title: "HeistINN-Heist Food Online",
      description:
        "HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs, Authentication, ExpressJs, MongoDb, Razorpay Payment Integration",
    },
    {
      id: 1,
      image: foodDelivery,
      title: "HeistINN-Heist Food Online",
      description:
        "HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs, Authentication, ExpressJs, MongoDb, Razorpay Payment Integration",
    },
    {
      id: 1,
      image: foodDelivery,
      title: "HeistINN-Heist Food Online",
      description:
        "HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs, Authentication, ExpressJs, MongoDb, Razorpay Payment Integration",
    },
    {
      id: 1,
      image: foodDelivery,
      title: "HeistINN-Heist Food Online",
      description:
        "HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs, Authentication, ExpressJs, MongoDb, Razorpay Payment Integration",
    },
  ];

  const moreProjects = [
    {
      id: 1,
      icon: <TiWeatherPartlySunny />,
      title: "Weather App",
      stack: "HTML,CSS,Javascript",
    },
    {
      id: 1,
      icon: <GiCat />,
      title: "Random Gif Generator",
      stack: "React,Tailwind CSS,",
    },
    {
      id: 1,
      icon: <TiWeatherPartlySunny />,
      title: "Tic-Tae-Toe",
      stack: "HTML,CSS,Javascript",
    },
    {
      id: 1,
      icon: <TiWeatherPartlySunny />,
      title: "Tic-Tae-Toe",
      stack: "HTML,CSS,Javascript",
    },
   
  ];
  return (
    <div className="p-4 md:px-[300px] overflowx-x-hidden">
      <h1 className="m-3 text-white font-bold">Projects</h1>
      <div className="h-1 bg-blue-600"></div>
      <div className=" md:flex gap-4 md:justify-between md:items-center">
      <div className="mt-8 gap-3 grid grid-cols-1 md:grid-cols-4 overflow-x-auto">
        {projects.map((project) => (
          <div className="w-full rounded-md border-3 border-[#111213] bg-[#ffffff]">
            <div>
              <img
                className="h-[200px] w-full object-cover rounded-md"
                src={foodDelivery}
                alt="Food Delivery"
              />
            </div>
            <div className="p-2 flex flex-wrap">
              <div className="font-bold font-sans">{project.title}</div>
              <div className="text-gray-400 text-[10px] overflow-hidden">
                {project.description}
              </div>
            </div>
          </div>
        ))}

        {/* <div className='w-full rounded-md border-3 border-[#111213] bg-[#ffffff]'>
          <div>
            <img className='h-[200px] w-full object-cover rounded-md' src={foodDelivery} alt='Food Delivery' />
          </div>
          <div className='p-2 flex flex-wrap'>
            <div className='font-bold font-sans'>HeistINN-Hiest food Online</div>
            <div className='text-gray-400 text-[10px] overflow-hidden'>
              HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs,
              Authentication, ExpressJs, MongoDb,
              Razorpay Payment Integration
            </div>
          </div>
        </div>


        <div className='w-full rounded-md border-3 border-[#111213] bg-[#ffffff]'>
          <div>
            <img className='h-[200px] w-full object-cover rounded-md' src={foodDelivery} alt='Food Delivery' />
          </div>
          <div className='p-2 flex flex-wrap'>
            <div className='font-bold font-sans'>HeistINN-Hiest food Online</div>
            <div className='text-gray-400 text-[10px] overflow-hidden'>
              HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs,
              Authentication, ExpressJs, MongoDb,
              Razorpay Payment Integration
            </div>
          </div>
        </div> */}

       
      </div>

      <div className="w-full mt-4 px-2 p-3 h-fill text-white border-3 border-[#111213] bg-[#14213f]">
          <h1>More Projects</h1>
          <div className="h-1 w-full bg-green-500 rounded-md mt-2 "></div>
          <div className="mt-3 flex flex-col gap-4">
            {moreProjects.map((project) => (
              <div className="flex p-3 gap-4 justify-between items-center  opacity-80 bg-blur-lg bg-[#2a2f5b] ">
                <div className="flex items-center gap-4">
                  <div className=" scale-150">{project.icon}</div>
                  <div>
                    <h1 className="text-[15px]">{project.title}</h1>
                    <h1 className="text-[10px]">{project.stack}</h1>
                  </div>
                </div>
                <button className="flex justify-end ">
                  <FaChevronRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        </div>
    </div>
  );
};

export default ProjectsSection;
