"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SiNestjs, SiExpress } from "react-icons/si";
import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.0005
    });
    const icon_size = 50;
    const techStack = [
        { name: "NestJS", icon: <SiNestjs size={icon_size} /> },
        { name: "ExpressJS", icon: <SiExpress size={icon_size} /> },
        { name: "React", icon: <FaReact size={icon_size} /> },
        { name: "NextJS", icon: <TbBrandNextjs size={icon_size} /> },
        { name: "Docker", icon: <FaDocker size={icon_size} /> },
        { name: "AWS", icon: <FaAws size={icon_size} /> }
    ];

    return (
        <div id='about'
            ref={ref}
            className={`font-martian lg:h-[100vh] lg:items-center max-w-4xl mx-auto p-6 bg-font-martian text-main_text_color border-none rounded-lg shadow-md transition-transform transform duration-300 ${inView ? 'animate-fadeInGrow' : ''}  lg:text-center lg:mt-16 lg:mb-16 lg:ml-auto lg:mr-auto`}>
            <h2 className='text-5xl font-bold mb-6 lg:mt-0 text-center text-fullstack'>About me</h2>
            <p className='mb-2 text-xl text-center'>
                I&apos;m a web developer, freeliancer skilled in the MERN stack, With experience in MongoDB, Express.js, React, and Node.js, I build dynamic and interactive platforms on the web.
            </p>
            <p className='mb-2 text-xl text-center'>
                I have completed my internship as a full-stack developer at Flex Coder, where I learned about Nest.js, Microservice, and Containerization using Docker.
            </p>
            <p className='mb-4 text-xl text-center'>
                I&apos;m keenly interested in AWS cloud services, Docker, and machine learning. Eager to explore new technologies and expand my skill set to create even more innovative solutions.
            </p>
            <p className='mb-4 mt-4 text-xl text-center'>Here is my Tech Stack...</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {techStack.map((tech, index) => (
                    <li key={index} className="h-16 flex items-center justify-around py-1 px-2 rounded-full text-white-500 text-white">
                        <div className='flex justify-center items-center space-x-2 mt-1'>
                            {tech.icon}
                            <span className='flex justify-center items-center text-xs md:text-base'>{tech.name}</span>

                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default About;
