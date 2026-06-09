import React from "react";

const SkillCard = ({ key, item, icon: Icon }) => {
  const colorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
    purple: "text-purple-400",
    orange: "text-orange-400",
    pink: "text-pink-400",
    black: "text-white",
    gray: "text-gray-400",
  };
  console.log(item);

  return (
    <div
      className="text-white border-2 bg-white/5 border-white/10 rounded-2xl px-10 py-10 
                transition-all duration-300 ease-in-out transform 
                hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
    >
      <div>
        <h1 className="flex m-auto text-3xl gap-5 font-bold">
          <Icon className="text-blue-400 text-4xl " />
          {item.title}
        </h1>
      </div>

      <div className="flex gap-3 mt-10 flex-wrap">
        {item.skills.map((skill, index) => {
          const Icon = skill.icon; // get icon from object

          console.log("data coming from skill", skill);

          return (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 px-2 py-2 flex items-center gap-3"
            >
              <Icon className={`text-3xl ${colorMap[skill.color]}`} />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
