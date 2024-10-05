import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/toaster";
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <main className="content-wrapper container mx-auto px-4 py-8 pt-20">
            <Routes>
              {/* Route for both "/" and "/portfolio/" */}
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
