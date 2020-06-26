import React from 'react';
import './Bond.css';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { formatTimeSince } from '../../helper';

function Bond(props) {
  const { name, id, timeSinceLastInteraction } = props;

  return (
    <li className="bond">
      <i className="fas fa-user-circle"></i>
      <div className="bond-content-container">
        <Link className="bond-name" to={`/bonds/view/${id}`} >{name}</Link>
        <p className="last-interaction">
          {formatTimeSince(timeSinceLastInteraction)}
        </p>
      </div>
    </li>
  )
}

export default Bond;