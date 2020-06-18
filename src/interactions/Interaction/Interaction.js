import React from 'react';
import './Interaction.css';
import { Link } from 'react-router-dom';

function Interaction(props) {
  const { id, name, date, description } = props;

  function formatDate(date) {
    const month  = date.substr(5,2);
    const day = date.substr(8,2);
    return `${month}.${day}`;
  }

  function formatDescription(description) {
    if (description.length <= 45) {
      return description;
    } else {
      let formattedDescription = '';
      formattedDescription += description.substring(0,45);
      formattedDescription += '...';
      return formattedDescription;
    }
  }

  return (
    <li className="bond">
      <h2><Link to={`/interactions/view/${id}`} >{name} - {formatDate(date)}</Link></h2>
      <p>{formatDescription(description)}</p>
    </li>
  )
}

export default Interaction;