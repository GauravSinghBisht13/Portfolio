// Card.jsx
import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiBriefcase } from "react-icons/hi";

const Card = ({ role, company, location, period, description, highlights }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-3xl p-6 border border-blue-400 w-[90%] m-auto mt-10 transition transform hover:-translate-y-2 hover:shadow-xl group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
      <div className="flex justify-between border-b border-white/30 py-4">
        <div
          className="flex
      
        "
        >
          <HiBriefcase className="text-blue-400 text-4xl m-auto " />
          <div className="ml-4">
            <h2 className="text-3xl font-bold text-white">{role}</h2>
            <p className="text-blue-400 text-xl font-bold">{company}</p>
          </div>
        </div>
        <div className="flex w-[50%] gap-10  justify-end">
          <p className="text-white flex items-center gap-2  opacity-60 text-xl ">
            <FaLocationDot className="text-white " />
            {location}
          </p>
          <p className="text-white flex items-center gap-2 opacity-60 text-xl">
            <SlCalender className="text-white " />
            {period}
          </p>
        </div>
      </div>

      <section className="flex py-2 px-2 mt-3">
        <div className="w-3/4 px-5">
          <ul className="text-white/60 mb-4 space-y-2v text-xl list-disc marker:text-blue-400">
            {description.map((point, index) => (
              <li className="pb-3 " key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[40%]">
          <div className="flex flex-wrap border rounded-lg border-white/30 m-auto px-4 py-4">
            <p className="flex items-center text-blue-600 gap-2 text-xl m-auto mb-4">
              <AiFillThunderbolt className="text-blue-600" />
              IMPACT HIGHLIGHTS
            </p>
            {highlights.map((tag, index) => (
              <span
                key={index}
                className="inline-block w-fit px-4 py-1 text-md tracking-widest text-blue-400 border border-blue-500 rounded-full mt-3 "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
