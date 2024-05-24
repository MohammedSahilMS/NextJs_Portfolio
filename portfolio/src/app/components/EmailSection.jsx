"use client"

import React ,{useState} from 'react'
import { FaLinkedinIn,FaGithub } from "react-icons/fa";



const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <>
    <section className='grid md:grid-cols-2 md:my-12 my-12 py-24 gap-4 relative mx-10'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate=1/2 '  ></div>
        <div className='z-10' >
        <h5 className='text-xl font-bold text-white my-2' >Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>I'm currently looking for new opportunities, my inbox is always open. Whether have a question or just want to say hi, I'll try my best to get back to you!</p>

        <div className='socials flex flex-row gap-2'>
    <a href="https://github.com/hephaistos02" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} />
    </a>
    <a href="https://www.linkedin.com/in/mohammed-sahil-m-s/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn size={32}  /> 
    </a>
    </div>

    </div>
    <div className='mx-2'>
    <form onSubmit={handleSubmit} className='flex flex-col '>
        <div className='mb-6' >
        <label htmlFor="email" className='text-white block  mb-1 text-sm font-medium'>Your Email</label>
        <input name='email' type="email" id='email' required className='bg-[#18191E] border-[#33353F] placeholder-[9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5    ' placeholder='example@gmail.com' />
        </div>
       
        <div className="mb-6">
        <label htmlFor="subject" className='text-white block mb-1 text-sm font-medium'>Subject</label>
        <input name='subject' type="text" id='subject' required className='bg-[#18191E] border-[#33353F] placeholder-[9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5    ' placeholder='Job Offer' />
        </div>
        
        <div className="mb-6">
            <label htmlFor="message" className='text-white block text-sm mb-2 font-medium' >Message</label>
            <textarea name="message" id="message"  className='bg-[#18191E] border-[#33353F] placeholder-[9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5    'placeholder="Let's talk about..." ></textarea>
        </div>
        <button type='submit' className='bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full' >Send Message</button>
        {
          emailSubmitted && (
            <p className='text-green-500 text-sm mt-2' >Email was sent successfully!</p>
          )
        }
        </form>
    </div>
    </section>
    </>
    
  )
}

export default EmailSection