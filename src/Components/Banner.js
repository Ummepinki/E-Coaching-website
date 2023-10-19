import React from "react";
import banner from "../assets/profile.png";
import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  return (
    <div className="w-full  bg-white py-24 m-4 p-4 ">
      <div className=" py-4 md:max-w-[1480px] m-auto grid md:grid-cols-3 max-w-[600px]">
        <div className="flex  flex-col justify-start gap-4">
          <h1 className=" py-4 md:text-7xl  font-semibold  text-5xl">
            Take Your <span className="text-green-500">Dreams </span> To The
            Next Level!
          </h1>
          <p className="py-4  text-gray-600">
            Lorem Ipsum is simple dummy text of the printing and typesetting
            industry.Lorem Ipsum has been industry's standard dummy text ever
            since the 1500s.
          </p>

          {/* Form section*/}
          <form className="m-2 max-w-[500px] p-2 shadow-lg rounded-sm flex  justify-between py-4 ">
            <input
              type="text"
              className="bg-white"
              placeholder="Search for a course"
            />
            <button className="mt-2 bg-green-400 text-white p-4">
              <IoIosSearch className="icon " />
            </button>
          </form>
        </div>

        {/* Banner image */}
        <img src={banner} className=" md:order-last order-first" alt="" />

        {/* Courses Number*/}
        <div className=" m-5 mt-20 md:order-last order-first ">
          <div className="m-7">
            <h1 className=" text-5xl text-green-500">100</h1>
            <p className=" text-gray-600 ">Subject to</p>
          </div>
          <div className="m-7">
            <h1 className=" text-5xl  text-green-500">120+</h1>
            <p className=" text-gray-600 ">Awesome Course</p>
          </div>
          <div className="m-7">
            <h1 className=" text-5xl  text-green-500">120</h1>
            <p className=" text-gray-600 ">professional</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
