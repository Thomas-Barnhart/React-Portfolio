import React from 'react';

const Project = ({ project }) => {
    const { name, description, link } = project;

    return (
        <a href={link}>
            <h3>{name}</h3>
            <p>{description}</p>
        </a>
    );
}

export default Project;
