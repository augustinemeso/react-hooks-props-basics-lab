import React from 'react';
import Home from './Home'; // Ensure these imports point to your actual components
import About from './About';
import Links from './Links';

const App = () => {
  return (
    <div>
      <nav>Navigation Bar</nav>
      <div>
        <div data-testid="home">
          <Home name="Augustine Meso" city="Nairobi" color="firebrick" />
        </div>
        <div data-testid="about">
          <About bio="Web Developer" />
        </div>
        <div>
          <h3>Links</h3>
          <Links 
            github="https://github.com/augustinemeso"
            linkedin="https://www.linkedin.com/in/augustinemeso"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
