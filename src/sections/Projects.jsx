import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Projects.css';
import Button from '../components/Button';

const projectsData = [
  {
    id: 1,
    title: "Amazon Homepage Clone",
    description: "A responsive recreation of the Amazon homepage developed to strengthen my understanding of modern web interface development. The project focuses on translating a real-world e-commerce interface into a structured and visually consistent webpage while practicing semantic HTML, CSS styling, layouts, and responsive design principles.",
    tech: ["HTML5", "CSS3"],
    liveUrl: "https://greenslashdev.github.io/Amazon-Clone/",
    sourceUrl: "https://github.com/greenslashdev/Amazon-Clone",
    image: "/projects/amazon_clone_image.png"
  }
];

const aiProjectsData = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description: "An AI-assisted web application concept designed to analyze resumes, identify key skills and experience, and provide structured suggestions for improving clarity, relevance, and presentation.",
    tech: ["HTML", "CSS", "JavaScript", "AI API"],
    btnText: "Coming Soon"
  },
  {
    id: 2,
    title: "AI Study Assistant",
    description: "An AI-assisted productivity application concept that helps students organize study material, generate concise explanations, and interact with learning content through an intelligent assistant.",
    tech: ["HTML", "CSS", "JavaScript", "AI API"],
    btnText: "Coming Soon"
  },
  {
    id: 3,
    title: "AI Code Review Assistant",
    description: "An AI-assisted developer tool concept designed to review source code, identify potential issues, explain programming mistakes, and provide suggestions for improving code quality.",
    tech: ["HTML", "CSS", "JavaScript", "AI API"],
    btnText: "Coming Soon"
  }
];

export default function Projects() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (isAiModalOpen || previewImage) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsAiModalOpen(false);
        setPreviewImage(null);
      }
    };
    
    if (isAiModalOpen || previewImage) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAiModalOpen, previewImage]);

  return (
    <section className="section-container" id="projects">
      <div className="container">
        <div className="projects-wrapper animate-fade-in delay-300">
          
          <div className="projects-header">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">
              Featured <span className="highlight-text">Projects</span>
            </h2>
          </div>

          <div className="grid-3-col">
            {projectsData.map((project) => (
              <div className="project-card" key={project.id}>
                <div 
                  className="project-image-placeholder" 
                  onClick={() => project.image && setPreviewImage(project.image)}
                  title={project.image ? "Click to view full image" : ""}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                  ) : (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="placeholder-icon">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tag, index) => (
                      <span className="tech-tag" key={index}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <Button variant="primary" className="project-btn" href={project.liveUrl} target={project.liveUrl !== "#" ? "_blank" : undefined} rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined} onClick={(e) => {if(project.liveUrl === "#") e.preventDefault();}}>Live Demo</Button>
                    <Button variant="secondary" className="project-btn" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source Code</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ai-projects-btn-container">
            <Button variant="primary" onClick={() => setIsAiModalOpen(true)}>
              Explore AI-Assisted Projects
            </Button>
          </div>
          
        </div>
      </div>

      {/* AI Projects Modal */}
      {isAiModalOpen && createPortal(
        <div className="project-modal-overlay" onClick={() => setIsAiModalOpen(false)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setIsAiModalOpen(false)} aria-label="Close">×</button>
            
            <div className="project-modal-header">
              <h2 className="project-modal-title">AI-Assisted Projects</h2>
              <p className="project-modal-subtitle">These are template/concept projects developed with significant AI assistance.</p>
            </div>

            <div className="grid-3-col">
              {aiProjectsData.map((project) => (
                <div className="project-card" key={project.id}>
                  <div 
                    className="project-image-placeholder"
                    onClick={() => project.image && setPreviewImage(project.image)}
                    title={project.image ? "Click to view full image" : ""}
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="project-image" />
                    ) : (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="placeholder-icon">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    )}
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tag, index) => (
                        <span className="tech-tag" key={index}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <Button variant="secondary" className="project-btn" href="#" onClick={e => e.preventDefault()}>
                        {project.btnText}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Image Preview Modal */}
      {previewImage && createPortal(
        <div className="image-preview-overlay" onClick={() => setPreviewImage(null)}>
          <div className="image-preview-content" onClick={e => e.stopPropagation()}>
            <button className="image-preview-close" onClick={() => setPreviewImage(null)} aria-label="Close Preview">×</button>
            <img src={previewImage} alt="Project Preview" />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
