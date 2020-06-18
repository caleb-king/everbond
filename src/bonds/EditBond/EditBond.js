import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './EditBond.css';
import NavBar from '../../common/NavBar/NavBar';

function EditBond(props) {
  const { bondID } = useParams();
  const { name, birthday, notes } = props.store.BONDS[bondID - 1];

  const month = birthday.substring(0,2);
  const day = birthday.substring(3);

  let history = useHistory();

  function handleUpdate(e) {
    e.preventDefault()
    history.push(`/bonds/view/${bondID}`);
  }

  function handleCancel() {
    history.push(`/bonds/view/${bondID}`);
  }
  
  return (
    <>
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
    </>
  );
}

export default EditBond;
