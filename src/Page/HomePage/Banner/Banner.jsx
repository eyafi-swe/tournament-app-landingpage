import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";


const Banner = () => {
  const [sliders, setSliders] = useState([]);
  const [responsiveWith, setResponsiveWith] = useState(window.innerWidth);

  useEffect(() => {
    fetch("bannerslider.json")
      .then((response) => response.json())
      .then((result) => {
        setSliders(result);
      });
  }, []);

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
    <div className="relative ">
      <div className="relative banner-img  w-full text-white flex justify-center items-center">
        <div className="absolute md:w-10/12 w-11/12 rounded-lg bg-rose-600 opacity-50 h-80">


        </div>
        <div className="absolute ml-10">
          <h1 className="md:text-6xl text-5xl font-bold w-max">CHOLO KHELI</h1>

          <p className="text-xl my-7 w-full  md:w-1/2 md:leading-normal">
            “Have beginning wherein spirit. Bearing unto. To after light. Good
            image can’t without hath fly beast him fish firmament fish
            Face waters fly unto spirit i doesn’t one waters divide.”
          </p>

          <a href="/Cholo_Kheli_1.0.0.apk" download={true} className="mx-2 bg-[#0a1724] font-semibold duration-300 rounded rounded-ss-xl  rounded-ee-xl hover:bg-white px-7 py-3 text-white hover:text-black">
            Download App
          </a>
          <div className="mx-2 font-bold mt-5 w-max bg-white  duration-300 rounded rounded-ss-xl  rounded-ee-xl  px-7 py-3 text-black">
            2k+ Downloads

          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
