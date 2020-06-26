import React from 'react';
import './Interaction.css';
import { Link, useHistory } from 'react-router-dom';
import { formatDate } from '../../helper';

function Interaction(props) {
  const { interactionId, bondId, name, date, description } = props;

  let history = useHistory();

  function handleInteractionClicked() {
    history.push(`/interactions/view/${interactionId}`);
  }

  return (
    <li className="interaction">
      <Link className="user-img" to={`/bonds/view/${bondId}`}><i className="fas fa-user-circle"></i></Link>
      <div className="interaction-content-container" onClick={handleInteractionClicked}>
        <div className="interaction-name-and-date">
          <Link className="interaction-name" to={`/interactions/view/${interactionId}`} >
            {name}
          </Link>
          <p className="interaction-date" >
            {formatDate(date)}
          </p>
        </div>
        <p className="interaction-description">
          {description}
        </p>
      </div>
    </li>
  )
}

export default Interaction;