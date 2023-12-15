// Function to report web vitals metrics
const reportWebVitals = (onPerfEntry) => {
    // Check if onPerfEntry is a function before proceeding
    if (onPerfEntry && onPerfEntry instanceof Function) {
      // Dynamically import web-vitals library to access individual metrics
      import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Call each web vitals function and pass onPerfEntry as a callback
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  
  // Export the reportWebVitals function for use in the application
  export default reportWebVitals;
  