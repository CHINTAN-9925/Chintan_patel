"use client";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
  

const Project = ({ title, description, image, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.005     
  });
  return (
    <div id='project' ref={ref} className={`bg-gray-200 max-w-sm mx-auto my-10 overflow-hidden shadow-lg rounded-lg transition-transform transform duration-100 hover:scale-105 ${inView ? 'animate-fadeInGrow' : ''}`}>
      
      <div className="relative h-56 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      
      <div className="p-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500 mt-2">{description}</p>
        
        <div className="mt-5 flex justify-between items-center">
          <Link href={link}>
            <div className="text-blue-500 hover:underline">Read more</div>
          </Link>
          
          {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
            Click Me
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
