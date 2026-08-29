import React from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
