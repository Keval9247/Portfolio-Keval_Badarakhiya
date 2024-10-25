// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layout/homeLayout';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
// import '../'; // Import your global styles

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen">
        <HomeLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HomeLayout>
      </div>
    </Router>
  );
};

export default App;
