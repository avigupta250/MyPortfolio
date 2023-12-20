import React from "react";
import ShrifBchcha2 from "../assets/ShrifBchcha2.jpg";

const HeroSection = () => {
  return (
    <div className=" flex m-3  flex-col  items-center  justify-center mt-[170px] md:flex-row-reverse md:px-[200px]  md:justify-between   ">
      {/* Pic */}
      <div className="flex relative justify-end -z-1 ">
        <div className="bg-green-500  flex relative items-center  justify-center h-[210px] w-[210px]   md:h-[410px] md:w-[410px] rounded-full"> </div>
          <div className="absolute  mr-[5px] mt-[5px] ">
            <img
              className="h-[200px] w-[200px]  md:h-[400px] md:w-[400px]   rounded-full"
              src={ShrifBchcha2}
              alt="pic"
            />
         
        </div>
      </div>
      {/* left Part */}
      <div className=" flex flex-col justify-center  text-white mt-2  md:justify-start ">
        <div className=" flex gap-1 py-2  md:flex-col justify-start mx-auto   md:ml-0">
          <div className="flex items-center md:justify-start justify-center gap-2">
            <div className="h-[1px] w-7 bg-[#4ade80]"></div>
            <div className="text-[#4ade80] md:text-[30px]  ">Hello !</div>
          </div>
          <div className=" font-quickstand md:text-[40px]">
            I'm Avinash Gupta
          </div>
        </div>
        <div className="flex flex-col py-3  text-[#808DAD] ">
          <h1 className="text-center md:text-start">Full Stack Developer</h1>
          <p className="py-5  text-center md:text-start">
            Hi there! My name is Avinash Gupta and I’m a software engineer .
          </p>
        </div>

        <div className="flex justify-center mt-[30px] md:justify-start ">
          <button className="btn btn-gradient-border btn-glow flex justify-center items-center ">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
