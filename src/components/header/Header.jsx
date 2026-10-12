import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header >
            <div className="log">
                <img src="https://framerusercontent.com/images/w3sZiBC05z4WZCxZn5XzvnOKr4.svg" alt="" />
                <span>Vital+Flow</span>
            </div>

            <nav>
                <NavLink>About</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>Doctors</NavLink>
                <NavLink>Blog</NavLink>
            </nav>

            <button>Book a call</button>
        </header>

    </>
  )
}
