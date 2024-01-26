import React from 'react';

// Functional component with props and children
const Header = (props) => {
  return (
    <div>
      <header>
        <h1>Thomas Barnhart</h1>
        {/* props.children refers to the Nav bar, since it is embedded in the Header component */}
        {props.children}
      </header>
    </div>
  );
}

export default Header;
