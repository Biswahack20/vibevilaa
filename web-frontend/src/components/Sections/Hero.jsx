import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Animated Elements */}
      <div className="hero-bg-elements">
        <div className="light-ray ray-1"></div>
        <div className="light-ray ray-2"></div>
        <div className="particle-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`particle p-${i}`}></div>
          ))}
        </div>
        <div className="floating-crystals">
          <div className="crystal c-1"></div>
          <div className="crystal c-2"></div>
          <div className="crystal c-3"></div>
        </div>
        <div className="floating-ui-elements">
          <div className="f-ui ui-chat">💬 "He's bluffing..."</div>
          <div className="f-ui ui-avatar"></div>
          <div className="f-ui ui-like">❤️</div>
          <div className="f-ui ui-viewer">👁️ 12k</div>
        </div>
      </div>

      <div className="container hero-container-centered">
        <div className="hero-glass-panel">
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE SEASON 1
          </div>
          
          <h1 className="hero-title-massive">
            <span className="hero-title-top">Where</span><br/>
            <span className="text-gradient shimmer anime-avatars-text">Anime Avatars</span><br/>
            <span className="hero-title-bottom">Clash in Real Time</span>
          </h1>
          
          <p className="hero-subtitle-centered">
            A mobile-first reality show platform. Hide behind your avatar, communicate only through live chat, and survive the audience vote.
          </p>
          
          <div className="hero-actions-centered">
            <button className="btn-primary btn-large btn-ripple"><span>Watch Live Now</span></button>
            <button className="btn-secondary btn-large">Become a Contestant</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
