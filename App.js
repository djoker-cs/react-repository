import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with HTML.',
    details: 'This project showcases my work and skills. Built with HTML, it has a rough edged design.'
  },
  {
    title: 'Basic Library Sorting System',
    description: 'A basic system that was created for sorting books in a library.',
    details: 'This project is a basic system developed to sort books in a library. The system categorizes books by genre, author, and publication date, making it easier for library users to locate specific books.'
  },
  {
    title: 'Ingat Kampus',
    description: 'A lost and found system',
    details: ' Ingat Kampus is a lost and found system designed to help students recover lost items on campus. The system logs lost items and allows users to search and claim them with verification.'
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section id="about" title="About Me" content="I am Kevin Carl D. Laroza. A 3rd Year College student of De La Salle Lipa" />
      <Section id="projects" title="Projects" projects={projects} />
      <Section id="contact" title="Contact Me" content="Feel free to reach out via email at kevin_carl_laroza@dlsl.edu.ph.com" />
    </div>
  );
}

// reminder export
export default App;
