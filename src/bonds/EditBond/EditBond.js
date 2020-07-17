import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './EditBond.css';
import moment from 'moment';
import NavBar from '../../common/NavBar/NavBar';
import config from '../../config';

function EditBond(props) {
  const bondIdAsString = useParams().bondID;
  const bondIdAsNum = parseInt(bondIdAsString,10);
  const bonds = props.bonds;
  
  const bondIndex = bonds.findIndex(bond => bond.id === bondIdAsNum);
  const { name, birthday, notes } = bonds[bondIndex] || {};

  const [birthdayIsInvalid, setBirthdayIsInvalid] = useState(false);
  let history = useHistory();

  function handleUpdate(e) {
    e.preventDefault()

    if (birthdayIsInvalid) {
      alert("Please supply a valid birthday (MM/DD) or leave this field blank.");
      return;
    }

    const updatedBond = {
      name: e.target['bond-name'].value,
      birthday: e.target['bond-birthday'].value,
      notes: e.target['bond-notes'].value,
    }

    fetch(`${config.API_ENDPOINT}/bonds/${bondIdAsNum}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedBond),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        props.updateBond(updatedBond, bondIdAsNum);
        history.push(`/bonds/view/${bondIdAsNum}`);
      })
      .catch(error => {
        console.error({ error })
      })
  }

  function handleCancel(e) {
    e.preventDefault();
    history.push(`/bonds/view/${bondIdAsNum}`);
  }

  function handleBirthdayChange(e) {
    const birthdayIsBlank = e.target.value === '';
    const dateIsValid = moment(e.target.value, "MM/DD", true).isValid();

    if (dateIsValid || birthdayIsBlank ) {
      setBirthdayIsInvalid(false);
    } else {
      setBirthdayIsInvalid(true);
    }
  }

  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>Edit Bond</h1>
        </header>
        <section>
          <form id="edit-bond" className="edit-bond" onSubmit={handleUpdate}>
            <div className="form-section">
              <label htmlFor="bond-name">Name</label>
              <div className="edit-bond-field">
                <i className="fas fa-user"></i>
                <input 
                  className="bond-name" 
                  type="text" 
                  name="bond-name" 
                  required 
                  defaultValue={name}/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="bond-birthday">Birthday</label>
              <div className="edit-bond-field">
                <i className="fas fa-birthday-cake"></i>
                <input 
                  className={birthdayIsInvalid ? 'bond-birthday invalid-birthday' : 'bond-birthday'}
                  type="text" 
                  name="bond-birthday" 
                  placeholder="MM/DD" 
                  defaultValue={birthday}
                  onBlur={handleBirthdayChange}/>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="bond-notes">Notes</label>
              <div className="edit-bond-field">
                <i className="fas fa-sticky-note"></i>
                <textarea 
                  name="bond-notes" 
                  rows="10" 
                  placeholder="Future discussion topics, gift ideas, significant details..."
                  defaultValue={notes}>
                </textarea>
              </div>
            </div>

            <div className="button-container">
              <button className="update" type="submit">
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
  );
}

export default EditBond;
