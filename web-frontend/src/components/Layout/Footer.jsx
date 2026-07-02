import React from 'react';
import { ChevronRight, Hash, Camera, PlayCircle, MessageSquare } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Vibe Villa Logo" className="footer-logo" />
            <h3 className="footer-brand-title">VIBE VILLA</h3>
            <p>Where anime avatars clash, alliances form, and only one survives the audience vote.</p>
            <div className="footer-social-circles">
              <a href="https://discord.com" className="social-circle-btn"><MessageSquare size={16} /></a>
              <a href="https://twitter.com" className="social-circle-btn"><Hash size={16} /></a>
              <a href="https://instagram.com" className="social-circle-btn"><Camera size={16} /></a>
              <a href="https://youtube.com" className="social-circle-btn"><PlayCircle size={16} /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="/#features"><span>Features</span> <ChevronRight size={16} /></a></li>
              <li><a href="/#how-it-works"><span>How It Works</span> <ChevronRight size={16} /></a></li>
              <li><a href="/#watch"><span>Watch Live</span> <ChevronRight size={16} /></a></li>
              <li><a href="/login"><span>Join the Villa</span> <ChevronRight size={16} /></a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>SOCIALS</h4>
            <ul>
              <li><a href="https://discord.com"><span className="icon-text"><MessageSquare size={16} /> Discord</span> <ChevronRight size={16} /></a></li>
              <li><a href="https://twitter.com"><span className="icon-text"><Hash size={16} /> Twitter</span> <ChevronRight size={16} /></a></li>
              <li><a href="https://instagram.com"><span className="icon-text"><Camera size={16} /> Instagram</span> <ChevronRight size={16} /></a></li>
              <li><a href="https://youtube.com"><span className="icon-text"><PlayCircle size={16} /> YouTube</span> <ChevronRight size={16} /></a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="/privacy"><span>Privacy Policy</span> <ChevronRight size={16} /></a></li>
              <li><a href="/terms"><span>Terms of Service</span> <ChevronRight size={16} /></a></li>
              <li><a href="/contact"><span>Contact Us</span> <ChevronRight size={16} /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-divider-container">
          <div className="footer-divider-line"></div>
          <div className="diamond-glow"></div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vibe Villa Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
