import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    // Navigation bar with gray background and white text
    <nav style={{ backgroundColor: "#cccccc", color: "#ffffff" }}>
      {/* Unordered list for navigation links */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {/* Individual navigation links */}
        <li style={{ display: "inline", marginRight: "10px" }}><Link to="/about" style={{ color: "#ffffff", textDecoration: "none" }}>About</Link></li>
        <li style={{ display: "inline", marginRight: "10px" }}><Link to="/portfolio" style={{ color: "#ffffff", textDecoration: "none" }}>Portfolio</Link></li>
        <li style={{ display: "inline", marginRight: "10px" }}><Link to="/resume" style={{ color: "#ffffff", textDecoration: "none" }}>Resume</Link></li>
        <li style={{ display: "inline" }}><Link to="/contact" style={{ color: "#ffffff", textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
