"use client"

import React,{useState , useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion , useInView} from "framer-motion"


const projectsData = [
    {
        id:1,
        title:"Kochi Water Metro , PCS",
        description:"Passenger Counting system",
        image:"/images/projects/water_metro_1.png",
        tag:["All","Frontend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"AI Image Generator",
        description:"React AI image generator using openai's DALL-E ",
        image:"/images/projects/image_gen.png",
        tag:["All","Frontend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"Real-time Chat App",
        description:"Real time chat  app using React, Node, ChatEngine.io and Firebase",
        image:"/images/projects/chat.png",
        tag:["All","Full Stack","Backend"],
        gitUrl:"https://github.com/MohammedSahilMS/ChatApp_Firebasehttps://github.com/MohammedSahilMS/Mern_chatEngine_chatApp",
        previewUrl:"/"
    },
    {
        id:4,
        title:"Voice Verse",
        description:"React App which transcribes and translates voice in real time.",
        image:"/images/projects/voice1.png",
        tag:["All","Full Stack","Backend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:5,
        title:"TODO App",
        description:"Todo application using React",
        image:"/images/projects/todoProject.png",
        tag:["All","Frontend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:6,
        title:"Apple Webiste using GSAP",
        description:"Apple webiste implementing modern animation using GSAP.",
        image:"/images/projects/apple.png",
        tag:["All","Backend","Full Stack"],
        gitUrl:"/",
        previewUrl:"/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once : true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    // Filter projects based on the selected tag
    const filteredProjects = projectsData.filter((project) => {
        return project.tag.includes(tag); // Return the result of the filtering operation
    });

    const cardVariants = {
        initial:{ y:50, opacity:0},
        animate:{y:0,opacity:1},
    }

    return (
        <>
        <section >
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
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {/* Render filtered projects */}
        {filteredProjects.map((project , index) => (
            <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} 
            transition={{duration: 0.2 , delay: index * 0.4}} >
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
            </motion.li>
        ))}
    </ul>
</div>
        </section>

            
        </>
    );
};

export default ProjectSection;
