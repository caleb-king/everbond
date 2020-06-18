import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import './ViewBond.css';
import NavBar from '../../common/NavBar/NavBar';
import CircleButton from '../../common/CircleFab/CircleFAB';

function ViewBond(props) {
  const { bondID } = useParams();
  const { name, birthday, notes } = props.store.BONDS[bondID - 1];

  const month = birthday.substring(0,2);
  const day = birthday.substring(3);
  
  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>View Bond</h1>
        </header>
        <section>
          <h1>{name}</h1>
          <form id="view-bond">
          <div className="form-section">
            <p className="bond-birthday">Birthday</p>
            <input type="number" name="date-month" disabled value={month}/>
            <input type="number" name="date-day" className="date-day" disabled value={day}/>
          </div>
          <div className="form-section">
            <label htmlFor="bond-notes">Notes</label>
            <textarea name="bond-notes" rows="15" cols="100" disabled value={notes}></textarea>
          </div>

          </form>
        </section>
      </main>
      <div className='FAB-container'>
        <CircleButton
          tag={Link}
          to={`/bonds/edit/${bondID}`}
          type='button'
          className='edit-bond-button'
        >
          / EDIT
        </CircleButton>
      </div>
    </>
  );
}

export default ViewBond;