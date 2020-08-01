import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import './AddBond.css';
import NavBar from '../../common/NavBar/NavBar';
import config from '../../config';


function AddBond(props) {
  const [birthdayIsInvalid, setBirthdayIsInvalid] = useState(false);
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (birthdayIsInvalid) {
      alert("Please supply a valid birthday (MM/DD) or leave this field blank.");
      return;
    }

    const newBond = {
      name: e.target['bond-name'].value,
      birthday: e.target['bond-birthday'].value,
      notes: e.target['bond-notes'].value,
    }
    fetch(`${config.API_ENDPOINT}/bonds`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBond),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(bond => {
        props.addBond(bond);
        history.push('/bonds');
      })
      .catch(error => {
        console.error({ error });
      });
  }

  function handleCancel(e) {
    e.preventDefault();
    history.push('/bonds');
  }

  function handleBirthdayChange(e) {
    const birthdayIsBlank = e.target.value === '';
    const dateIsValid = moment(e.target.value, "MM/DD", true).isValid();

    if (dateIsValid || birthdayIsBlank) {
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
          <h1>Create New Bond</h1>
        </header>
        <section>
          <form id="create-bond" className="create-bond" onSubmit={handleSubmit}>
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
                <input 
                  className={birthdayIsInvalid ? 'bond-birthday invalid-birthday' : 'bond-birthday'}
                  type="text" 
                  name="bond-birthday" 
                  placeholder="MM/DD"
                  onBlur={handleBirthdayChange}/>
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
              <button className="create" type="submit">
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
