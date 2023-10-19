import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-full h-[80px] bg-white  sticky top-0">
      <div className="md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-between items-center">
        <img src={logo} className="h-[40px]" alt="logo" />
        <div className=" hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Service</li>
            <li>Popular Courses</li>
            <li>Top Selling Courses</li>
            <li>All Courses</li>
          </ul>
        </div>

        <div className="hidden md:flex ">
          <button className="gap-4 m-3">
            <AiOutlineShoppingCart />
          </button>

          <button className="bg-[#22c55e] text-white flex  px-6 py-2 rounded-md m-2">
            <GoPerson className="mb-3 m-1" /> Sign/Register
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {toggle ? <GrFormClose /> : <BiMenu />}
        </div>
      </div>

      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4">Home</li>
          <li className="p-4">Service</li>
          <li className="p-4">Popular Courses</li>
          <li className="p-4">Top Selling Courses</li>
          <li className="p-4">All Courses</li>
        </ul>
        <div className="flex flex-col my-4 g-4">
          <button className="gap-4 m-3 justify-center items-center ">
            <AiOutlineShoppingCart />
          </button>

          <button className="bg-[#22c55e] text-white flex  px-6 py-2 rounded-md m-2 justify-center items-center">
            <GoPerson className="mb-3 m-1" /> Sign/Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
