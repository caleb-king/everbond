import React from 'react';
import './AddBond.css';

function AddBond() {
  return (
    <main role="main">
      <header>
        <h1>New Bond</h1>
      </header>
      <section>
        <form id="create-bond">
          <div className="form-section">
            <label htmlFor="bond-name">Name</label>
            <input type="text" name="bond-name" required />
          </div>
          <div className="form-section">
            <label htmlFor="bond-group">Group</label>
            <select name="bond-group" id="bond-group">
              <option value="no-group">None</option>
              <option value="close-family">Close Family</option>
              <option value="family">Family</option>
              <option value="close-friends">Close Friends</option>
              <option value="friends">Friends</option>
              <option value="Coworkers">Coworkers</option>
            </select>
            <br />
            <a href="url" className="add-group-link">+ Add a Group</a>
          </div>
          <div className="form-section">
            <p className="bond-birthday">Birthday</p>
            <input type="number" name="date-month" placeholder="01" min="1" max="12" /> .
            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" /> .
            <input type="number" name="date-year" className="date-year" placeholder="1990" />
          </div>
          <div className="form-section">
            <label htmlFor="bond-notes">Notes</label>
            <textarea name="bond-notes" rows="15" placeholder="Future discussion topics, gift ideas, significant details..."></textarea>
          </div>

          <button type="submit">Submit</button>
          <button>Cancel</button>
        </form>
      </section>
    </main>
  );
}

export default AddBond;
