// ProfessionalJourney.jsx
import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const ProfessionalJourney = () => {
  const experience = useSelector((state) => state.expe.experience);
  console.log("experience data coming ", experience);

  return (
    <section id="experience" className=" mx-auto bg-[#020817] py-14 px-20">
      <div className="w-3/4 m-auto">
        <h1 className="text-5xl font-bold text-white my-8 ">
          Professional Journey
        </h1>
        <p className="border-b-blue-400 border-b-3 w-60"></p>
        <br></br>
        <br></br>
        {experience.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalJourney;
