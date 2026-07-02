import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-glass-panel">
          <div className="float-bubble bubble-1" style={{ top: '10%', left: '5%' }}>💬</div>
          <div className="float-bubble bubble-2" style={{ bottom: '10%', right: '5%' }}>⭐</div>
          <div className="float-bubble bubble-3" style={{ top: '20%', right: '15%' }}>🔥</div>
          <div className="float-bubble bubble-4" style={{ bottom: '20%', left: '10%' }}>🎭</div>
          <div className="cta-content">
            <h2>Ready to Enter the <span style={{ color: 'var(--color-accent)' }}>Villa?</span></h2>
            <div className="cta-bullets">
              <span><Check size={18} color="var(--color-primary)" /> Become Anonymous</span>
              <span><Check size={18} color="var(--color-primary)" /> Compete Live</span>
              <span><Check size={18} color="var(--color-primary)" /> Win Rewards</span>
            </div>
            <button className="btn-primary btn-large btn-ripple" style={{ marginTop: 'var(--space-6)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Join Season 1 Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
