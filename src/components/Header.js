import React, { useState } from "react";
import { FaBars, FaGithub, FaHome, FaTimes } from "react-icons/fa";


import { socialMedia } from "./Constant";

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
      icon: <FaHome />,
    },
    {
      id: 2,
      link: "My Skills",
      icon: <FaHome />,
    },
    {
      id: 3,
      link: "Project",
      icon: <FaHome />,
    },
    {
      id: 4,
      link: "Contact",
      icon: <FaHome />,
    },
  ];

  
  return (
    <div className="flex top-0 bg-[#0F172A] justify-between items-center md:px-[200px] px-4 h-[80px] fixed w-full z-50">
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
          {links.map(({ id, link }) => (
            <li
              key={id}
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
            <a href={link} key={id} target="_blank">
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
          className="flex flex-col justify-center w-full h-screen fixed top-0 items-center right-0 z-10 bg-[#0E1630] "
        >
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="flex items-center gap-4 py-8 text-gray-400 cursor-pointer"
            >
              {icon} {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default Header;
