import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/logo_chat_villa.png';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', gap: '10px' }}>
              <img src={logo} alt="Vibe Villa Logo" className="nav-logo" />
              <span>Vibe Villa</span>
            </Link>
          </div>
          <div className="nav-links">
            <a href="/#features" className="nav-link">Features</a>
            <a href="/#how-it-works" className="nav-link">How It Works</a>
            <a href="/#watch" className="nav-link">Watch Live</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {currentUser ? (
              <>
                <div className="avatar-container">
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Profile" style={{ width: '35px', height: '35px', borderRadius: '50%', border: '2px solid var(--color-primary)' }} />
                  ) : (
                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      {currentUser.email ? currentUser.email.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <span className="online-indicator"></span>
                </div>
                <button onClick={handleLogout} className="btn-ghost">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.95rem' }}>Join the Villa</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
