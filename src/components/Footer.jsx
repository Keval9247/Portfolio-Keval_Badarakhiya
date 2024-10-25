import React, { useState } from 'react';

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">

        {/* Name or Brand */}
        <h2 className="text-3xl font-bold mb-6">Keval Badarakhiya</h2>

        {/* Navigation Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-8 text-sm">
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.49v-1.75c-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.49-1.11-1.49-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-5.01 0-1.11.4-2.01 1.04-2.72-.1-.25-.45-1.26.1-2.64 0 0 .85-.27 2.8 1.02a9.54 9.54 0 012.56-.34c.87 0 1.74.12 2.56.34 1.95-1.29 2.8-1.02 2.8-1.02.55 1.38.2 2.39.1 2.64.64.71 1.04 1.61 1.04 2.72 0 3.89-2.34 4.76-4.57 5.01.35.31.68.93.68 1.87v2.77c0 .28.18.58.69.49C19.14 20.15 22 16.41 22 12c0-5.52-4.48-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.6c-1 0-1.5-.7-1.5-1.5s.5-1.5 1.5-1.5 1.5.7 1.5 1.5-.5 1.5-1.5 1.5zm13.5 11.6h-3v-5.3c0-1.3-.3-2.7-2-2.7s-2.3 1.3-2.3 2.7v5.3h-3v-10h3v1.3h.1c.4-.6 1.3-1.3 2.7-1.3 3 0 3.6 2 3.6 4.7v5.3z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.301 4.301 0 001.88-2.37 8.485 8.485 0 01-2.72 1.04 4.273 4.273 0 00-7.29 3.89 12.144 12.144 0 01-8.82-4.47 4.306 4.306 0 001.33 5.72 4.238 4.238 0 01-1.94-.53v.05a4.278 4.278 0 003.42 4.19 4.27 4.27 0 01-1.93.07 4.282 4.282 0 003.99 2.97 8.574 8.574 0 01-6.31 1.77 12.125 12.125 0 006.56 1.92c7.88 0 12.19-6.53 12.19-12.19v-.55A8.724 8.724 0 0024 4.59a8.435 8.435 0 01-2.54.7z" />
            </svg>
          </a>
        </div>

        {/* Reveal Contact Info Button */}
        <button
          onClick={toggleContactInfo}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none transition duration-300"
        >
          {showContact ? "Hide Contact Info" : "View Contact Info"}
        </button>

        {/* Contact Info Section */}
        {showContact && (
          <div className="mt-6">
            <p className="text-gray-500 text-sm">
              Email: <a href="mailto:youremail@gmail.com" className="hover:text-gray-300">youremail@gmail.com</a>
            </p>
            <p className="text-gray-500 text-sm">
              Phone: <a href="tel:+1234567890" className="hover:text-gray-300">+123 456 7890</a>
            </p>
          </div>
        )}

        {/* Copyright Information */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Your Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
