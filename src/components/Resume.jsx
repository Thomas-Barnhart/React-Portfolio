import React from "react";

// Functional component representing the Resume page
const Resume = () => {
    return (
        // Container div with gray background and white text
        <div style={{ backgroundColor: "#f0f0f0", color: "#ffffff", padding: "20px" }}>
            <h1>Resume</h1>
            {/* Link to download the resume with white text */}
            <p>
                <a href="" style={{ color: "#ffffff" }}>My Resume</a>
                {/* Section for front-end and back-end proficiencies */}
                <section>
                    <h2>Front-end Proficiencies</h2>
                    {/* Unordered list of front-end proficiencies */}
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h2>Back-end Proficiencies</h2>
                    {/* Unordered list of back-end proficiencies */}
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </section>
            </p>
        </div>
    );
}

export default Resume;
