import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/about';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="App">
      <CustomCursor />
      <NavBar onDevClick={() => setIsTerminalOpen(true)} />
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <main id="content">
        <Intro/>
        <About/>
        <Experience/>
        <Education/>
        <Certifications/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
