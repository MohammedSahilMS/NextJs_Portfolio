"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section aria-label="Hero Section">
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div 
          initial={{opacity: 0, scale: 0.5}} 
          animate={{opacity: 1, scale: 1}} 
          transition={{duration: 0.50}} 
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-3'>
              Hey, I&apos;m 
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Sahil.',
                1000,
                'a Full Stack Developer,',
                1000, 
                'a Frontend Developer,',
                1000,
                'a Backend Developer.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '55px', display: 'inline-block', lineHeight: '65px' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] sm:text-lg lg:text-xl mb-6 text-base'>
            I am a Junior MERN Stack Developer actively contributing to the Kochi Water Metro Pvt. Ltd. project. This experience has allowed me to grow my skills in building scalable and efficient web applications while focusing on user-centric designs.

            I enjoy tackling challenges with innovative solutions and staying updated with the latest technologies to keep my work fresh and relevant. I’m passionate about creating meaningful applications that make a real impact while continuously learning and improving as a developer.
          </p>
          <div>
            <button 
              className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-200 hover:text-black text-white duration-200 border border-white mr-4' 
              aria-label="Hire Me"
            >
              Hire Me
            </button>
            <button 
              className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:text-black text-white duration-200 mt-3' 
              aria-label="Download Resume"
            >
              Download Resume
            </button>
          </div>
        </motion.div>
        
        <div className='col-span-5 flex justify-center items-center mt-4 lg:mt-0'>
          <motion.div 
            initial={{opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.50}} 
            className='col-span-7 place-self-center text-center sm:text-left'
          >
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
              <Image
                src="/images/portfoliopic_1.jpeg"
                alt="Sahil Profile Picture"
                className='rounded-full'
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
