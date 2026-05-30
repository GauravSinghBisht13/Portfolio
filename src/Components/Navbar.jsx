import "../index.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="w-full bg-[#020617] text-white px-8 py-4 flex items-center justify-between">
        {/* Left Logo / Name */}
        {/* Name Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">G</span>aurav{" "}
          <span className="text-blue-500">S</span>ingh{" "}
          <span className="text-blue-500">B</span>isht
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-8 text-xl">
          <p
            className="cursor-pointer hover:text-gray-300"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </p>
          <p
            className="cursor-pointer hover:text-gray-300"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </p>
          <p
            className="cursor-pointer hover:text-gray-300"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </p>

          {/* LinkedIn Icon Placeholder */}
          <div className="flex items-center gap-5">
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gaurav-singh-bisht2001/?isSelfProfile=true",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="text-lg cursor-pointer hover:text-blue-400 size-6"
            />
            <FaGithub
              onClick={() =>
                window.open(
                  "https://github.com/GauravSinghBisht13?tab=repositories",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="text-lg cursor-pointer hover:text-gray-300 size-6"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
