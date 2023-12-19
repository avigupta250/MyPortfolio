import React, { useState } from "react";
import { FaBars, FaGithub, FaHome, FaTimes } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

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
      link: "About",
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

  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub />,
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
    },
    {
      id: 3,
      icon: <FaXTwitter />,
    },
  ];
  return (
    <div className="flex  justify-between items-center  px-4  h-[80px] bg-gradient-to-t from-[#060b17]  ">
      {/* Logo */}
      <div>
        <h1 className="text-white text-xl  md:text-4xl   ">Avi Gupta</h1>
      </div>

      {/*  */}
      <div className="hidden md:flex ">
        <ul className="flex px-3">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="hover:text-blue-600 hover:scale-110 duration-200 px-4  text-gray-400 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* seprator */}
        <div className="h-[20px] w-[3px] mt-1 bg-gray-400"></div>

        {/* social media  */}
        <div className="h-[6px] text-white flex gap-3 mt-1  ">
          {socialMedia.map(({ id, icon }) => (
            <div className="hover:text-blue-600 duration-200  hover:scale-150">
              {" "}
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="text-white  cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
       
          <ul
            className=" scroll- flex flex-col justify-center w-full h-screen absolute top-0 items-center
             right-0  bg-gradient-to-b from-black to-gray-600"
          >
            {links.map(({ id, link, icon }) => (
              <li
                key={id}
                className="flex items-center gap-4 py-8  text-gray-400 cursor-pointer"
              >
                {icon} {link}
              </li>
            ))}
          </ul>
        //   {/* <ul  className="h-[6px] text-white flex gap-3 mt-1">
        //   <li>
        //     {
        //         socialMedia.map(({id,icon})=>(
        //             <div key={id} className="hover:text-blue-600 duration-200  hover:scale-150">
        //             {" "}
        //             {icon}
        //           </div>
        //         ))
        //     }
        //     </li>
        //   </ul> */}
        
      )}
    </div>
  );
};

export default Header;
