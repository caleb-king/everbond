import React from 'react';
import { useHistory } from 'react-router-dom';
import './AddInteraction.css';
import NavBar from '../../common/NavBar/NavBar';
import config from '../../config';
import { findMediumMatch, formatWithYearFirstAndHyphens } from '../../helper';

function AddInteraction(props) {
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const medium = findMediumMatch(e.target['medium'].value);
    const date = formatWithYearFirstAndHyphens(e.target['interaction-date'].value);
    const newInteraction = {
      bondId: e.target['interaction-name'].value,
      date: date,
      medium: medium,
      location: e.target['location'].value,
      description: e.target['description'].value,
    }
    fetch(`${config.API_ENDPOINT}/interactions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newInteraction),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(interaction => {
        props.addInteraction(interaction);
        history.push('/interactions');
      })
      .catch(error => {
        console.error({ error })
      })
  }

  function handleCancel(e) {
    e.preventDefault();
    history.push('/interactions');
  }

  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>Log New Interaction</h1>
        </header>
        <section>
          <form id="add-interaction" className="add-interaction"  onSubmit={handleSubmit}>
            <div className="form-section">
              <label htmlFor="interaction-name">Name</label>
              <div className="add-interaction-field">
                <i className="fas fa-user"></i>
                <input className="interaction-name" type="text" name="interaction-name" required />
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="interaction-date">Date</label>
              <div className="add-interaction-field">
                <i className="fas fa-calendar"></i>
                <input className="interaction-date" type="text" name="interaction-date" placeholder="MM/DD/YYYY"/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="medium">Medium</label>
              <div className="add-interaction-field">
              <i className="fas fa-arrows-alt-h"></i>
                <select className="medium" name="medium" id="medium">
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
                <input className="location" type="text" name="location"/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="description">Description</label>
              <div className="create-bond-field">
                <i className="fas fa-sticky-note"></i>
                <textarea name="description" rows="10" placeholder="Conversation highlights, activities, significant details..."></textarea>
              </div>
            </div>

            <div className="button-container">
              <button className="submit" type="submit">
                SUBMIT
              </button>
              <button className="cancel" onClick={handleCancel}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default AddInteraction;
