import React from 'react';
import Button from '../components/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      
      {/* Subtle background ambient lighting */}
      <div className="hero-ambient-light"></div>
      
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">Dipanshu</h1>
          <p className="hero-description">
            Computer Science and Engineering student building a strong foundation in software development, programming, and problem solving. I create practical projects to turn what I learn into real, functional applications and continuously explore new technologies to improve my skills.
          </p>
          
          <div className="hero-actions">
            <Button 
              variant="primary" 
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
              className="cta-button"
            >
              Let's Connect
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
            
            <div className="social-links">
              <a href="https://github.com/greenslashdev" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dipanshu-ab691836a/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:dipanshuofficial76@gmail.com" className="social-btn" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a href="https://leetcode.com/u/dipanshu-loq/" target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="LeetCode">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.515 5.257 5.257 0 0 0 1.909 3.615 5.266 5.266 0 0 0 3.622 1.126c1.441-.13 2.772-.88 3.731-2.073l2.846-3.414a.434.434 0 0 0-.056-.632l-2.227-1.801a.434.434 0 0 0-.623.056l-2.186 2.617c-.504.622-1.246 1.055-2.052 1.185a3.003 3.003 0 0 1-2.074-.474 3.012 3.012 0 0 1-1.076-2.062 3.007 3.007 0 0 1 .475-2.073 2.999 2.999 0 0 1 1.624-1.258l4.024-4.306 4.673-4.996a1.374 1.374 0 0 0-.022-1.921l-1.332-1.272A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.12 1.12 0 1 0 0 2.24h7.56a1.12 1.12 0 1 0 0-2.24h-7.56zM15.342 6.54l-1.503 1.603a.434.434 0 0 0 .045.63l1.83 1.485a.434.434 0 0 0 .624-.045l1.502-1.603a1.374 1.374 0 0 0 .022-1.921l-1.33-1.274a1.374 1.374 0 0 0-1.92-.045L15.342 6.54z"/>
                </svg>
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in delay-200">
          <div className="hero-image-container">
            
            {/* The actual portrait placeholder */}
            <div className="hero-portrait">
              <img src="/my_image.png" alt="Dipanshu Portrait" />
            </div>
            
            {/* Ambient inner glow */}
            <div className="hero-portrait-glow"></div>
            
            {/* Decorative orbit/rings to complement the circular portrait */}
            <div className="orbit-ring ring-1">
              <div className="orbit-dot dot-1"></div>
              <div className="orbit-dot dot-2"></div>
            </div>
            <div className="orbit-ring ring-2">
              <div className="orbit-dot dot-3"></div>
            </div>
            <div className="orbit-ring ring-3"></div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
