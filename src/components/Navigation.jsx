import React, { useState, useEffect } from 'react';
import Button from './Button';
import CvViewer from './CvViewer';
import './Navigation.css';

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const toggleCvModal = () => setIsCvOpen(!isCvOpen);

  // Handle scroll effect, active section detection, and scroll restoration
  useEffect(() => {
    // Force browser to not restore scroll position on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Clear any existing hash on initial load and scroll to top
    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);

    const sections = ['home', 'projects', 'skills', 'certificates', 'achievements', 'education', 'contact'];
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentActive = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentActive = section;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);
    
    // Check if we're scrolling to top vs a specific section
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };



  return (
    <>
      <div className="header-wrapper">
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            
            <a href="#home" className="brand" aria-label="Home" onClick={(e) => handleNavClick(e, 'home')}>
              <svg className="brand-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '46px', height: '46px' }}>
                <path d="M13 3L7 12H13L11 21L17 12H11L13 3Z" fill="var(--color-accent)"/>
              </svg>
              <span className="brand-text">
                <strong style={{color: '#00e599'}}>Green</strong>
                <strong style={{color: '#ffffff'}}>SlashDev</strong>
              </span>
            </a>

            <nav className={`nav-menu ${isMobileOpen ? 'mobile-open' : ''}`}>
              <ul>
                <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
                <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
                <li><a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'certificates')}>Certificates</a></li>
                <li><a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'achievements')}>Achievements</a></li>
                <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
                <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
              </ul>
            </nav>

            <div className="header-actions">
              <button className="cv-btn" onClick={toggleCvModal}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cv-icon">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                View CV
              </button>
              
              <button 
                className={`mobile-toggle ${isMobileOpen ? 'open' : ''}`} 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
          </div>
        </header>
      </div>

      {/* CV Modal */}
      {isCvOpen && <CvViewer onClose={toggleCvModal} />}
    </>
  );
}
