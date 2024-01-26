import React from 'react';

// Functional component representing a project item
const Project = ({ project }) => {
    // Destructuring project object to extract properties
    const { name, description, link } = project;

    return (
        // Anchor element representing the project, with styling for background, text color, and padding
        <a href={link} style={{ backgroundColor: "#f0f0f0", color: "#ffffff", display: "block", padding: "10px", textDecoration: "none", marginBottom: "10px" }}>
            {/* Project name */}
            <h3>{name}</h3>
            {/* Project description */}
            <p>{description}</p>
        </a>
    );
}

export default Project;
