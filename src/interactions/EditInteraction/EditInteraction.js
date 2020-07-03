import React from 'react';
import './EditInteraction.css';
import NavBar from '../../common/NavBar/NavBar';
import { useParams, useHistory } from 'react-router-dom';
import { getNameByBondId } from '../../helper';

function EditInteraction(props) {
  const interactionIdAsString = useParams().interactionID;
  const interactionIdAsNum = parseInt(interactionIdAsString,10);
  const interactions = props.interactions;
  const bonds = props.bonds;

  console.log('interactions: ',interactions, 'interactionIdAsNum: ',interactionIdAsNum)
  const interactionIndex = interactions.findIndex(interaction => interaction.id === interactionIdAsNum);
  const { bondId, date, medium, location, description } = interactions[interactionIndex];
  const name = getNameByBondId(bondId, bonds);


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
    history.push(`/interactions/view/${interactionIdAsNum}`);
  }

  function handleCancel() {
    history.push(`/interactions/view/${interactionIdAsNum}`);
  }
  
  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>Edit Interaction</h1>
        </header>
        <section>
          <form id="edit-interaction" className="edit-interaction">
            <div className="form-section">
              <label htmlFor="interaction-name">Name</label>
              <div className="add-interaction-field">
                <i className="fas fa-user"></i>
                <input 
                  className="bond-name" 
                  type="text" 
                  name="interaction-name" 
                  required 
                  defaultValue={name}/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="interaction-date">Date</label>
              <div className="add-interaction-field">
                <i className="fas fa-calendar"></i>
                <input 
                  className="interaction-date" 
                  type="text" 
                  name="interaction-date" 
                  placeholder="MM/DD/YYYY"
                  defaultValue={date}/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="medium">Medium</label>
              <div className="add-interaction-field">
              <i className="fas fa-arrows-alt-h"></i>
                <select 
                  className="medium" 
                  name="medium" 
                  id="medium" 
                  defaultValue={findMediumMatch(medium)}
                >
                  <option value="in-person">In Person</option>
                  <option value="video-call">Video Call</option>
                  <option value="phone-call">Phone Call</option>
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="letter">Letter</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="location">Location</label>
              <div className="add-interaction-field">
                <i className="fas fa-map-marker-alt"></i>
                <input 
                  className="location" 
                  type="text" 
                  name="location"
                  defaultValue={location}/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="description">Description</label>
              <div className="create-bond-field">
                <i className="fas fa-sticky-note"></i>
                <textarea 
                  name="description" 
                  rows="10"
                  placeholder="Conversation highlights, activities, significant details..."
                  defaultValue={description}>
                </textarea>
              </div>
            </div>

            <div className="button-container">
              <button className="update" type="submit" onClick={handleUpdate}>
                UPDATE
              </button>
              <button className="cancel" onClick={handleCancel}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default EditInteraction;