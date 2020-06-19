import React from 'react';
import { useHistory } from 'react-router-dom';
import './AddInteraction.css';
import NavBar from '../../common/NavBar/NavBar';

function AddInteraction() {
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault()
    history.push('/interactions');
  }

  function handleCancel() {
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
          <form id="add-interaction">
            <div className="form-section">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-section">
              <label htmlFor="date">Date</label>
              <input type="number" name="date-month" placeholder="Day" min="1" max="12" required />
              <input type="number" name="date-day" className="date-day"  placeholder="Month" min="1" max="31" required />
              <input type="number" name="date-year" className="date-year" placeholder="Year" required />
            </div>
            <div className="form-section">
              <label htmlFor="medium">Medium</label>
              <select name="medium" id="medium">
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
              <input type="text" name="location" />
            </div>
            <div className="form-section">
              <label htmlFor="description">Description</label>
              <textarea 
                name="description" 
                rows="15" 
                cols="100"
                placeholder="Conversation highlights, activities, significant details...">
              </textarea>
            </div>

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default AddInteraction;
