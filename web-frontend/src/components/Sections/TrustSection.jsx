import React from 'react';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-divider"></div>
        <p className="trust-heading">Trusted by</p>
        <div className="trust-grid">
          <div className="trust-item">
            <h4>12K+</h4>
            <p>Live Viewers</p>
          </div>
          <div className="trust-item">
            <h4>150K</h4>
            <p>Messages Sent</p>
          </div>
          <div className="trust-item">
            <h4>50K</h4>
            <p>Registered Players</p>
          </div>
        </div>
        <div className="trust-divider" style={{ marginTop: 'var(--space-8)' }}></div>
      </div>
    </section>
  );
};

export default TrustSection;
