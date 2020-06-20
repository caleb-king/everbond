import React from 'react';
import './Bond.css';
import { Link } from 'react-router-dom';
import { formatTimeSince } from '../../helper';

function Bond(props) {
  const { name, id, timeSinceLastInteraction } = props;

  return (
    <li className="bond">
      <h2><Link to={`/bonds/view/${id}`} >{name}</Link></h2>
      <p className="last-interaction">
        <span className="last-interaction-label">Time Since Last Interaction: </span> 
        {formatTimeSince(timeSinceLastInteraction)}
      </p>
    </li>
  )
}

export default Bond;