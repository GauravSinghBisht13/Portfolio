import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import SocialIcon from "./SocialIcon";

const Social = () => {
  const social = [
    {
      icon: CiMail,
      link: "mailto:gvsingh999@gmail.com",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/gaurav-singh-bisht2001/",
    },
    {
      icon: FaGithub,
      link: "https://github.com/GauravSinghBisht13",
    },
    {
      icon: IoLogoInstagram,
      link: "https://www.instagram.com/wanderlust__gaurav/",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-5">
      <div className="w-full md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full md:w-[60%]">
            <p className="text-purple-500 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
              Get in touch
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="text-purple-500">Connect.</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Have an idea, an opportunity, or just want to connect? Feel free
              to reach out. I'd love to hear from you.
            </p>
          </div>

          {/* Right Social Icons */}
          <div className="w-full md:w-[40%] flex flex-wrap md:justify-end justify-start items-center gap-4">
            {social.map((item, index) => (
              <SocialIcon key={index} icon={item.icon} url={item.link} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-purple-800 to-transparent" />

        <p className="text-gray-600 text-xs sm:text-sm mt-5 text-center">
          Designed & built with <span className="text-purple-500">♥</span> by
          Gaurav
        </p>
      </div>
    </section>
  );
};

export default Social;
