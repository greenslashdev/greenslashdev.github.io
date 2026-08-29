import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './CvViewer.css';

// Set up the worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function CvViewer({ onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);
  const [initialScale, setInitialScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const initialScaleCalculated = useRef(false);

  // Close on Escape
  useEffect(() => {
    document.body.classList.add('modal-open');
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Handle PDF load success to set initial scale based on window size
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onPageLoadSuccess(page) {
    if (initialScaleCalculated.current) return;
    initialScaleCalculated.current = true;

    const viewport = page.getViewport({ scale: 1 });
    // Calculate scale to fit viewport (leave 10% padding)
    const padding = 120; // 60px top/bottom
    const scaleWidth = (window.innerWidth - padding) / viewport.width;
    const scaleHeight = (window.innerHeight - padding) / viewport.height;
    
    const calculatedScale = Math.min(scaleWidth, scaleHeight, 3.0);
    setInitialScale(calculatedScale);
    setScale(calculatedScale);
    setIsLoaded(true);
  }

  // Zoom handlers
  const handleZoomIn = () => setScale(s => Math.min(s + 0.25, 5.0));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.25, 0.2));
  const handleReset = () => setScale(initialScale);





  return createPortal(
    <div className="cv-modal-overlay" onClick={onClose}>
      
      <div className="cv-controls" onClick={e => e.stopPropagation()}>
        <button className="cv-control-btn" onClick={handleZoomOut} title="Zoom Out">−</button>
        <button className="cv-control-btn" onClick={handleReset} title="Reset Zoom">Fit</button>
        <button className="cv-control-btn" onClick={handleZoomIn} title="Zoom In">+</button>
        
        <a 
          href="/Dipanshu_CV.pdf" 
          download="Dipanshu_CV.pdf" 
          className="cv-control-btn"
          title="Download PDF"
        >
          Download PDF
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '6px', marginBottom: '-2px'}}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
        
        <button className="cv-control-btn close-btn" onClick={onClose} title="Close">×</button>
      </div>

      <div 
        className="cv-viewer-container" 
        onClick={e => e.stopPropagation()} 
        ref={containerRef}
      >
        <Document
          file="/Dipanshu_CV.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="cv-loading">Loading CV...</div>}
          error={<div className="cv-error">Failed to load CV. Please ensure Dipanshu_CV.pdf exists in the public directory.</div>}
        >
          <Page 
            pageNumber={1} 
            scale={scale} 
            devicePixelRatio={3} 
            onLoadSuccess={onPageLoadSuccess}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="cv-page-render"
          />
        </Document>
      </div>

    </div>,
    document.body
  );
}
