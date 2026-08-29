import React, { useState, useEffect } from 'react';
import './Achievements.css';
import Button from '../components/Button';

const achievementsData = [
  {
    id: 1,
    title: "LeetCode Problem Solving",
    details: "Solved 4 programming problems on LeetCode, building familiarity with algorithmic problem solving and competitive programming. · Rank: ~5,000,000",
    icon: "code"
  },
  {
    id: 2,
    title: "Hackathon 101 — ARC",
    details: "Participated in Hackathon 101 organized by ARC, gaining hands-on experience working on a problem-solving challenge in a hackathon environment.",
    icon: "award"
  },
  {
    id: 3,
    title: "100+ Coding Problems Solved",
    details: "Solved 100+ programming problems across CodeTantra and iamneo as part of continuous coding practice and technical skill development.",
    icon: "terminal"
  }
];

export default function Achievements() {
  return (
    <section className="section-container" id="achievements">
      <div className="container">
        <div className="achievements-wrapper animate-fade-in delay-300">
          
          <div className="achievements-header">
            <span className="section-subtitle">Milestones</span>
            <h2 className="section-title">
              Notable <span className="highlight-text">Achievements</span>
            </h2>
          </div>

          <div className="achievements-list">
            {achievementsData.map((achievement) => (
              <div className="achievement-row" key={achievement.id}>
                
                <div className="achievement-row-left">
                  <div className="achievement-row-icon">
                    {achievement.icon === 'code' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    )}
                    {achievement.icon === 'award' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    )}
                    {achievement.icon === 'terminal' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" y1="19" x2="20" y2="19"></line>
                      </svg>
                    )}
                  </div>
                  
                  <div className="achievement-row-text">
                    <span className="achievement-row-title">{achievement.title}</span>
                    {achievement.details && (
                      <>
                        <span className="achievement-row-separator">—</span>
                        <span className="achievement-row-details">{achievement.details}</span>
                      </>
                    )}
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
