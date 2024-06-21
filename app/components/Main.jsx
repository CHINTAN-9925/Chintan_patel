import React from 'react'
import Image from 'next/image'
import image from '../assets/profilepic.png'

const Main = () => {
    return (
        <>
            <div id='main' className='flex flex-col md:flex-row text-main_text_color font-martian h-[80vh] mt-[100px] '>
                <div className="flex-1 justify-center text-left lg:ml-[120px] items-center m-6 p-4 font-bold md:text-6xl text-3xl animate-fadeInGrow">
                    HI! I'M CHINTAN <span className=" text-fullstack">SOFTWARE </span> DEVELOPER AND FREELANCER.
                </div>
                <div className="flex flex-1 justify-center items-center text-main_text_color font-bold text-5xl animate-fadeInGrow">
                    {/* image                 */}
                    {/* <Image src={image} alt="Logo" width={500} height={400} /> */}
                </div>
            </div>
        </>
    )
}

export default Main
