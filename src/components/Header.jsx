import React from 'react';

// Functional component with props and children
const Header = (props) => {
  return (
    // Styling for the header with black background, white text, and padding
    <div style={{ backgroundColor: "#000000", color: "#ffffff", padding: "20px" }}>
      <header>
        {/* Header title */}
        <h1>Thomas Barnhart</h1>
        {/* props.children refers to the Nav bar, since it is embedded in the Header component */}
        {props.children}
      </header>
    </div>
  );
}

export default Header;
