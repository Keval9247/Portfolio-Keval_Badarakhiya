import React from 'react';

function Contact() {
  return (
    <section className="my-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
      <p className="text-xl text-gray-600 mb-4">Interested in working together? Reach out to me through the form below!</p>
      <form className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
