import React from 'react';
import { UserX, MessageSquare, Trophy, Gift } from 'lucide-react';
import ScrollReveal from '../Common/ScrollReveal';

const Features = () => {
  return (
    <section id="features">
      <div className="container text-center">
        <ScrollReveal animation="fade-up">
          <h2>Why Vibe Villa?</h2>
          <p>The next generation of interactive reality TV is here.</p>
        </ScrollReveal>
        
        <div className="features-grid premium-grid">
          <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="feature-card premium-card">
            <div className="feature-icon"><UserX size={32} /></div>
            <h3>Anonymous Avatar</h3>
            <p>Hide your true identity. Compete based purely on your personality and strategic gameplay.</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="feature-card premium-card">
            <div className="feature-icon"><MessageSquare size={32} /></div>
            <h3>Live Audience Chat</h3>
            <p>Engage with contestants instantly. Influence their decisions through real-time communication.</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="feature-card premium-card">
            <div className="feature-icon"><Trophy size={32} /></div>
            <h3>Real-Time Voting</h3>
            <p>You have the power. Cast your vote instantly to decide who stays in the villa.</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={0.4}>
          <div className="feature-card premium-card">
            <div className="feature-icon"><Gift size={32} /></div>
            <h3>Win Rewards</h3>
            <p>Earn exclusive digital collectibles and perks for being an active participant in the audience.</p>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
};

export default Features;
