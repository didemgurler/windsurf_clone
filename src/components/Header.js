import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>Windsurf</h1>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Features</Link>
          <Link to="/" className="nav-link">Pricing</Link>
          <Link to="/" className="nav-link">Blog</Link>
          <Link to="/product" className="nav-link">Product</Link>
          <Link to="/" className="nav-link">Contact</Link>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
