import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000000", color: "#ffffff", padding: "20px" }}>
      {/* Copyright information */}
      <div>
        <p>&copy; 2024 Website. All Rights Reserved.</p>
      </div>
      {/* Social media links */}
      <div>
        <a href="https://www.facebook.com/" style={{ color: "#ffffff", marginRight: "10px" }}>Facebook</a>
        <a href="https://twitter.com/" style={{ color: "#ffffff", marginRight: "10px" }}>Twitter</a>
        <a href="https://www.instagram.com/" style={{ color: "#ffffff", marginRight: "10px" }}>Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
