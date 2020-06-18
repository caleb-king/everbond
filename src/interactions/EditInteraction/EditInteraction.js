import React from 'react';
import './EditInteraction.css';
import NavBar from '../../common/NavBar/NavBar';
import CircleButton from '../../common/CircleFab/CircleFAB';
import { useParams, useHistory } from 'react-router-dom';

function EditInteraction(props) {
  const { interactionID } = useParams();
  const { name, date, medium, location, description } = props.store.INTERACTIONS[interactionID - 1];

  const month = date.substring(5,7);
  const day = date.substring(8);
  const year = date.substring(0,4);

  function findMediumMatch(medium) {
    const mediumMatchingTable = {
      'In Person' : 'in-person',
      'Video Call' : 'video-call',
      'Phone Call' : 'phone-call',
      'Text' : 'text',
      'Email' : 'email',
      'Letter' : 'letter',
      'Other' : 'other',
    }
    return mediumMatchingTable[medium];
  }

  let history = useHistory();

  function handleUpdate(e) {
    e.preventDefault()
    history.push(`/interactions/view/${interactionID}`);
  }

  function handleCancel() {
    history.push(`/interactions/view/${interactionID}`);
  }
  
  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>Edit Interaction</h1>
        </header>
        <section>
        <form id="edit-interaction">
          <div className="form-section">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              required
              defaultValue={name}/>
          </div>
          <div className="form-section">
            <label htmlFor="date">Date</label>
            <input type="number" name="date-month" min="1" max="12" required defaultValue={month}/>
            <input type="number" name="date-day" className="date-day" min="1" max="31" required defaultValue={day}/>
            <input type="number" name="date-year" className="date-year" required defaultValue={year}/>
          </div>
          <div className="form-section">
          <label htmlFor="medium">Medium</label>
            <select name="medium" id="medium" defaultValue={findMediumMatch(medium)}>
              <option value="in-person">In Person</option>
              <option value="video-call">Video Call</option>
              <option value="phone-call">Phone Call</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="letter">Letter</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-section">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" defaultValue={location}/>
          </div>
          <div className="form-section">
            <label htmlFor="description">Description</label>
            <textarea 
              name="description" 
              rows="15" 
              cols="100"
              
              defaultValue={description}>
            </textarea>
          </div>
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
          <button onClick={handleCancel}>
            Cancel
          </button>
        </form>
        </section>
      </main>
    </>
  )
}

export default EditInteraction;