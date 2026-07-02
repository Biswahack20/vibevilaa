import React from 'react';
import ScrollReveal from '../Common/ScrollReveal';

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <ScrollReveal animation="zoom-in">
            <h2>The Villa Experience</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Your journey into the ultimate chat reality show.</p>
          </ScrollReveal>
        </div>
        
        <div className="timeline-container">
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="timeline-step">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h3>Create Your Avatar</h3>
                <p>Leave your real identity behind. Choose a unique persona before entering the locked Villa.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="timeline-step">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h3>Join the Live Chat</h3>
                <p>Enter the locked room with other contestants. Build alliances, stir up drama, and communicate only via text.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="timeline-step">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h3>Survive the Vote</h3>
                <p>The live audience watches every message. Secure their favor, because when the voting round begins, the lowest rated avatars are eliminated.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
