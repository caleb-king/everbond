import React from 'react';
import './Bond.css';
import { Link, useHistory } from 'react-router-dom';
import { formatTimeSince } from '../../helper';

function Bond(props) {
  const { name, id, timeSinceLastInteraction } = props;

  let history = useHistory();

  function handleBondClicked() {
    history.push(`/bonds/view/${id}`);
  }

  return (
    <li className="bond">
      <Link className="user-img" to={`/bonds/view/${id}`}><i className="fas fa-user-circle"></i></Link>
      <div className="bond-content-container" onClick={handleBondClicked}>
        <Link className="bond-name" to={`/bonds/view/${id}`} >{name}</Link>
        <p className="last-interaction">
          {formatTimeSince(timeSinceLastInteraction)}
        </p>
      </div>
    </li>  
  )
}

export default Bond;