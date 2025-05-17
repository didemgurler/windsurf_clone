import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Better Software Together</h1>
        <p>Windsurf is a powerful AI coding assistant that helps you write better code, faster.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
