import React from 'react';

function Blog() {
  return (
    <section className="my-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Blog</h2>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800">Understanding React Hooks</h3>
        <p className="text-gray-700">Posted on Jan 10, 2024</p>
        <p className="mt-4">
          React Hooks have transformed the way we write functional components. This post explores common hooks like useState, useEffect, and more.
        </p>
        <a
          href="https://your-blog-post-link.com"
          className="text-indigo-500 hover:underline mt-4 block"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>

      {/* Add more blog posts */}
    </section>
  );
}

export default Blog;
