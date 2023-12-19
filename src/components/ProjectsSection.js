import React from "react";
import foodDelivery from "../assets/FoodDelivery.jpeg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa6";
import { TbGoGame } from "react-icons/tb";
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
    // {
    //   id: 1,
    //   image: foodDelivery,
    //   title: "HeistINN-Heist Food Online",
    //   description:
    //     "HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs, Authentication, ExpressJs, MongoDb, Razorpay Payment Integration",
    // },
  ];

  const moreProjects = [
    {
      id: 1,
      icon: <TiWeatherPartlySunny />,
      title: "Weather App",
      stack: "HTML,CSS,Javascript",
      link:"https://weatherapp-avi.netlify.app/"
    },
    {
      id: 1,
      icon: <GiCat />,
      title: "Random Gif Generator",
      stack: "React,Tailwind CSS,",
      link:"https://random-gif-generator-zeta.vercel.app/"
    },
    {
      id: 1,
      icon: <TbGoGame />,
      title: "Tic-Tae-Toe",
      stack: "HTML,CSS,Javascript",
      link:"https://tic-tae-toe-lyart.vercel.app/"
    },
    
    {
      id: 1,
      icon: <TbGoGame />,
      title: "Tic-Tae-Toe",
      stack: "HTML,CSS,Javascript",
      link:"https://tic-tae-toe-lyart.vercel.app/"
    },
    
   
  ];
  return (
    <div className="p-4 mt-9 md:px-[200px] overflowx-x-hidden">
      <div className="text-[#4ade80] md:text-[30px]  flex  items-center gap-3">  <div className="h-[1px] w-7 bg-[#4ade80]"></div>Projects</div>
      <div className="h-1  bg-blue-600"></div>
      <div className=" md:flex gap-4 md:justify-between md:items-center">
      <div className="mt-8 gap-3 grid grid-cols-1 md:grid-cols-3 overflow-x-auto">
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
      <div className="text-[#4ade80] md:text-[25px]  flex  items-center gap-3">  <div className="h-[1px] w-7 bg-[#4ade80]"></div> More Projects</div>
          <div className="h-1 w-full bg-blue-600 rounded-md mt-2 "></div>
          <div className="mt-3 flex flex-col  gap-4">
            {moreProjects.map((project) => (
             <a href={project?.link} target="_blank" ><div className="flex p-3 gap-4 justify-between items-center hover:scale-105 duration-300 opacity-80 bg-blur-lg  ">
                <div className="flex items-center gap-4">
                  <div className=" scale-150 text-[#4ade80] ">{project.icon}</div>
                  <div>
                    <h1 className="text-[15px]">{project.title}</h1>
                    <h1 className="text-[10px]">{project.stack}</h1>
                  </div>
                </div>
                <button className="flex justify-end hover:text-[#4ade80] ">
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
