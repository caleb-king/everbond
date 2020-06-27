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
  
  // const { bondID } = useParams();
  // const { name, birthday, notes } = props.store.BONDS[bondID - 1];

  // const month = birthday.substring(0,2);
  // const day = birthday.substring(3);

  let history = useHistory();

  function handleUpdate(e) {
    e.preventDefault()
    history.push(`/bonds/view/${bondIdAsNum}`);
  }

  function handleCancel() {
    history.push(`/bonds/view/${bondIdAsNum}`);
  }
  
  //defaultValue={month}

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


{/* <>
  <NavBar />
  <main role="main">
    <header>
      <h1>Edit Bond</h1>
    </header>
    <section>
      <form id="create-bond">
        <div className="form-section">
          <label htmlFor="bond-name">Name</label>
          <input 
            type="text" 
            name="bond-name" 
            required 
            defaultValue={name}/>
        </div>
        <div className="form-section">
          <p className="bond-birthday">Birthday</p>
          <input type="number" name="date-month" placeholder="Month" min="1" max="12" defaultValue={month}/>
          <input type="number" name="date-day" className="date-day"  placeholder="Day" min="1" max="31" defaultValue={day}/>
        </div>
        <div className="form-section">
          <label htmlFor="bond-notes">Notes</label>
          <textarea name="bond-notes" rows="15" cols="100" placeholder="Future discussion topics, gift ideas, significant details..." defaultValue={notes}></textarea>
        </div>

        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
        <button onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </section>
  </main>
</> */}