import React from "react";
import ShrifBchcha2 from "../assets/ShrifBchcha2.jpg";

const HeroSection = () => {
  return (
    <div className=" flex m-3  flex-col  items-center  justify-center mt-[90px] md:flex-row-reverse md:px-[300px]  md:justify-between   ">
      {/* Pic */}
      <div className="flex justify-end  ">
        <img
          className="h-[200px] w-[200px] md:h-[400px] md:w-[400px] border-[8px]  rounded-full"
          src={ShrifBchcha2}
          alt="pic"
        />
      </div>
      {/* left Part */}
      <div className=" flex flex-col justify-center  text-white  md:justify-start ">
        <div className=" flex gap-1 py-2 text-center md:justify-start ">
          <h1 className="text-[#3fc5ce] text-center  ">Hello</h1>
          <h1 className="flex text-center">I'm Avinash Gupta</h1>
        </div>
        <div className="flex flex-col py-3  ">
          <h1 className="text-center md:text-start">Full Stack Developer</h1>
          <p className="py-5  text-center md:text-start">
            Hi there! My name is Avinash Gupta and I’m a software engineer .
          </p>
        </div>




        <div className="flex justify-center mt-[30px] md:justify-start ">
        <button className="btn btn-gradient-border btn-glow flex justify-center items-center ">Resume</button>
        </div>

       

        
      </div>
    </div>
  );
};

export default HeroSection;
