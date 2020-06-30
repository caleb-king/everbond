import React from 'react';
import NavBar from '../../common/NavBar/NavBar';
import { Link, useParams } from 'react-router-dom';
import './ViewInteraction.css';
import { formatDateWithYear } from '../../helper';

function ViewInteraction(props) {
  const interactionIdAsString = useParams().interactionID;
  const interactionIdAsNum = parseInt(interactionIdAsString,10);
  const interactions = props.store.INTERACTIONS;

  const interactionIndex = interactions.findIndex(interaction => interaction.id === interactionIdAsNum);
  const { name, date, medium, location, description } = interactions[interactionIndex];

  const locationDiv = (
    <div className="view-interaction-datum">
      <i className="fas fa-map-marker-alt"></i>
      <p aria-label="Location">{location}</p>
    </div>
  )

  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>View Interaction</h1>
        </header>
        <section className="view-interaction">
          <div className="view-interaction-datum">
            <i className="fas fa-user"></i>
            <p aria-label="Name">{name}</p>
          </div>
          <div className="view-interaction-datum">
            <i className="fas fa-calendar"></i>
            <p aria-label="Date">{formatDateWithYear(date)}</p>
          </div>
          <div className="view-interaction-datum">
            <i className="fas fa-arrows-alt-h"></i>
            <p aria-label="Medium">{medium}</p>
          </div>
          {location && locationDiv}
          <div className="view-interaction-description">
            <i className="fas fa-sticky-note"></i>
            <textarea
              name="Description"
              rows="15"
              disabled
              value={description}>
            </textarea>
          </div>
          <div className="links-container">
            <Link to="/interactions/" className="return-button">
              <i className="fas fa-arrow-left"></i>
              RETURN
            </Link>
            <Link to={`/interactions/edit/${interactionIdAsNum}`} className="edit-button">
              <i className="fas fa-pen"></i>
              EDIT
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default ViewInteraction;
