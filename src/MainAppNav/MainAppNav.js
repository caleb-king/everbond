import React from 'react';
import { Link } from 'react-router-dom';
import './MainAppNav.css';

function MainAppNav() {
  return (
    <nav role="navigation">
    <div className="nav-right">
      <ul>
        <li><Link to="/bonds">Bonds</Link></li>
        <li><Link to="/add-bond">Add Bond</Link></li>
        <li><Link to="/interactions">Interactions</Link></li>
        <li><Link to="/add-interaction">Add Interaction</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default MainAppNav;