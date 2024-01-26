import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
// Import App components
import About from './components/About.jsx'
import Portfolio from './components/PortfolioPage.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/ContactPage.jsx' 

// Create a BrowserRouter instance with route configurations
const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    // The root element of the application
    element: <App/>,
    children: [
      {
        // The default route to render when no specific path matches
        index: true,
        element: <About/>,
      },
      {
        // Route for the portfolio page
        path: 'Portfolio',
        element: <Portfolio/>,
      },
      {
        // Route for the resume page
        path: 'resume',
        element: <Resume/>,
      },
      {
        // Route for the contact page
        path: 'contact',
        element: <Contact/>,
      },
    ],
  },
]);

// Render the RouterProvider with the BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={BrowserRouter} />
);
