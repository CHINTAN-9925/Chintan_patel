"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { SiNestjs, SiExpress, SiMongodb, SiNodeDotJs } from "react-icons/si";
import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.0005,
  });
  const icon_size = 50;
  const techStack = [
    { name: "NestJS", icon: <SiNestjs size={icon_size} /> },
    { name: "ExpressJS", icon: <SiExpress size={icon_size} /> },
    { name: "React", icon: <FaReact size={icon_size} /> },
    { name: "NextJS", icon: <TbBrandNextjs size={icon_size} /> },
    { name: "Docker", icon: <FaDocker size={icon_size} /> },
    { name: "AWS", icon: <FaAws size={icon_size} /> },
  ];

  return (
    <div
      id="about"
      ref={ref}
      className={`font-martian lg:h-[100vh] lg:items-center max-w-4xl mx-auto p-6 text-main_text_color border-none rounded-lg shadow-md transition-transform transform duration-300 ${
        inView ? "animate-fadeInGrow" : ""
      } lg:text-center lg:mt-16 lg:mb-16 lg:ml-auto lg:mr-auto`}
    >
      <h2 className="text-4xl font-bold mb-6 lg:mt-0 text-center text-fullstack">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-lg mb-8 md:mb-0">
          {" "}
          {/* Added mb-8 and md:mb-0 for margin adjustment */}
          <h3 className="text-3xl font-bold mb-4">Who I Am</h3>
          <p className="mb-4 text-center">
            I&apos;m a web developer, freelancer skilled in the MERN stack, with
            experience in MongoDB, Express.js, React, and Node.js. I build
            dynamic and interactive platforms on the web.
          </p>
          <p className="mb-4 text-center">
            I have completed my internship as a full-stack developer at Flex
            Coder, where I learned about Nest.js, Microservice, and
            Containerization using Docker.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
          {" "}
          {/* No change here */}
          <h3 className="text-3xl font-bold mb-4">Interests</h3>
          <p className="mb-4 text-center">
          I&apos;m keenly interested in AWS cloud services, Docker, and machine
            learning. Eager to explore new technologies and expand my skill set
            to create even more innovative solutions.
          </p>
        </div>
      </div>
      <p className="mb-8 mt-8 text-center text-white text-2xl">
        Here is my Tech Stack...
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-center mb-2">
              {tech.icon}
            </div>
            <span className="text-xs md:text-base">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
