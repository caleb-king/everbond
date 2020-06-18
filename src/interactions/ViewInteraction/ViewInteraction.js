import React from 'react';
import NavBar from '../../common/NavBar/NavBar';
import CircleButton from '../../common/CircleFab/CircleFAB';
import { Link, useParams, useHistory } from 'react-router-dom';
import './ViewInteraction.css';

function ViewInteraction(props) {
  const { interactionID } = useParams();
  const { name, date, medium, location, description } = props.store.INTERACTIONS[interactionID - 1];

  const month = date.substring(5,7);
  const day = date.substring(8);
  const year = date.substring(0,4);

  

  
  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>View Interaction</h1>
        </header>
        <section>
        <form id="view-interaction">
          <div className="form-section">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              disabled
              value={name}/>
          </div>
          <div className="form-section">
            <label htmlFor="date">Date</label>
            <input type="number" name="date-month" min="1" max="12" disabled value={month}/>
            <input type="number" name="date-day" className="date-day"  min="1" max="31" disabled value={day}/>
            <input type="number" name="date-year" className="date-year" disabled value={year}/>
          </div>
          <div className="form-section">
            <label htmlFor="medium">Medium</label>
            <input type="text" name="medium" disabled value={medium}/>
          </div>
          <div className="form-section">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" disabled value={location}/>
          </div>
          <div className="form-section">
            <label htmlFor="description">Description</label>
            <textarea 
              name="description" 
              rows="15" 
              cols="100"
              disabled
              value={description}>
            </textarea>
          </div>
        </form>
        </section>
      </main>
      <div className='FAB-container'>
        <CircleButton
          tag={Link}
          to={`/interactions/edit/${interactionID}`}
          type='button'
          className='edit-interaction-button'
        >
          / EDIT
        </CircleButton>
      </div>
    </>
  )
}

export default ViewInteraction;
