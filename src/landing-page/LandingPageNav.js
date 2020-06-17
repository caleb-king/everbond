import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPageNav.css';

function LandingPageNav() {
  return (
    <nav role="navigation">
      <div className="nav-right">
        <ul>
          <li><Link to="/">Sign Up</Link></li>
          <li><Link to="/interactions">Demo</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default LandingPageNav;