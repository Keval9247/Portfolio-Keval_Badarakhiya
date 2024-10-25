import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6 shadow-lg p-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-tight">My Portfolio</h1>
        <nav className="space-x-8">
          <Link to="/" className="hover:text-indigo-300 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-indigo-300 transition duration-300">About</Link>
          <Link to="/projects" className="hover:text-indigo-300 transition duration-300">Projects</Link>
          <Link to="/skills" className="hover:text-indigo-300 transition duration-300">Skills</Link>
          <Link to="/experience" className="hover:text-indigo-300 transition duration-300">Experience</Link>
          <Link to="/blog" className="hover:text-indigo-300 transition duration-300">Blog</Link>
          <Link to="/contact" className="hover:text-indigo-300 transition duration-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
