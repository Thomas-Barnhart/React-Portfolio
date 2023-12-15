import React, { useState } from "react";
import Header from "../src/components/header";
import About from "../src/components/about";
import Contact from "../src/components/contact";
import Portfolio from "../src/components/portfolio";
import Resume from "../src/components/resume";
import Footer from "../src/components/footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  // State to manage the currently selected tab
  const [currentTab, handleTabChange] = useState("about");

  // This method is checking to see what the value of `currentTab` is.
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    // Default to rendering the About component if the currentTab is not recognized
    return <About />;
  };

  return (
    <>
      {/* Helmet for setting the page title dynamically */}
      <Helmet>
        <title>Thomas Barnhart Portfolio | {currentTab} </title>
      </Helmet>

      {/* Header component with props to manage current tab and tab change */}
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />

      {/* Main content section where the dynamic tab content is rendered */}
      <main>{renderTab()}</main>

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default App;
