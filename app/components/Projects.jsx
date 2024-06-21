import React from "react";
import Project from "./ProjectCard";
import demo from "../assets/demo.jpg";

const Projects = () => {
  return (
    <>
      <h2
        id="projects"
        className="text-4xl font-bold mb-3 mt-16 lg:mt-[220px] text-center text-fullstack"
      >
        Project
      </h2>

      <div className="flex flex-wrap justify-center lg:h-[100vh] md:flex-row font-martian mt-[20px] m-6">
        <div className="w-full md:w-1/3 p-2 h-84 mt-5">
          <Project
            title="Trend Blog"
            description="A MERN stack web application enabling users to create, share, and manage engaging posts on trending topics, secured with JWT authentication."
            image={demo}
            link="https://github.com/CHINTAN-9925/Blog-MERN"
          />
        </div>
        <div className="w-full md:w-1/3 p-2 h-84 mt-5">
          <Project
            title="Chat App"
            description="A real-time messaging application built with the MERN stack, WebSocket, and Tailwind CSS, allowing users to chat and create groups securely."
            image={demo}
            link="https://github.com/CHINTAN-9925/chat_app"
          />
        </div>
        <div className="w-full md:w-1/3 p-2 h-84 mt-5">
          <Project
            title="Social media App (UI)"
            description="A visually appealing social media interface designed for seamless user interaction and engagement,where user can post their pictures."
            image={demo}
            link="https://github.com/CHINTAN-9925/instagram_clone"
          />
        </div>
       
      </div>
    </>
  );
};

export default Projects;
