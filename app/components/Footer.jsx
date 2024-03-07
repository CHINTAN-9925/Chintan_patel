import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center flex-col space-y-4">
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourUsername"
            className="hover:text-gray-400"
          >
            <div className="icon-container p-2 rounded-full border-2 border-white hover:border-gray-400">
              <FaGithub size={20} />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/yourUsername"
            className="hover:text-gray-400"
          >
            <div className="icon-container p-2 rounded-full border-2 border-white hover:border-gray-400">
              <FaLinkedin size={20}/>
            </div>
          </a>
        </div>
        <div className="text-center flex justify-center items-center ">
          <span>Crafted with </span>
          <span className="icon-container inline-block p-1 rounded-full space-x-4">
            <FaHeart color="pink" />
          </span>
          <span className='flex space-x-4'>by Chintan</span>
          <span>&copy; {currentYear} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
