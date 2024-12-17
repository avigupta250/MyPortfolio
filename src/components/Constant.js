import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbGoGame } from "react-icons/tb";
import { GiCat } from "react-icons/gi";
import foodDelivery from "../assets/FoodDelivery.jpeg";
import edunova from "../assets/Screenshot 2024-06-14 142257.png"
import Brainly from "../assets/Brainly.png"





export const socialMedia = [
    {
      id: 1,
      icon: <FaGithub />,
      link:"https://github.com/avigupta250"
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link:"https://www.linkedin.com/in/avinash-gupta-982355213/"
    },
    {
      id: 3,
      icon: <FaXTwitter />,
      link:"https://twitter.com/dev_buoy"
    },
  ];


  export  const projects = [
    {
      id: 1,
      image: edunova,
      state:"",
      title: "EduNova-An EdTech Platform",
      link:"https://edunova-frontend.vercel.app/",
      description:
        "HTML, CSS, Tailwind, ReactJs, Redux-toolkit, NodeJs, Authentication, ExpressJs, MongoDb, Razorpay Payment Integration",
    },
    {
      id:3 ,
      image: Brainly,
      state:"",
      title: "Brainly- A Second Brain App",
      link:"https://brainly-100xdevs.vercel.app/",
      description:
        " ReactJs,Tailwind CSS , Recoil, NodeJs,JWT Authentication, ExpressJs, MongoDb"
    },
    
      
    {
      id: 2,
      image: foodDelivery,
      state:"Under Maintainance",
      title: "HeistINN-Heist Food Online",
      link:"",
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


  export const moreProjects = [
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

  ];