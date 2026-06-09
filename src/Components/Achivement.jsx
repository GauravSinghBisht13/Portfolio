import React from "react";
import AchivementCard from "./AchivementCard";
import { useSelector } from "react-redux";

const Achivement = () => {
  const achivement = useSelector((state) => state.achiv.achivement);
  return (
    <>
      <div className="bg-blue-600/5 px-10 py-5">
        <div className="mt-15 ">
          <h1 className="text-5xl font-bold text-white my-8 w-3/4 m-auto gap-2">
            Key Achivements
            <p className="border-b-blue-400 border-b-4 w-60  mt-4 "></p>
          </h1>

          <div className="flex mt-20 gap-8 w-[85%] m-auto">
            {achivement.map((item, index) => (
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
