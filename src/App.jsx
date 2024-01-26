// App.js
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Resume from './components/Resume';
import PortfolioPage from './components/PortfolioPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/about" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/resume" component={PortfolioPage} />
          <Route path="/portfolio" component={PortfolioPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
