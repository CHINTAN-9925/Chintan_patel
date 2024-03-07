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
    <div 
      id='project' 
      ref={ref} 
      className={`bg-gray-200 max-w-xs mx-auto my-2  overflow-hidden shadow-lg rounded-lg transition-transform transform  hover:scale-105 ${inView ? '' : 'scale-75'}`}
    >
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-500 mt-2">{description}</p>
        
        <div className="mt-5 flex justify-between items-center">
          <Link href={link}>
            <div className="text-blue-500 hover:underline">Read more</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
  