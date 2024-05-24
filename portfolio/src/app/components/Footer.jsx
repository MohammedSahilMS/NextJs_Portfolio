import React from "react";
import { FaInstagram , FaLinkedinIn,FaGithub,FaPhoneAlt} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="footer   border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">

      <div className=" flex flex-row  " >
       
      <div className="  flex flex-row container  p-12 gap-3  ">
        
      <a href="https://www.instagram.com/sahill.____" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={25} color='#fccc63' />
      </a>
      
    <a href="https://github.com/Hephaistos02" target="_blank" rel="noopener noreferrer">
        <FaGithub size={25} />
    </a>
    <a href="https://www.linkedin.com/in/mohammed-sahil-m-s/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn size={25} color='#0762C8' />
    </a>
    <a href="mailto:sahilms750@gmail.com" target="_blank" rel="noopener noreferrer">
    <SiGmail size={25} color='#DB4437' />
    </a>

        
      </div>
      <div className="flex flex-col text-slate-600 justify-center">
      <h2 className="text-white font-bold my-2" >Contact Me</h2>
    <div className="flex items-center ">
      
        <FaPhoneAlt  /> 
        <p className="ml-2" ><a href="tel:+9746724876">9746724876</a></p>
    </div>
    <div className="flex items-center">
        <MdAlternateEmail /> 
        <p className="ml-2" ><a href="mailto:sahilms750@gmail.com">sahilms750@gmail.com</a></p>
    </div>
    <div className="flex items-center">
        <FaLocationDot /> 
        <p className="ml-2 mb-3" >Mockath House Thaikkattukara P O Aluva, 683106</p>
    </div>
</div>

      </div>
      <div className="flex justify-center py-2">
        <p className="text-slate-600" >All rights reserved.  </p>
      </div>
     
      
    </footer>
  );
};

export default Footer;

