import React, { useState } from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdConnectWithoutContact } from "react-icons/md";


import { socialMedia } from "./Constant";


const Header = ({homeRef,projectsRef,skillsRef,contactRef}) => {
  const [nav, setNav] = useState(false);


  const links = [
    {
      id: 1,
      link: "Home",
      ref: homeRef,
      icon: <FaHome />,
    },
    {
      id: 2,
      link: "My Skills",
      ref: skillsRef,
      icon: <GiSkills />,
    },
    {
      id: 3,
      link: "Project",
      ref: projectsRef,
      icon: <LiaProjectDiagramSolid />,
    },
    {
      id: 4,
      link: "Contact",
      ref: contactRef,
      icon: <MdConnectWithoutContact />,
    },
  ];

  const handleScroll = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref is not attached to any DOM element");
    }
  };

  


  
  return (
    <div className=" flex top-0 bg-[#0E1630] justify-between items-center md:px-[200px] px-4 h-[80px] fixed w-full z-50">
      {/* Logo */}
      <div>
        <h1 className="text-white text-[25px] md:text-[40px] font-quickstand font-quickstandCustom">
          <span className="text-[#4ade80]">A</span>vi{" "}
          <span className="text-[#4ade80]">G</span>upta
        </h1>
      </div>
  
      {/*  */}
      <div className="hidden gap-6 md:flex">
        <ul className="flex gap-5 px-3">
          {links.map(({ id, link,ref }) => (
            <li
              key={id}
             onClick={()=>handleScroll(ref)}
              className="hover:text-[#4ade80] font-quickstand hover:scale-110 duration-200 px-4 text-[16px] text-gray-400 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
  
        {/* seprator */}
        <div className="h-[23px] w-[3px] mt-[2px] flex items-center bg-gray-400"></div>
  
        {/* social media */}
        <div className="h-[6px] text-white flex gap-5 items-center mt-2 ml-2">
          {socialMedia.map(({ id, icon, link }) => (
            <a href={link} key={id} rel="noreferrer" target="_blank">
              <div className="hover:text-[#4ade80] duration-200 text-[20px] hover:scale-150">
                {" "}
                {icon}
              </div>
            </a>
          ))}
        </div>
      </div>
  
      <div
        onClick={() => setNav(!nav)}
        className="text-[#4ade80] cursor-pointer pr-1 z-20 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
  
      {nav && (
        <ul
          className="flex flex-col justify-center w-full h-screen fixed top-0 items-start z-10 bg-[#0E1630] "
        >
          {links.map(({ id, link, icon,ref }) => (
            <li onClick={()=>{
              setNav(false)
              handleScroll(ref)
            }}
              key={id}
              className="flex items-center gap-4 py-8 ml-[90px] text-gray-400 cursor-pointer"
            >
              <div  className="text-green-400">{icon}</div> {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default Header;
