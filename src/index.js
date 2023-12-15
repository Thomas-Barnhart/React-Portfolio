// Importing necessary React and ReactDOM modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the global styles for the application
import './index.css';

// Importing the main App component
import App from './App';

// Importing the function to report web vitals
import reportWebVitals from './reportWebVitals';

// Creating a React root using ReactDOM.createRoot and specifying the root element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within a React StrictMode to catch potential issues during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Reporting web vitals to measure and analyze the performance of the application
reportWebVitals();
