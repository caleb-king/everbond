import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ViewBond.css';
import NavBar from '../../common/NavBar/NavBar';
import CircleButton from '../../common/CircleFab/CircleFAB';
import { formatBirthday } from '../../helper';

function ViewBond(props) {
  const bondIdAsString = useParams().bondID;
  const bondIdAsNum = parseInt(bondIdAsString,10);
  const bonds = props.store.BONDS;
  
  const bondIndex = bonds.findIndex(bond => bond.id === bondIdAsNum);
  const { name, birthday, notes } = bonds[bondIndex];

  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>View Bond</h1>
        </header>
        <section className="view-bond">
          <div className="view-bond-img-and-name">
            <i className="fas fa-user-circle"></i>
            <h2>{name}</h2>
          </div>
          <div className="view-bond-birthday">
            <i className="fas fa-birthday-cake"></i>
            <p aria-label="Birthday">{formatBirthday(birthday)}</p>
          </div>
          <div className="view-bond-notes">
            <i className="fas fa-sticky-note"></i>
            <textarea aria-label="Notes" name="bond-notes" rows="15" disabled value={notes}></textarea>
          </div>
        </section>
      </main>
      <div className='FAB-container'>
        <CircleButton
          tag={Link}
          to={`/bonds/edit/${bondIdAsNum}`}
          type='button'
          className='edit-bond-button'
        >
          <i className="fas fa-pen"></i>
        </CircleButton>
      </div>
    </>
  );
}

export default ViewBond;