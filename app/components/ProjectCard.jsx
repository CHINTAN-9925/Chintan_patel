"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const Project = ({ title, description, image, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.005,
  });

  return (
    <div
      id="project"
      ref={ref}
      className={`bg-gray-800 max-w-xs mx-auto my-2 overflow-hidden shadow-lg rounded-lg transition-transform transform hover:scale-105 ${
        inView ? "" : "scale-75"
      }`}
    >
      <div className="p-4">
        <div className="h-40 w-full relative rounded-lg overflow-hidden">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="mt-4">
          <h1 className="text-xl font-bold text-white">{title}</h1>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <Link href={link} passHref>
            <div className="text-blue-500 hover:underline cursor-pointer">
              Visit Github
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
