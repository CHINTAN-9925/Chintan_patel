import React from "react";
import Project from "./ProjectCard";
import demo from "../assets/demo.jpg";

// Define constant array for project data
const projectData = [
  {
    title: "Trend Blog",
    description: "A MERN stack web application enabling users to create, share, and manage engaging posts on trending topics, secured with JWT authentication.",
    image: demo,
    link: "https://github.com/CHINTAN-9925/Blog-MERN"
  },
  {
    title: "Chat App",
    description: "A real-time messaging application built with the MERN stack, WebSocket, and Tailwind CSS, allowing users to chat and create groups securely.",
    image: demo,
    link: "https://github.com/CHINTAN-9925/chat_app"
  },
  {
    title: "Social media App (UI)",
    description: "A visually appealing social media interface designed for seamless user interaction and engagement,where user can post their pictures.",
    image: demo,
    link: "https://github.com/CHINTAN-9925/instagram_clone"
  }
];

const Projects = () => {
  return (
    <>
      <h2
        id="projects"
        className="text-4xl font-bold mb-3 mt-16 lg:mt-[220px] text-center text-fullstack"
      >
        Projects
      </h2>

      <div className="flex flex-wrap justify-center lg:h-[100vh] md:flex-row font-martian mt-[20px] m-6">
        {projectData.map((project, index) => (
          <div key={index} className="w-auto md:w-1/3 p-2 h-84 mt-5">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
