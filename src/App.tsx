import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/about';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div id="content">
        <Intro/>
        <About/>
        <Experience/>
        <Education/>
      </div>
    </div>

  );
}

export default App;
