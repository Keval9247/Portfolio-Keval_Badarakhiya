import React from 'react';

function Skills() {
  return (
    <section className="my-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>

      {/* Frontend Skills */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Frontend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">React.js</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Redux</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Tailwind CSS</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Next.js</h4>
          </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-green-600 mb-4">Backend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Node.js</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Express.js</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">GraphQL</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">RESTful APIs</h4>
          </div>
        </div>
      </div>

      {/* Database Skills */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-purple-600 mb-4">Databases</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">MongoDB</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">PostgreSQL</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">MySQL</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Firebase</h4>
          </div>
        </div>
      </div>

      {/* Additional Tools */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-red-600 mb-4">Additional Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Docker</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Git & GitHub</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">Jenkins</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800">AWS</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
