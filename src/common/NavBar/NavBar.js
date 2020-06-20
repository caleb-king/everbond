import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaLink, FaExchangeAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

function NavBar() {
  const currentLocation = useLocation().pathname;
  const isOnBondsPage = currentLocation.includes('bonds');
  const isOnInteractionsPage = currentLocation.includes('interactions');
  
  return (
    <nav role="navigation">
    <div className="nav-right">
      <ul>
        <li>
          <Link to="/bonds" className={isOnBondsPage && 'selected'}><FaLink size={15}/>     Bonds</Link>
        </li>
        <li>
          <Link to="/interactions" className={isOnInteractionsPage && 'selected'}><FaExchangeAlt  size={15}/>     Interactions</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;