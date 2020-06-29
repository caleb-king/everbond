import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './EditBond.css';
import NavBar from '../../common/NavBar/NavBar';

function EditBond(props) {
  const bondIdAsString = useParams().bondID;
  const bondIdAsNum = parseInt(bondIdAsString,10);
  const bonds = props.store.BONDS;
  
  const bondIndex = bonds.findIndex(bond => bond.id === bondIdAsNum);
  const { name, birthday, notes } = bonds[bondIndex];

  let history = useHistory();

  function handleUpdate(e) {
    e.preventDefault()
    history.push(`/bonds/view/${bondIdAsNum}`);
  }

  function handleCancel() {
    history.push(`/bonds/view/${bondIdAsNum}`);
  }

  return (
    <>
      <NavBar />
      <main role="main">
        <header>
          <h1>Edit Bond</h1>
        </header>
        <section>
          <form id="edit-bond" className="edit-bond">
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
                  className="bond-birthday" 
                  type="text" 
                  name="bond-birthday" 
                  placeholder="MM/DD" 
                  defaultValue={birthday}/>
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
              <button className="update" type="submit" onClick={handleUpdate}>
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
