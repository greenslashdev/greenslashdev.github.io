import React, { useState } from 'react';
import './Contact.css';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/meaqorrj', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setStatus('error');
        if (Object.hasOwn(data, 'errors')) {
          setErrorMessage(data.errors.map(error => error.message).join(', '));
        } else {
          setErrorMessage('Oops! There was a problem submitting your form');
        }
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Oops! There was a problem submitting your form');
    }
  };

  return (
    <section className="section-container" id="contact">
      <div className="container">
        <div className="contact-wrapper animate-fade-in delay-300">

          <div className="contact-content-grid">

            <div className="contact-left-column">
              <div className="contact-header">
                <span className="section-subtitle">Get In Touch</span>
                <h2 className="section-title">
                  Let's <span className="highlight-text">Connect</span>
                </h2>
                <p className="contact-desc">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="contact-info">
                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-method-text">
                    <h3>Email</h3>
                    <p><a href="mailto:dipanshuofficial76@gmail.com">dipanshuofficial76@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-method-text">
                    <h3>Location</h3>
                    <p>Haryana, India</p>
                  </div>
                </div>

                <div className="contact-socials">
                  <a href="https://github.com/greenslashdev" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-link-icon">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/dipanshu-ab691836a/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-link-icon">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {status === 'success' ? (
                <div className="contact-success-message">
                  <h3>Message sent successfully!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                  <Button variant="primary" onClick={() => setStatus('')}>Send Another Message</Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="contact-error-message">
                      {errorMessage}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="How can I help you?"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <Button variant="primary" className="submit-btn" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
