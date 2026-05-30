import React from "react";
import AchivementCard from "./AchivementCard";
import { FaTrophy } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";

const Achivement = () => {
  const Achivements = [
    {
      title: "Star Performer (2025)",
      icon: FaTrophy,
      description:
        "Recognized as a Star Performer for delivering high-quality work, resolving critical issues, and contributing to team productivity.",
    },
    {
      title: "High-Impact Bug Resolution",
      icon: FaBug,
      description:
        "Resolved 300+ bugs across staging and production, improving application stability and overall user experience.",
    },
    {
      title: "Scalable Frontend Development",
      icon: FaReact,
      description:
        "Developed and maintained scalable React applications with reusable components and optimized state management.",
    },
  ];
  return (
    <>
      <div className="bg-blue-600/5 px-10 py-5">
        <div className="mt-15 ">
          <h1 className="text-5xl font-bold text-white my-8 w-3/4 m-auto gap-2">
            Key Achivements
            <p className="border-b-blue-400 border-b-4 w-60  mt-4 "></p>
          </h1>

          <div className="flex mt-20 gap-8 w-[85%] m-auto">
            {Achivements.map((item, index) => (
              <AchivementCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Achivement;
