import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#020617] text-white flex items-center px-10">
      <div className="max-w-3xl space-y-6">
        {/* Availability Badge */}
        <div className="inline-block px-4 py-1 text-xs tracking-widest text-blue-400 border border-blue-500 rounded-full">
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold">Gaurav Singh Bisht</h1>

        {/* Role */}
        <h2 className="text-xl text-gray-400">
          Software Developer{" "}
          <span className="text-blue-400">@Thoughts2binary</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          I specialize in building responsive and high-performance web
          applications using modern technologies like React, Tailwind CSS, and
          REST APIs. Focused on delivering scalable and clean UI solutions.
        </p>

        {/* Location + Email */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Lucknow, India</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail />
            <span>yourmail@gmail.com</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full flex items-center gap-2 transition">
            View Experience →
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2">
            Download Resume ⬇
          </button>
        </div>
      </div>

      <div>
        
      </div>
    </section>
  );
}
