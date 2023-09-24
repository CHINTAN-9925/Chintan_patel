"use client";
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        sender: '',
        message: ''
    });
    const [ref, inView] = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1      // Trigger when 10% of the element is visible
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log(formData)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Server Response:', responseData.status);
            if (responseData.status === 'ok') {
                toast.success(`${responseData.message}`);
            } else {
                toast.error('Failed to send email.');
            }
            setFormData({ name: '', sender: '', message: '' });
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);
        }
    };


    return (
        <div id='contact' className={`h-[80vh] font-martian flex justify-center items-center ${inView ? 'animate-fadeInGrow' : ''}`} ref={ref}>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="w-full max-w-md p-4"> {/* <-- changed from max-w-lg to max-w-md */}
                <h1 className='text-main_text_color font-bold text-3xl mb-8 '>Contact</h1>
                <div className="mb-4">
                    <label className="block text-main_text_color text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-main_text_color text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="sender"
                        placeholder="Your email address"
                        value={formData.sender}
                        onChange={handleChange}
                        className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-main_text_color text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>

                </div>
            </form>
        </div>
    );
};

export default ContactForm;
