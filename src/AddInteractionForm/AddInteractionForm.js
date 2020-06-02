import React from 'react';
import { Link } from 'react-router-dom';
import './AddInteractionForm.css';

function AddInteractionForm() {
  return (
    <main role="main">
      <header>
        <h1>New Interaction</h1>
      </header>
      <section>
        <form id="create-bond">
          <div className="form-section">
            <h2>Who</h2>
            <label htmlFor="interaction-who">Add the names of the people you interacted with.</label>
            <input type="text" name="interaction-who" required />
            <Link to="add-bond" className="add-group-link">+ Add a Bond</Link>
          </div>
          <div className="form-section">
            <h2>What</h2>
            <label htmlFor="interaction-what">Briefly describe the interaction.</label>
            <textarea name="interaction-what" rows="5"></textarea>
          </div>
          <div className="form-section">
            <h2>When</h2>
            <label htmlFor="interaction-when">What date did this occur?</label>
            <input type="number" name="date-month" placeholder="06" min="1" max="12" required /> .
            <input type="number" name="date-day" className="date-day"  placeholder="03" min="1" max="31" required /> .
            <input type="number" name="date-year" className="date-year" placeholder="2020" required />
          </div>
          <div className="form-section">
            <h2>Where</h2>
            <label htmlFor="interaction-where">Add a location for the interaction.</label>
            <input type="text" name="interaction-who" />
          </div>
          <div className="form-section">
            <h2>How</h2>
            <label htmlFor="interaction-how">Select the medium used.</label>
            <select name="interaction-how" id="interaction-how">
              <option value="in-person">In Person</option>
              <option value="video-call">Video Call</option>
              <option value="phone-call">Phone Call</option>
              <option value="email">Email</option>
              <option value="letter">Letter</option>
            </select>
          </div>
          <hr />
          <div className="form-section">
            <label htmlFor="interaction-notes">Additional Notes</label>
            <textarea name="interaction-notes" rows="15" placeholder="Conversation highlights, activities, significant details..."></textarea>
          </div>

          <button type="submit">Submit</button>
          <button>Cancel</button>
        </form>
      </section>
    </main>
  );
}

export default AddInteractionForm;
