import React from 'react';
import { useHistory } from 'react-router-dom';
import './AddBond.css';
import NavBar from '../../common/NavBar/NavBar';


function AddBond() {
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault()
    history.push('/bonds');
  }

  function handleCancel() {
    history.push('/bonds');
  }

  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>Create New Bond</h1>
        </header>
        <section>
          <form id="create-bond">
            <div className="form-section">
              <label htmlFor="bond-name">Name</label>
              <input type="text" name="bond-name" required />
            </div>
            <div className="form-section">
              <p className="bond-birthday">Birthday</p>
              <input type="number" name="date-month" placeholder="Month" min="1" max="12" />
              <input type="number" name="date-day" className="date-day"  placeholder="Day" min="1" max="31" />
            </div>
            <div className="form-section">
              <label htmlFor="bond-notes">Notes</label>
              <textarea name="bond-notes" rows="15" cols="100" placeholder="Future discussion topics, gift ideas, significant details..."></textarea>
            </div>

            <button type="submit" onClick={handleSubmit}>
              Create
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

export default AddBond;
