import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import SocialIcon from "./SocialIcon";

const Social = () => {
  const social = [
    {
      icon: CiMail,
      link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/gaurav-singh-bisht2001/?isSelfProfile=true",
    },
    {
      icon: FaGithub,
      link: "https://github.com/GauravSinghBisht13?tab=repositories",
    },
    {
      icon: IoLogoInstagram,
      link: "https://www.instagram.com/wanderlust__gaurav?igsh=eWp2bHE2bWJ2Mndy",
    },
  ];
  return (
    <div className="text-white py-10">
      <h1 className="text-5xl font-bold text-center py-10 opacity-60">
        Lets Connect...
      </h1>

      <div className="flex m-auto gap-5 justify-center">
        {social.map((Icon, index) => (
          <SocialIcon key={index} icon={Icon.icon} url={Icon.link}></SocialIcon>
        ))}
      </div>

      <br />
      <br />
    </div>
  );
};

export default Social;
