import React from "react";
import { FaBars, FaGithub, FaHome, FaTimes } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const socialMedia = [
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
      link:"https://twitter.com/Avinash87812308"
    },
    {
      id: 4,
      icon: <FaInstagram />,
      link:"https://www.instagram.com/avi_gupta250/"
    },

  ];

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
    <div className="mt-[40px] md:mt-[60px] pb-[100px] p-4  grid grid-cols-1 md:grid-cols-2   md:px-[200px] text-white  ">
      <div className="mb-10 flex flex-col ">
        <h1 className="text-[#4ade80] md:text-[25px]  flex  items-center gap-3"> Connect With Me</h1>
        <div className="flex gap-4 items-center mt-6 ">
          <div className="text-green-600 text-[26px]">
            <FaMapMarkerAlt />
          </div>
          <h1>Nalanda College Of Engineering ,Chandi (Nalanda)</h1>
          <div className="text-green-500">
            <BsGlobeCentralSouthAsia />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6 ">
          <div className="text-green-600 text-[26px]">
            <IoIosMail />
          </div>
         <div className="flex flex-wrap text-[#4ade80]" >
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
        <form onSubmit={handleSubmit} className="w-full mt-5 flex  flex-col gap-6">
          <div className="">
            <label htmlFor="fullName"></label>
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
  );
};

export default Footer;
