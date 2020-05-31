import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import LandingPageNav from './LandingPage/LandingPageNav';

function App() {
  return (
    <div className="App">
      <LandingPageNav />
      <LandingPage />
    </div>
  );
}

export default App;
