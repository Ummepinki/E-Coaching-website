import React from "react";
import Card from "./Card";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";

const Courses = () => {
  return (
    <div className="w-full  bg-white py-24    ">
      <h1 className=" text-5xl text-center font-semibold ">
        Our Top Selling Courses
      </h1>
      <p className="py-4 text-center text-sm   ">
        Lorem Ipsum Is Simple Dummy Text Of The Printing And Typesetting
        Industry.Lorem Ipsum Has Been Industry's
      </p>
      <div className=" gap-4 py-2 px-3 md:max-w-[1480px] m-auto grid md:grid-cols-4 max-w-[600px]">
        {/* 
        Props Data
     */}
        <Card
          titleText="Applied Data Science Specialization"
          imageSource={course1}
        />
        <Card titleText="Deep Learning Specialization " imageSource={course2} />
        <Card
          titleText="Back-End Development Professional Certificate "
          imageSource={course3}
        />
        <Card
          titleText=" IBM Back-End Development Professional Certificate"
          imageSource={course4}
        />
      </div>
      <div className=" flex justify-center">
        <button className="border rounded bg-green-500    m-4 p-3  text-white">
          View All
        </button>
      </div>
    </div>
  );
};

export default Courses;
