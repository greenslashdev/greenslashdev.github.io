import React from 'react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "B.Tech. — Computer Science and Engineering",
    institution: "Lovely Professional University",
    date: "2025 – 2029",
    status: "Currently pursuing • 3rd Semester",
    resultLabel: "CURRENT CGPA",
    resultValue: "8.73 / 10",
    icon: "cap"
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Triveni Public School",
    location: "Kalanaur, Haryana",
    date: "2022 – 2024",
    resultLabel: "RESULT",
    resultValue: "79.8%",
    icon: "school"
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Triveni Public School",
    location: "Kalanaur, Haryana",
    date: "2021 – 2022",
    resultLabel: "RESULT",
    resultValue: "97.2%",
    icon: "school"
  }
];

export default function Education() {
  return (
    <section className="section-container" id="education">
      <div className="container">
        <div className="education-wrapper animate-fade-in delay-300">
          
          <div className="education-header">
            <span className="section-subtitle">Academic Journey</span>
            <h2 className="section-title">
              My <span className="highlight-text">Education</span>
            </h2>
          </div>

          <div className="grid-3-col">
            {educationData.map((edu) => (
              <div className="education-card" key={edu.id}>
                
                <div className="education-card-top">
                  <div className="education-icon-wrapper">
                    {edu.icon === 'cap' ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="education-icon">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="education-icon">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    )}
                  </div>
                  <span className="education-date">{edu.date}</span>
                </div>

                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  {edu.location && <p className="education-location">{edu.location}</p>}
                  
                  {edu.status && <p className="education-status">{edu.status}</p>}
                  
                  <div className="education-result-wrapper">
                    <span className="education-result-label">{edu.resultLabel}</span>
                    <span className="education-result-value">{edu.resultValue}</span>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
