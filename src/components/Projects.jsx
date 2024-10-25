import React from 'react';

function Projects() {
  return (
    <section className="my-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://via.placeholder.com/400"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">E-Commerce Website</h3>
            <p className="text-gray-700">
              A fully-featured e-commerce platform built using React, Node.js, and MongoDB.
            </p>
            <a
              href="https://your-live-site-link.com"
              className="text-indigo-500 hover:underline mt-4 block"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
