import React from 'react';
import Project from './Project.js';

function Section({ id, title, content, projects }) {
  return (
    <section id={id} className="Section">
      <h2>{title}</h2>
      {content && <p>{content}</p>}
      {projects && (
        <div className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              details={project.details}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;
