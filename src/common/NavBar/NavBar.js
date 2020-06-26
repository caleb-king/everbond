import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const currentLocation = useLocation().pathname;
  const isOnBondsPage = currentLocation.includes('bonds');
  const isOnInteractionsPage = currentLocation.includes('interactions');
  
  return (
    <nav className="main-nav" role="navigation">
      <ul>
        <li className="nav-bar-li">
          <Link to="/bonds" className={`${isOnBondsPage && 'selected'} nav-icon`}><i className="fas fa-link"></i>Bonds</Link>
        </li>
        <li className="nav-bar-li">
          <Link to="/interactions" className={`${isOnInteractionsPage && 'selected'} nav-icon`}><i className="fas fa-exchange-alt"></i>Interactions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;