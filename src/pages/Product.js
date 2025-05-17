import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product-page">
      <h1>Product Overview</h1>
      <div className="product-section">
        <h2>Key Features</h2>
        <ul>
          <li>Advanced AI Code Assistance</li>
          <li>Smart Code Completion</li>
          <li>Real-time Error Detection</li>
          <li>Code Navigation & Search</li>
          <li>Integration with Popular IDEs</li>
        </ul>
      </div>
      <div className="product-section">
        <h2>How It Works</h2>
        <p>Windsurf's AI-powered development assistant helps you write better code faster. With real-time suggestions, error detection, and smart code completion, you can focus on solving problems rather than writing boilerplate code.</p>
      </div>
      <div className="product-section">
        <h2>Get Started</h2>
        <button className="cta-button">Start Free Trial</button>
      </div>
    </div>
  );
};

export default Product;
