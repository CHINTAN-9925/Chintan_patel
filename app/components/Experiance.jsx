"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1     
  });

  return (
    <div id='experience'
      ref={ref}
      className={`max-w-md mx-auto p-6 bg-gray-200 border rounded-lg shadow-md mt-10 transition-transform transform duration-300 ${inView ? 'animate-fadeInGrow' : ''}`}>
      <h2 className='text-2xl font-bold mb-4'>Internship Experience</h2>
      <h3 className='text-xl mb-2'>Backend Developer at Flex Coder</h3>
      <p className='mb-2'>
        I am currently undertaking an internship as a Backend Developer at <strong>Flex Coder</strong>, a startup based in the Netherlands. 
      </p>
      <p className='mb-2'>
        My primary responsibility revolves around developing backend applications using <strong>NestJS</strong>. The experience has been enriching, and I have garnered extensive knowledge and hands-on experience in backend development.
      </p>
      <p>
        Additionally, I've had the opportunity to learn about the <strong>microservice architecture</strong>, further enhancing my backend development skills and understanding of scalable application architecture.
      </p>
    </div>
  )
}

export default Experience;
