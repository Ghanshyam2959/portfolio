import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Services from './pages/service';
import Navbar from './pages/navbar';
import Experience from './pages/experiance';
import Documents from './pages/Documents';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Services />
      <Documents />
      <Contact />
    </>
  );
}

export default App;
