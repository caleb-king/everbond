import React from 'react';
import './Bond.css';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { formatTimeSince } from '../../helper';

function Bond(props) {
  const { name, id, timeSinceLastInteraction } = props;

  return (
    <li className="bond">
      <FaUserCircle size={54} className="user-icon"/>
      <h2 className="bond-name"><Link to={`/bonds/view/${id}`} >{name}</Link></h2>
      <p className="last-interaction">
        {formatTimeSince(timeSinceLastInteraction)}
      </p>
    </li>
  )
}

export default Bond;