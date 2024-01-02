import React from "react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";

import { socialMedia } from "./Constant";

const Footer = () => {
  

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


  };

  return (
    <>
    <div className="mt-[40px] md:mt-[60px] pb-[0px] p-4  grid grid-cols-1 md:grid-cols-2   md:px-[200px] text-white  ">
      <div className="mb-10 flex flex-col ">
        <h1 className="text-[#4ade80] md:text-[25px]  flex  items-center gap-3"> Connect With Me</h1>
        <div className="flex gap-4 items-center mt-6 ">
          <div className="text-green-600 text-[26px]">
            <FaMapMarkerAlt />
          </div>
          <h1>Nalanda College Of Engineering ,Chandi (Nalanda)</h1>
          <div className="text-green-500 text-[25px]">
            <IoSchool />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6 ">
          <div className="text-green-600 text-[26px]">
            <IoIosMail />
          </div>
         <div className="flex flex-wrap text md:hover:text-green-500 duration-200" >
         <a href="mailto:avinashkumarnav52@gmail.com" >avinashkumarnav52@gmail.com</a>
         </div>
        </div>
        
          <div className="h-[6px] py-6 text-white flex gap-5 mt-1  ">
            {socialMedia.map(({ id, icon,link }) => (
              <a href={link} target="_blank">
              <div key={id} className="hover:text-green-600 duration-200 text-[26px]   hover:scale-110">
                {" "}
                {icon}
              </div>
              </a>
            ))}
          </div>
    
      </div>

      <div>
        <h2 className="text-[#4ade80] md:text-[25px]  flex  items-center gap-3">Contact Me</h2>
        <form
        //  onSubmit={handleSubmit}
         action="https://formspree.io/f/xzbnbgad"
         method="POST"
        className="w-full mt-5 flex  flex-col gap-6">
          <div className="">
            <label htmlFor="full Name"></label>
            <input
              className="bg-[#1c2950de] rounded-md w-full p-3"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email"></label>
            <input
             className="bg-[#1c2950de] rounded-md w-full p-3"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message"></label>
            <textarea
             className="bg-[#1c2950de] rounded-md w-full p-3"
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button className="w-full bg-[#3B82F8] p-3 rounded-md" type="submit">
            Submit
          </button>

         
        </form>
      </div>
      
    </div>
    <div className="flex mt-[100px] text-[10px] md:text-[20px] justify-center pb-[20px]  items-center gap-2 text-[#8390b9de] ">
            <AiOutlineCopyright/><h1>Copyright 2023 - Developed by Avi Gupta .All right reserved.</h1>
          </div>
    </>
  );
};

export default Footer;
