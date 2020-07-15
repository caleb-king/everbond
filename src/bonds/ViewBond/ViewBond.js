import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ViewBond.css';
import NavBar from '../../common/NavBar/NavBar';
import { formatBirthday } from '../../helper';

function ViewBond(props) {
  const bondIdAsString = useParams().bondID;
  const bondIdAsNum = parseInt(bondIdAsString,10);
  const bonds = props.bonds;
  
  const bondIndex = bonds.findIndex(bond => bond.id === bondIdAsNum);
  const { name, birthday, notes } = bonds[bondIndex];

  const birthdayDiv = (
    <div className="view-bond-birthday">
      <i className="fas fa-birthday-cake"></i>
      <p aria-label="Birthday">{formatBirthday(birthday)}</p>
    </div>
  )

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
          {birthday && birthdayDiv}
          <div className="view-bond-notes">
            <i className="fas fa-sticky-note"></i>
            <textarea aria-label="Notes" name="bond-notes" rows="15" disabled value={notes}></textarea>
          </div>
          <div className="links-container">
            <Link to="/bonds/" className="return-button">
              <i className="fas fa-arrow-left"></i>
              RETURN
            </Link>
            <Link to={`/bonds/edit/${bondIdAsNum}`} className="edit-button">
              <i className="fas fa-pen"></i>
              EDIT
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ViewBond;