import React from 'react';
import './Skills.css';

const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "C",
  "C++",
  "Python"
];

const nonTechSkills = [
  "Communication",
  "Team collaboration",
  "Problem Solving",
  "Good Listening",
  "Adaptability"
];

export default function Skills() {
  return (
    <section className="section-container" id="skills">
      <div className="container">
        <div className="skills-wrapper animate-fade-in delay-300">

          <div className="skills-header">
            <span className="section-subtitle">Expertise</span>
            <h2 className="section-title">
              Professional <span className="highlight-text">Skills</span>
            </h2>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Technical Skills</h3>
            <div className="skills-list">
              {techSkills.map((skill, index) => (
                <div className="skill-box" key={`tech-${index}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Non-Technical Skills</h3>
            <div className="skills-list">
              {nonTechSkills.map((skill, index) => (
                <div className="skill-box" key={`nontech-${index}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
