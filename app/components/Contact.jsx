"use client";
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';



const ContactForm = () => {
   
    return (

        <div id='contact' className="h-[50vh] font-martian lg:h[100vh]">
            <h1 className=' font-bold text-5xl mb-8 text-center mt-16 text-fullstack'>Let's Connect</h1>
            <div className="container mx-auto flex justify-center items-center flex-col space-y-4">
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/CHINTAN-9925"
                        className="hover:text-white"
                        target='_blank'
                    >
                        <div className="icon-container p-2 rounded-full border-2 border-white ">
                            <FaGithub size={20} className=' hover:scale-x-90 text-yellow-200' />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chintan-patel-46536621b/"
                        className="hover:text-white"
                        target='_blank'
                    >
                        <div className="icon-container p-2 rounded-full border-2 border-white">
                            <FaLinkedin size={20} className="text-yellow-200 hover:scale-75" />
                        </div>
                    </a>
                </div>
                <div className="text-center flex justify-center items-center text-white whitespace-wrap ">
                    <span>Crafted with </span>
                    <span className="icon-container inline-block p-1 rounded-full space-x-4">
                        <FaHeart color="pink" />
                    </span>
                    <span className='flex space-x-4'>by Chintan</span>
                    {/* <span>&copy; 2024 All Rights Reserved</span> */}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
