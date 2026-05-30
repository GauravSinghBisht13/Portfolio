import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const ProjectsData = [
    {
      title: "Twitter Clone",
      description:
        "A full-stack social media application replicated using the MERN (MongoDB, Express.js, React, Node.js) tech stack. It features real-time-inspired user interactions, dynamic content updates, and a fully deployed responsive interface.",
      image: "https://portfolio-gauravsinghbisht.netlify.app/Twitter.png",
      technologies: ["HTML", "CSS", " React.Js"],
      view: "https://www.linkedin.com/posts/gaurav-singh-bisht2001_twitterclone-fullstackdevelopment-nodejs-ugcPost-7204517551748386816-_XSi/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Netflix Clone",
      description:
        "A front-end web application that replicates the familiar user interface and design layout of Netflix. Built using HTML, CSS, JavaScript, and Bootstrap, it showcases smooth media grids, responsive layouts, and modern UI/UX design styling.",
      image: "https://portfolio-gauravsinghbisht.netlify.app/Netflix.png",
      technologies: ["HTML", "CSS", " React.Js", "JavaScript", "Tailwind CSS"],
      view: "https://www.linkedin.com/posts/gaurav-singh-bisht2001_frontenddevelopment-webdevelopment-netflixclone-ugcPost-7114683678491840512-ajZ8/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "DrumKit Game",
      description:
        "An interactive, web-based musical application developed using vanilla JavaScript. It leverages DOM manipulation and event listeners to trigger realistic audio playbacks based on user keyboard inputs or mouse clicks.",
      image: "https://portfolio-gauravsinghbisht.netlify.app/Drumkit.png",
      technologies: ["HTML", "CSS", " React.Js", "JavaScript", "Tailwind CSS"],
      view: "https://github.com/GauravSinghBisht13/Drum-Kit-Game",
    },

    {
      title: "ShopVista",
      description:
        "An e-commerce front-end platform featuring a sleek landing page with trade-in offers and product categories. It was developed using HTML, CSS, and JavaScript to deliver an engaging, user-friendly shopping experience.",
      image: "https://portfolio-gauravsinghbisht.netlify.app/Shopvista.png",
      technologies: ["HTML", "CSS", " React.Js", "JavaScript", "Tailwind CSS"],
      view: "https://www.linkedin.com/posts/gaurav-singh-bisht2001_shopvita-ecommerce-innovation-ugcPost-7192902329245835264-9V3H/?utm_source=share&utm_medium=member_desktop",
    },

    {
      title: "Todo List",
      description:
        "A functional productivity application built with React.js that allows users to seamlessly manage daily tasks. It features state management capabilities enabling users to add, track, and remove list items dynamically.",
      image: "https://portfolio-gauravsinghbisht.netlify.app/Todo.png",
      technologies: ["HTML", "CSS", " React.Js", "JavaScript", "Tailwind CSS"],
      view: "https://www.linkedin.com/posts/gaurav-singh-bisht2001_projectdevelopment-reactjs-html-ugcPost-7194955940968714240-hjbd/?utm_source=share&utm_medium=member_desktop",
    },

    {
      title: "Dice Game",
      description:
        "A fun, user-friendly web application designed for a 2-player dice game. Developed using JavaScript logic, it randomly generates dice values on every roll and dynamically announces the winner on the screen.",
      image:
        "https://portfolio-gauravsinghbisht.netlify.app/Screenshot%20(113).png",
      technologies: ["HTML", "CSS", " React.Js", "JavaScript", "Tailwind CSS"],
      view: "https://www.linkedin.com/posts/gaurav-singh-bisht2001_excited-to-share-my-basic-dice-roll-ugcPost-7188655513688051713-20B0/?utm_source=share&utm_medium=member_desktop",
    },
  ];
  return (
    <>
      <section id="projects">
        <div className="py-10">
          <h1 className="text-5xl font-bold text-white my-8 w-3/4 m-auto gap-2 py-10">
            Projects Gallery
            <p className="border-b-blue-400 border-b-4 w-60  mt-4 "></p>
          </h1>

          <div className="grid grid-cols-3 gap-8 mt-20 w-[85%] m-auto">
            {ProjectsData.map((item, index) => (
              <ProjectCard key={index} data={item}></ProjectCard>
            ))}
          </div>
        </div>
        <div className="border-b-1 border-white/10"></div>
      </section>
    </>
  );
};

export default Projects;
