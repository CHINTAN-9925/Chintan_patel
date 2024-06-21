"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image from "../assets/profilepic.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsAnimating(true);
    setIsOpen((prevState) => !prevState);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="text-white relative">
      {/* Main Navbar */}
      <div
        id="home"
        className="flex justify-between items-center font-bold m-10 text-lg font-martian animate-fadeInGrow"
      >
        {/* <Image src={image} alt="Logo" width={72} height={16} /> */}
        <div></div>
        <div className="hidden md:flex gap-10">
          <a
            href="#home"
            className='hover:text-white text-main_text_color relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300 '
          >
            Home
          </a>
          <a
            href="#about"
            className='hover:text-white text-main_text_color relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300 '
          >
            About
          </a>
          <a
            href="#projects"
            className='hover:text-white text-main_text_color relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300 '
          >
            Projects
          </a>
          <a
            href="#contact"
            className='hover:text-white text-main_text_color relative before:content-[""] before:block before:absolute before:w-0/100 before:h-[2px] before:bg-black before:bottom-0 before:left-0 hover:before:w-100/100 transition-width duration-300 '
          >
            Connect
          </a>
          <a
            className="hover:text-white text-main_text_color"
            href="Resume.pdf"
            target="_blank"
            download
          >
            Resume
          </a>
        </div>
        <button onClick={toggleNavbar} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 ${
          !isAnimating && !isOpen ? "hidden" : ""
        }`}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={toggleNavbar}
        ></div>
        <div
          className={`absolute top-0 transform transition-transform duration-300 right-0 w-64 h-full bg-gray-800 text-white overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleNavbar}
            className="absolute top-5 right-5 md:hidden"
          >
            ✕
          </button>
          <ul className="flex flex-col font-martian space-y-4 p-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Connect</a>
            </li>
            <li>
              <a href="Resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sticky Download Resume Button for Small Devices */}
      <a
        href="Resume.pdf"
        download
        className="fixed top-4 right-4 bg-blue-500 text-white p-2 rounded-lg shadow-md md:hidden"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Navbar;
