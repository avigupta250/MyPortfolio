import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=" text-gray-400      h-[80px] bg-gradient-to-t from-[#060b17]">
      <div className="  flex justify-between h-full ml-4 mr-4 items-center ">
        {/* Logo */}
        <div>
          <h1>Avi Gupta</h1>
        </div>
        {/*  */}
        <div className="flex gap-6 ">
          <div className="flex gap-[50px]">
            <div className="hover:text-blue-600 transition-all">Home</div>
            <div className="hover:text-blue-600 transition-all">Skills</div>
            <div className="hover:text-blue-600 transition-all">Projects</div>
            <div className="hover:text-blue-600 transition-all">About </div>
            <div className="hover:text-blue-600 transition-all">Contact</div>
          </div>

          {/* seprator */}
          <div className="h-[20px] w-[3px] mt-1 bg-gray-400"></div>

          {/* social media  */}
          <div className="h-[6px] flex gap-3 mt-1  ">
           <div className="hover:text-blue-600 transition-all  hover:scale-150"> < FaGithub /></div>
            <div className="hover:text-blue-600 transition-all  hover:scale-150" ><FaLinkedinIn /></div>
           <div className="hover:text-blue-600 transition-all  hover:scale-150"> <FaXTwitter /></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
