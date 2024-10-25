import React from 'react';
import ContactInfo from './contactInfo/ContactInfo';
import { Tooltip } from '@mui/material';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        {/* Name or Brand */}
        <h2 className="text-3xl font-bold mb-6">FIND ME ON</h2>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-8">
          {/* GitHub Link */}
          <Tooltip title="GitHub">
            <a
              href="https://github.com/Keval9247"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.49v-1.75c-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.49-1.11-1.49-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-5.01 0-1.11.4-2.01 1.04-2.72-.1-.25-.45-1.26.1-2.64 0 0 .85-.27 2.8 1.02a9.54 9.54 0 012.56-.34c.87 0 1.74.12 2.56.34 1.95-1.29 2.8-1.02 2.8-1.02.55 1.38.2 2.39.1 2.64.64.71 1.04 1.61 1.04 2.72 0 3.89-2.34 4.76-4.57 5.01.35.31.68.93.68 1.87v2.77c0 .28.18.58.69.49C19.14 20.15 22 16.41 22 12c0-5.52-4.48-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Tooltip>

          {/* LinkedIn Link */}
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/keval-badarakhiya-879443219"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.6c-1 0-1.5-.7-1.5-1.5s.5-1.5 1.5-1.5 1.5.7 1.5 1.5-.5 1.5-1.5 1.5zm13.5 11.6h-3v-5.3c0-1.3-.3-2.7-2-2.7s-2.3 1.3-2.3 2.7v5.3h-3v-10h3v1.3h.1c.4-.6 1.3-1.3 2.7-1.3 3 0 3.6 2 3.6 4.7v5.3z" />
              </svg>
            </a>
          </Tooltip>

          {/* Facebook Link */}
          <Tooltip title="Facebook">
            <a
              href="https://www.facebook.com/KevalBadarakhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.35C0 23.405.595 24 1.325 24h21.35C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0zM12 24V12h-3V8h3V6.5C12 4 13.79 2.5 16.5 2.5h3v3h-2.25C15.01 5.5 14 6.5 14 8v4h4l-1 4h-3v12h-4z" />
              </svg>
            </a>
          </Tooltip>

          {/* Instagram Link */}
          <Tooltip title="Instagram">
            <a
              href="https://www.instagram.com/_keval_._05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M12 2.162c3.206 0 3.579.012 4.842.07 1.185.057 1.98.246 2.44.414.676.23 1.169.53 1.678 1.04.507.51.81 1.002 1.04 1.678.168.46.357 1.255.414 2.44.057 1.262.069 1.636.069 4.842s-.012 3.58-.069 4.842c-.057 1.185-.246 1.98-.414 2.44a4.965 4.965 0 0 1-1.04 1.678c-.51.507-1.002.81-1.678 1.04-.484.151-1.185.343-2.44.414-1.262.057-1.636.069-4.842.069s-3.58-.012-4.842-.069c-1.185-.057-1.98-.246-2.44-.414a4.965 4.965 0 0 1-1.678-1.04c-.507-.51-.81-1.002-1.04-1.678-.151-.484-.343-1.185-.414-2.44C2.175 15.744 2.162 15.368 2.162 12s.012-3.58.07-4.842c.057-1.185.246-1.98.414-2.44A4.965 4.965 0 0 1 3.93 3.4a4.965 4.965 0 0 1 1.678-1.04c.484-.151 1.185-.343 2.44-.414C8.42 2.175 8.794 2.162 12 2.162zm0 1.164c-3.145 0-3.501.012-4.719.069-1.169.055-1.87.246-2.354.398-.676.23-1.169.53-1.678 1.04-.507.51-.81 1.002-1.04 1.678-.151.484-.343 1.185-.398 2.354-.057 1.218-.069 1.574-.069 4.719s.012 3.501.069 4.719c.055 1.169.246 1.87.398 2.354.23.676.53 1.169 1.04 1.678.51.507 1.002.81 1.678 1.04.484.151 1.185.343 2.354.398 1.218.057 1.574.069 4.719.069s3.501-.012 4.719-.069c1.169-.055 1.87-.246 2.354-.398.676-.23 1.169-.53 1.678-1.04.507-.51.81-1.002 1.04-1.678.151-.484.343-1.185.398-2.354.057-1.218.069-1.574.069-4.719s-.012-3.501-.069-4.719c-.055-1.169-.246-1.87-.398-2.354A4.968 4.968 0 0 0 22.675 3.4a4.968 4.968 0 0 0-1.678-1.04c-.676-.23-1.169-.53-1.678-1.04-.68-.4-1.4-.59-2.4-.59zM12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9.5c-2.22 0-4-1.78-4-4s1.78-4 4-4 4 1.78 4 4-1.78 4-4 4zM18.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </a>
          </Tooltip>
        </div>

        <ContactInfo />

        <div className="text-sm mt-4">&copy; {new Date().getFullYear()} PortFolio. All rights reserved.</div>
      </div>
    </footer>
  );
}
