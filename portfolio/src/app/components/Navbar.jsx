"use client";

import Link from 'next/link'
import React,{useState} from 'react'
import NavLink from './NavLink'
import { IoMenu ,IoClose } from "react-icons/io5";
import MenuOverlay from './MenuOverlay';



const navLink = [
    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path:"#projects"
    },  {
        title:"Contact",
        path:"#contact"
    },
]

const Navbar = () => {

 const [navbarOpen,setNavbarOpen] = useState(false)


  return (
    <nav className='fixed top-0 border border-[#33353F] left-0 right-0 z-10 bg-[#121212] bg-opacity-100' >
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ' >
            <Link href={"/"} className='lg:text-2xl md:text-5xl text-white font-semibold' >MOHAMMED SAHIL M S</Link>
            <div className='mobile-menu block md:hidden ' >
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white' ><IoMenu className="h-5 w-5" /></button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white' ><IoClose className="h-5 w-5" /></button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto  ' id='navbar' >
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navLink.map((link,index) => (
                    <li key={index} >
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
            </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLink}/> : null}
    </nav>
  )
}

export default Navbar