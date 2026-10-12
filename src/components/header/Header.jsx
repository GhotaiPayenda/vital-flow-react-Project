import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header className='flex justify-between items-center p-6  '>
            <div className="log flex gap-0.5">
                <div className='bg-blue-500 w-6 h-6 p-2 rounded-xs'>
                <img className='w-6' src="https://framerusercontent.com/images/w3sZiBC05z4WZCxZn5XzvnOKr4.svg" alt="" />

                </div>
                <span>Vital+Flow</span>
            </div>

            <nav className='flex gap-3 font-medium '>
                <NavLink to="">About</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>Doctors</NavLink>
                <NavLink>Blog</NavLink>
            </nav>

            <button className='bg-blue-500 text-white font-medium p-3 rounded-full'>Book a call</button>
        </header>

    </>
  )
}
