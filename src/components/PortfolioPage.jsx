// pages/PortfolioPage.js
import React from 'react';
import Project from '../components/Project';

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
    <div>
      <h1>Portfolio</h1>
      {projects.map(project => (
        <Project key={project.id} title={project.title} description={project.description} />
      ))}
    </div>
  );
}

export default PortfolioPage;
