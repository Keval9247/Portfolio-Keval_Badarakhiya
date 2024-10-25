import React from 'react';

function Contact() {
  return (
    <section id="contact" className="my-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
      <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
