import React from 'react';
import './Bond.css';
import { Link } from 'react-router-dom';

function Bond(props) {
  const { name, id } = props;

  //TO DO - figure out how to calculate/query the last interaction for each Bond
  //for now leave this hard coded
  let lastInteraction;
  if (name === 'Mom') {
    lastInteraction = '05.26.2020';
  } else if (name === 'Justin Wellum') {
    lastInteraction = '05.17.2020';
  } else {
    lastInteraction = '05.07.2020';
  }

  return (
    <li className="bond">
      <h2><Link to={`/bonds/view/${id}`} >{name}</Link></h2>
      <p className="last-interaction"><span className="last-interaction-label">Last Interaction:</span> {lastInteraction}</p>
    </li>
  )
}

export default Bond;