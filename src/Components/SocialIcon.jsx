import React from "react";

const SocialIcon = ({ icon: Icon, url }) => {
  const isEmail = url.startsWith("mailto:");

  return (
    <a
      href={url}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      aria-label="Connect on social media"
      className="group flex items-center justify-center
        w-14 h-14 sm:w-16 sm:h-16
        rounded-xl border border-purple-500/30
        bg-white/[0.03] text-purple-400
        cursor-pointer
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:scale-105
        hover:bg-purple-600/15
        hover:border-purple-400
        hover:text-purple-300
        hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-purple-500"
    >
      <Icon
        className="text-3xl sm:text-4xl transition-transform duration-300
          group-hover:scale-110"
      />
    </a>
  );
};

export default SocialIcon;
