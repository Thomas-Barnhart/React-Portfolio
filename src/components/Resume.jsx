import React from "react";

const Resume = () => {
    return (
        <div>
            <h1>Resume</h1>
            <p>
            <a href="">My Resume</a>
                <section>
                    <h2>Front-end Proficiencies</h2>
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