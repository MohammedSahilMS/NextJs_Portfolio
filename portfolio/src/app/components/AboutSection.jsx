"use client"

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2 '>
        <li className="list-item-pink">React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
      </ul>
    )
  },
  {
    title: "Certificates and Experience",
    id: "certificates and Experience",
    content: (
      <ul className='list-disc pl-2 '>
        <li>7 month internship on MERN Full Stack Development</li>
        <li>Internship on Machine Learning</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor of Technology (Computer Science) - KMEA Engineering College</li>
        <li>Vocational Higher Secondary Education (Computer Science and Information Technology) -  GVHSS Thrikkakara </li>
        <li>SSLC (CBSE) - Ideal Public School </li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16'>
        <Image
          src='/images/about.jpg'
          width={500}
          height={500}
          alt='about'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h1 className='text-3xl font-bold text-white mb-4'>About Me</h1>
          <p className='text-base lg:text-lg'>I am a b.tech Computer Science graduate, actively pursuing advanced coursework in FullStack Development, focusing on honing skills in building scalable and efficient applications using the MERN stack. I maintain a driven mindset to stay at the forefront of industry advancements. I am looking forward to contribute my technical expertise and passion for innovation to a dynamic development team.</p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("certificates and Experience")} active={tab === "certificates and Experience"}>Certificates and Experience</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
