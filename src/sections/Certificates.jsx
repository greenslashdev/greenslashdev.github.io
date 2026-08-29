import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Certificates.css';
import Button from '../components/Button';

const certificatesData = [
  {
    id: 1,
    title: "C Programming For Beginners - Master the C Language",
    issuer: "Udemy",
    date: "January 26, 2026",
    image: "/certificates/udemy_c_course.jpg",
    proofType: "link",
    proofUrl: "https://www.udemy.com/certificate/UC-40396595-5538-4550-ba26-09b3e2db56b4/"
  },
  {
    id: 2,
    title: "Learning Full Stack React",
    issuer: "Infosys Springboard",
    date: "March 25, 2026",
    image: "/certificates/Infosys_Full_Stack.png",
    proofType: "link",
    proofUrl: "https://verify.onwingspan.com"
  },
  {
    id: 3,
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "March 25, 2026",
    image: "/certificates/Infosys_Intro_to_AI.png",
    proofType: "link",
    proofUrl: "https://verify.onwingspan.com"
  },
  {
    id: 4,
    title: "Computer Programming",
    issuer: "iamneo",
    date: "May 21, 2026",
    image: "/certificates/neo_certificate_dipanshu.jpg",
    proofType: "image",
    proofImage: "/certificates/neo_certificate_dipanshu_qr.png"
  },
  {
    id: 5,
    title: "Hackathon-101",
    issuer: "ARC",
    date: "September 11 - 12, 2025",
    image: "/certificates/Hackathon101_certificate.png",
    proofType: "image",
    proofImage: "/certificates/Hackathon101_certificate_qr.png"
  },
  {
    id: 6,
    title: "Times Critical Thinking Championship 2026",
    issuer: "Times Foundation",
    date: "2026",
    image: "/certificates/dipanshu_toitctc.png",
    proofType: "none"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section className="section-container" id="certificates">
      <div className="container">
        <div className="certificates-wrapper animate-fade-in delay-300">
          
          <div className="certificates-header">
            <span className="section-subtitle">Qualifications</span>
            <h2 className="section-title">
              Professional <span className="highlight-text">Certificates</span>
            </h2>
          </div>

          <div className="grid-3-col">
            {certificatesData.map((cert) => (
              <div className="certificate-card" key={cert.id}>
                <div className="certificate-image-container">
                  <img src={cert.image} alt={cert.title} className="certificate-img" />
                </div>
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  {cert.date && <p className="certificate-date">{cert.date}</p>}
                  <div className="certificate-actions">
                    <Button variant="secondary" className="certificate-btn" onClick={() => setSelectedCert(cert.image)}>View Certificate</Button>
                    
                    {cert.proofType === "link" && (
                      <Button variant="secondary" className="certificate-btn" href={cert.proofUrl} target="_blank" rel="noopener noreferrer">View Proof</Button>
                    )}
                    
                    {cert.proofType === "image" && (
                      <Button variant="secondary" className="certificate-btn" onClick={() => setSelectedCert(cert.proofImage)}>View Proof</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {selectedCert && createPortal(
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)} aria-label="Close">×</button>
            <img src={selectedCert} alt="Certificate Full View" className="cert-modal-img" />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
