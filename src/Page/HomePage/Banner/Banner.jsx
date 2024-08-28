import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";


const Banner = () => {
  const [responsiveWith, setResponsiveWith] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setResponsiveWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="relative  ">
      <div className="relative banner-img  w-full text-white flex justify-center items-center">
        <div className="md:hidden absolute md:w-10/12 w-full rounded-lg bg-[#0c1a28]  opacity-75 h-96">


        </div>
        <div className="absolute ml-10 md:w-10/12 w-11/12">
          <h1 className="md:text-6xl text-5xl font-bold w-max">TRY SPORTS</h1>

          <p className="text-xl my-7 w-full  md:w-1/2 md:leading-normal">
            “Have beginning wherein spirit. Bearing unto. To after light. Good
            image can’t without hath fly beast him fish firmament fish
            Face waters fly unto spirit i doesn’t one waters divide.”
          </p>

          <a href="/Try_Sports_1.0.3.apk" download={true} className="flex gap-2 items-center w-max mx-2 bg-[#ff5a18] font-bold duration-300 rounded rounded-ss-xl  rounded-ee-xl hover:bg-white px-7 py-3 text-white hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2zm10 3l5.55-5.46l-1.42-1.41L13 11.25V2h-2v9.25L7.88 8.13L6.46 9.55z" /></svg>
            Download App
          </a>
          <div className="mx-2 font-bold mt-5 w-max bg-white  duration-300 rounded rounded-ss-xl  rounded-ee-xl  px-8 py-3 text-black">
            50k+ Downloads
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
