import React from 'react';
import Project from '../components/Project';

// Array of project data
const projects = [
  {
    title: "WaveExchange",
    description: "Music Lyric Searching App",
    link: "https://wave-exchange.onrender.com/"
  },
  {
    title: "TrailBuddy",
    description: "Hiking Trail App",
    link: "https://trail-buddy-cary-nc-4eb34ba4009f.herokuapp.com/"
  },
  {
    title: "Flavor Finds",
    description: "Recipe Finder",
    link: "https://anewgard41.github.io/Flavor-Finds-Recipe-Finder/"
  },
  {
    title: "Weather Dashboard",
    description: "Weather App",
    link: "https://thomas-barnhart.github.io/5-Day-Weather-Dashboard/"
  },
];

const PortfolioPage = () => {
  return (
    // Portfolio page with gray background and white text
    <div style={{ backgroundColor: "#f0f0f0", color: "#ffffff", padding: "20px" }}>
      <h1>Portfolio</h1>
      {/* Mapping through projects array and rendering Project component for each project */}
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export default PortfolioPage;
