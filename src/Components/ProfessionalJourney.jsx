// ProfessionalJourney.jsx
import React from "react";
import Card from "./Card";

const ProfessionalJourney = () => {
  const job = [
    {
      role: "Software Developer",
      company: "Thoughts2Binary",
      location: "Gurugram, Haryana, India",
      period: "March 2025 - Present",
      description: [
        "Specialize in developing and maintaining scalable web applications using JavaScript, React, and Node.js, ensuring high performance and seamless user experiences.",
        "Designed and implemented reusable components, optimized data flow, and efficient state management to build clean, maintainable, and production-ready systems.",
        "Resolved 300+ bugs across staging and production environments, improving application stability, performance, and overall user experience.",
        "Collaborated with cross-functional teams to integrate APIs, streamline workflows, and deliver reliable, end-to-end solutions aligned with business requirements.",
      ],
      highlights: [
        "Performance Optimization",
        "High-Impact Bug Fixing (300+)",
        "Reusable Component Architecture",
        "Production Stability Improvements",
      ],
    },

    {
      role: "Trainee React.js & Node.js",
      company: "NetCoreinfo Business Group",
      location: "Noida, India",
      period: "Sept 2023 - Dec 2023",
      description: [
        "Built responsive web applications using React.js with focus on reusable components and state management",
        "Developed RESTful APIs using Node.js and Express.js for backend operations",
        "Integrated frontend and backend systems to enable seamless data flow and functionality",
      ],
      highlights: [
        "End-to-End Application Development",
        "RESTful API Design & Integration",
        "Scalable Component Architecture",
        "Efficient State Management",
      ],
    },
  ];

  return (
    <section id="experience" className=" mx-auto bg-[#020817] py-14 px-20">
      <div className="w-3/4 m-auto">
        <h1 className="text-5xl font-bold text-white my-8 ">
          Professional Journey
        </h1>
        <p className="border-b-blue-400 border-b-3 w-60"></p>
        <br></br>
        <br></br>
        {job.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalJourney;
