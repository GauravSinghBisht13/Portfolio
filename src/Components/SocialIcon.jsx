import React from "react";

const SocialIcon = ({ icon: Icon, url }) => {
  return (
    <div
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      className="text-5xl px-3 py-3 border border-white/10 bg-white/5 rounded-xl cursor-pointer 
             transition-all duration-300 transform hover:bg-white/10 hover:-translate-y-1 hover:scale-105"
    >
      <Icon className="text-blue-400" />
    </div>
  );
};

export default SocialIcon;
