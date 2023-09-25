"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SiNestjs, SiExpress } from "react-icons/si";
import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const Experience = () => {
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
        <div id='experience'
            ref={ref}
            className={`font-martian max-w-4xl mx-auto p-6 bg-font-martian text-main_text_color border-none rounded-lg shadow-md transition-transform transform duration-300 ${inView ? 'animate-fadeInGrow' : ''}`}>
            <h2 className='text-3xl font-bold mb-4'>Experience</h2>
            <h3 className='text-2xl mb-4'>Backend Intern at Flex Coder</h3>
            <p className='mb-2'>
                I am currently undertaking an internship as a Backend Developer at <strong className='text-blue-900'>Flex Coder</strong>, a startup based in the Netherlands.
            </p>
            <p className='mb-2'>
                My primary responsibility revolves around developing backend applications using <strong className='text-blue-900'>NestJS</strong>. The experience has been enriching, and I have garnered extensive knowledge and hands-on experience in backend development.
            </p>
            <p className='mb-4'>
                Additionally, I've had the opportunity to learn about the <strong className='text-blue-900'>Microservice Architecture</strong>, further enhancing my backend development skills and understanding of scalable application architecture.
            </p>
            <p className='mb-4'>Here is my Tech Stack...</p>
            {/* <h4 className='text-3xl mb-4 my-8'>Tech Stack</h4> */}
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {techStack.map((tech, index) => (
                    <li key={index} className="h-16 flex items-center justify-around py-1 px-2 rounded-full text-white-500">
                        <div className='flex justify-center space-x-4 mt-7'> {/* <-- Increased spacing to space-x-4 */}
                            {tech.icon}
                            <span className='flex justify-center items-center'>{tech.name}</span>
                        </div>
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default Experience;
