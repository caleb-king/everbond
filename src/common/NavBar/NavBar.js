import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav role="navigation">
    <div className="nav-right">
      <ul>
        <li><Link to="/bonds">Bonds</Link></li>
        <li><Link to="/interactions">Interactions</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;