import React, { useState } from "react";
import GBLogo from "/icon.png";
import CommingSoonModal from "../../components/Modal/CommingSoonModal";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Community",
    path: null,
  },
  {
    id: 3,
    name: "Guild",
    path: null,
  },
  {
    id: 4,
    name: "Blog",
    path: null,
  },
  {
    id: 5,
    name: "Shop",
    path: null,
  },
  {
    id: 6,
    name: "Esports",
    path: null,
  },
];



const Navbar = () => {

  const [showModal, setShowModal] = useState(false);

  const handleClick = (path) => {
    if (!path) {
      setShowModal(true);
    }
  }

  return (
    <div>
      <div className="navbar bg-[#0c1a28] text-white h-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm p-3 rounded  dropdown-content mt-3 z-[1] m-0   shadow bg-[#292636] w-52 h-max "
            >
              {
                navItems.map((item) => (
                  <li key={item.id} onClick={() => handleClick(item.path)} className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white cursor-pointer">{item.name}</li>
                ))
              }
            </ul>
          </div>
          <div className="flex items-center">
            <button className=" w-20 mx-2">
              <img src={GBLogo} alt="" />
            </button>
            <p className="text-lg font-semibold">CHOLO KHELI</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navItems.map((item) => (
                <li key={item.id} onClick={() => handleClick(item.path)} className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white cursor-pointer">{item.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="navbar-end  ">

        </div>
      </div>
      {showModal && (
        <CommingSoonModal
          setShowModal={setShowModal}
        />
      )}

    </div>
  );
};

export default Navbar;
