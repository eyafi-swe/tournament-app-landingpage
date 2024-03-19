import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Mock1 from "../../../assets/mock1.png";
import Mock2 from "../../../assets/mock2.png";
import Mock3 from "../../../assets/mock3.png";


const publications = [
  {
    "id": 1,
    "name": "Cholo Kheli App",
    "gameImage": Mock1,
    "details": "Cholo Kheli is a Tournament App. User can easily register and participate to any tournament. Win atttractive prizes."
  },
  {
    "id": 2,
    "name": "Deposit & Withdraw Cash",
    "gameImage": Mock2,
    "details": "Deposit cash to your wallet to buy diamonds and participate to any tournament."
  },
  {
    "id": 3,
    "name": "Tournaments",
    "gameImage": Mock3,
    "details": "Find different matches and participate by giving your game id code/name to win prizes."
  },

]


const Publications = () => {

  return (
    <div className=" text-white  mx-auto relative">



      <div className="w-10/12 mx-auto pt-20">
        <div className=" mb-16 flex justify-center flex-col items-center">
          <small className="uppercase inline-block bg-[#d31c3e] py-1 w-max font-bold rounded-ss-lg rounded-ee-xl rounded px-4">
            Cholo Kheli
          </small>
          <h2 className="border-b-4 pb-1 px-2 w-max border-red-500 md:text-3xl text-xl font-semibold capitalize mt-5">
            About App
          </h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {publications.map((game) => (
            <div key={game?.id} className="">
              <div className="  ">
                <img
                  className=" rounded-md"
                  src={game?.gameImage}
                  alt=""
                />
              </div>
              <div className=" px-3">
                <h2 class="relative text-2xl mt-4 font-semibold  group overflow-hidden inline-block text-rose-600 ">
                  {game?.name}
                  <span class="absolute inset-x-0 bottom-0 h-1 bg-[#d31c3e] transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
                </h2>
                <p className="leading-7 text-base text-left text-yellow-600">{game?.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
