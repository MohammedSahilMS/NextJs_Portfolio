"use client"

import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id:1,
        title:"Transcriber and Translator",
        description:"React Transcriber and Translator using Machine Learning",
        image:"/images/projects/voice1.png",
        tag:["All","Frontend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"AI Image Generator",
        description:"React AI image generator using DALL-E ",
        image:"/images/projects/voice2.png",
        tag:["All","Frontend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"Real-time Chat App",
        description:"Real time chat  app using React, Node, ChatEngine.io and Firebase",
        image:"/images/projects/voice3.png",
        tag:["All","Full Stack","Backend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"E commerce App",
        description:"Full stack e commerce app using MERN Stack",
        image:"/images/projects/voice1.png",
        tag:["All","Full Stack","Backend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:5,
        title:"TODP App",
        description:"Todo application using React",
        image:"/images/projects/todoProject.png",
        tag:["All","Frontend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:6,
        title:"Blood Donation List",
        description:"A full stack MERN Application to enter details of people willing to donate blood",
        image:"/images/projects/voice1.png",
        tag:["All","Backend","Full Stack"],
        gitUrl:"/",
        previewUrl:"/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    // Filter projects based on the selected tag
    const filteredProjects = projectsData.filter((project) => {
        return project.tag.includes(tag); // Return the result of the filtering operation
    });

    return (
        <>
<div className='px-2'>
    <h2 className='text-center text-4xl font-bold text-white mb-5'>My Projects</h2>
    <div className='text-white flex flex-col md:flex-row justify-center items-center gap-2 py-6 '>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Full Stack" isSelected={tag === "Full Stack"} />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === "Frontend"} />
            <ProjectTag onClick={handleTagChange} name="Backend" isSelected={tag === "Backend"} />
        </div>
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {/* Render filtered projects */}
        {filteredProjects.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
        ))}
    </div>
</div>
            
        </>
    );
};

export default ProjectSection;
