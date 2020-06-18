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
          <h2>Name</h2>
        </header>
        <section>
          <form id="view-bond">
          <div className="form-section">
            <label htmlFor="bond-name">Name</label>
            <input 
              type="text" 
              name="bond-name" 
              required 
              disabled
              defaultValue={name}/>
          </div>
          <div className="form-section">
            <p className="bond-birthday">Birthday</p>
            <input type="number" name="date-month" placeholder="Month" min="1" max="12" disabled defaultValue={month}/>
            <input type="number" name="date-day" className="date-day"  placeholder="Day" min="1" max="31" disabled defaultValue={day}/>
          </div>
          <div className="form-section">
            <label htmlFor="bond-notes">Notes</label>
            <textarea name="bond-notes" rows="15" cols="100" placeholder="Future discussion topics, gift ideas, significant details..." disabled defaultValue={notes}></textarea>
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