
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = ({ isActive }) =>
    `block py-2 transition-colors duration-200 ${
      isActive
        ? 'text-blue-500 font-semibold'
        : 'text-gray-700 hover:text-blue-500'
    }`

  return (
    <header className="fixed w-full bg-white flex items-center justify-between px-4 py-4 lg:px-8 shadow-sm">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 w-8 h-8 p-1.5 rounded-md">
          <img
            className="w-full"
            src="https://framerusercontent.com/images/w3sZiBC05z4WZCxZn5XzvnOKr4.svg"
            alt="Vital+Flow logo"
          />
        </div>

        <span className="text-xl font-bold">Vital+Flow</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 font-medium">
        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>

        <NavLink to="/services" className={linkStyle}>
          Services
        </NavLink>

        <NavLink to="/doctors" className={linkStyle}>
          Doctors
        </NavLink>

        <NavLink to="/blog" className={linkStyle}>
          Blog
        </NavLink>
      </nav>

      {/* Desktop Button */}
      <button className="hidden md:block bg-blue-500 text-white font-medium px-5 py-3 rounded-full hover:bg-blue-600 transition">
        Book a call
      </button>

      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            menuOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />

        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />

        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            menuOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg px-5 overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen
            ? 'max-h-96 opacity-100 py-5'
            : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col font-medium">
          <NavLink
            to="/about"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>

          <NavLink
            to="/doctors"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Doctors
          </NavLink>

          <NavLink
            to="/blog"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>

          <button
            className="mt-3 w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition"
          >
            Book a call
          </button>
        </nav>
      </div>
    </header>
  )
}
