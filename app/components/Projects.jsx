import React from 'react'
import Project from './ProjectCard'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-wrap md:flex-row font-martian mt-[100px] mb-[100px] m-6'>
            <div className="w-full md:w-1/3 p-2 h-84 mt-5">
                <Project
                    title="My Cool Project"
                    description="This is a description of my cool project. It does amazing things and uses the latest technologies."
                    image="/path/to/your/image.jpg"
                    link="/path/to/project/details"
                />
            </div>
            <div className="w-full md:w-1/3 p-2 h-84 mt-5">
                <Project
                    title="My Cool Project"
                    description="This is a description of my cool project. It does amazing things and uses the latest technologies."
                    image="/path/to/your/image.jpg"
                    link="/path/to/project/details"
                />
            </div>
            <div className="w-full md:w-1/3 p-2 h-84 mt-5">
                <Project
                    title="My Cool Project"
                    description="This is a description of my cool project. It does amazing things and uses the latest technologies."
                    image="/path/to/your/image.jpg"
                    link="/path/to/project/details"
                />
            </div>
            <div className="w-full md:w-1/3 p-2 h-84 mt-5">
                <Project
                    title="My Cool Project"
                    description="This is a description of my cool project. It does amazing things and uses the latest technologies."
                    image="/path/to/your/image.jpg"
                    link="/path/to/project/details"
                />
            </div>
            <div className="w-full md:w-1/3 p-2 h-84 mt-5">
                <Project
                    title="My Cool Project"
                    description="This is a description of my cool project. It does amazing things and uses the latest technologies."
                    image="/path/to/your/image.jpg"
                    link="/path/to/project/details"
                />
            </div>
            <div className="w-full md:w-1/3 p-2 h-84 mt-5">
                <Project
                    title="My Cool Project"
                    description="This is a description of my cool project. It does amazing things and uses the latest technologies."
                    image="/path/to/your/image.jpg"
                    link="/path/to/project/details"
                />
            </div>
        </div>

    )
}

export default Projects
