import React from "react";

const AchivementCard = ({ title, description, icon: Icon }) => {
  return (
    <div
      className="text-white border-white/10 border-1 rounded-xl px-8 py-4 bg-white/5  transition-all duration-300 ease-in-out transform 
                hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
    >
      <Icon className="text-blue-400 w-12 h-12 my-4" />
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl opacity-60 mt-5">{description}</p>
    </div>
  );
};

export default AchivementCard;
