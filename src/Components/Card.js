import React from "react";

import { BiBookOpen } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { PiStarThin } from "react-icons/pi";
import pic from "../assets/profile.jpg";

const Card = (props) => {
  return (
    <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl">
      <img src={props.imageSource} alt="" className=" w-full  object-cover" />
      <div>
        <div className="flex mt-3">
          <img
            src={pic}
            alt=""
            className="w-6 h-6 border rounded-lg mt-2 m-3"
          />
          <p className="m-2">Adam John</p>
          <div
            className=" flex
           justify-end m-3"
          >
            <PiStarThin className=" m-1 text-yellow-300" />
            <p className="m-0  text-gray-400">(4.7)</p>
          </div>
        </div>

        <h2 className="m-2">{props.titleText} </h2>
      </div>
      <div className="flex m-3 space-x-5 text-gray-400">
        <BiBookOpen className="mt-4" /> <p className="m-2 "> Lesson</p>
        <GoPerson className="mt-4" /> <p className="m-2"> 125 Students</p>
      </div>
      <div className="flex  space-x-5  text-gray-400">
        <MdOutlineWatchLater className="mt-4" />
        <p className="m-2 "> 1 hr 50 min</p>
        <AiOutlineVideoCamera className="mt-4" />
        <p className="m-2"> 12 Lectures</p>
      </div>
      <button className="border rounded bg-green-500 px-2 py-3 w-11/12 m-2   text-white">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
