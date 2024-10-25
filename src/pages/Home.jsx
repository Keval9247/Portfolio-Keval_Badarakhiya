import React from 'react';
import 'animate.css';  // Import Animate.css for animations

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-100 animate__animated animate__fadeIn">
        {/* Gradient Background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-30"></div>

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:space-x-12">
          {/* Left side - Image */}
          <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
            <div className="relative w-full h-80 lg:h-full">
              <img
                src="assets/img/me.jpg"
                alt="Profile"
                className="rounded-lg shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="bg-white bg-opacity-90 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg transform hover:translate-y-1 transition-transform duration-500">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-indigo-900 mb-6 animate__animated animate__fadeInDown">
                Hi, I'm Keval
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 animate__animated animate__fadeInUp">
                A passionate <span className="text-indigo-500 font-bold">MERN Stack Developer</span> creating sleek, modern web applications.
              </p>
              <p className="text-base lg:text-lg text-gray-600 mb-8 animate__animated animate__fadeInUp">
                Let's transform complex ideas into elegant, scalable web solutions!
              </p>
              <a href="/contact" className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-6 rounded-full font-semibold shadow-md transition duration-300 animate__animated animate__bounceIn">
                <span className="text-lg">Let's Collaborate</span>
                <span className="w-8 h-8 ml-4 transform transition-transform duration-300 hover:scale-125">
                  <img src="/assets/img/rightarrow.png" alt="Arrow Right" className="w-full h-full object-contain" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 animate__animated animate__fadeIn">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:bg-indigo-50 transition-transform duration-300 animate__animated animate__fadeInLeft transform hover:scale-105">
              <img src='/assets/img/fullstack.png' alt="Full Stack Development Icon" className="mx-auto mb-6 w-20" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Stack Development</h3>
              <p className="text-gray-600">
                I develop complete solutions from front-end to back-end using React, Node.js, and MongoDB.
              </p>
            </div>
            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:bg-indigo-50 transition-transform duration-300 animate__animated animate__fadeInUp transform hover:scale-105">
              <img src='/assets/img/responsive.png' alt="Responsive Design Icon" className="mx-auto mb-6 w-20" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsive Design</h3>
              <p className="text-gray-600">
                I create responsive layouts to ensure your websites work seamlessly on any device.
              </p>
            </div>
            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:bg-indigo-50 transition-transform duration-300 animate__animated animate__fadeInRight transform hover:scale-105">
              <img src='/assets/img/api.jpeg' alt="API Integration Icon" className="mx-auto mb-6 w-20" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Integration</h3>
              <p className="text-gray-600">
                I connect external APIs and services to enhance the functionality of your web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
