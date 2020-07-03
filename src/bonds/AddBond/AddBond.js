import React from 'react';
import { useHistory } from 'react-router-dom';
import './AddBond.css';
import NavBar from '../../common/NavBar/NavBar';


function AddBond(props) {
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
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
          <form id="create-bond" className="create-bond">
            <div className="form-section">
              <label htmlFor="bond-name">Name</label>
              <div className="create-bond-field">
                <i className="fas fa-user"></i>
                <input className="bond-name" type="text" name="bond-name" required />
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="bond-birthday">Birthday</label>
              <div className="create-bond-field">
                <i className="fas fa-birthday-cake"></i>
                <input className="bond-birthday" type="text" name="bond-birthday" placeholder="MM/DD"/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="bond-notes">Notes</label>
              <div className="create-bond-field">
                <i className="fas fa-sticky-note"></i>
                <textarea name="bond-notes" rows="10" placeholder="Future discussion topics, gift ideas, significant details..."></textarea>
              </div>
            </div>

            <div className="button-container">
              <button className="create" type="submit" onClick={handleSubmit}>
                CREATE
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

export default AddBond;
