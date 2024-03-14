import React from "react";
import { FaFacebook, } from "react-icons/fa";
import { BiLogoGmail } from 'react-icons/bi'
const FooterBanner = () => {
  return (
    <div className="footer_banner_bg mt-32">
      <div className="flex justify-center items-center h-full gap-5">
        <a href="#">
          <div className="cursor-pointer bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 hover:bg-[#0c1a28] flex justify-center items-center">
            <FaFacebook className=" text-white w-7 h-7 shadow-2xl" />
          </div>
        </a>
        <a href="mailto:cholokheli@gmail.com" >
          <div className="bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 hover:bg-[#0c1a28] flex justify-center items-center">
            <BiLogoGmail className=" text-white w-7 h-7 shadow-2xl" />
          </div>
        </a>

      </div>
    </div>
  );
};

export default FooterBanner;
