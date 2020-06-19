import React from 'react';
import './SearchAndSortForm.css';

function SearchAndSortForm(props) {
  const { filterText, setFilterText } = props;

  function handleSearchInputChange(e) {
    setFilterText(e.target.value)
  }

  return (
    <form>
      <input placeholder="Search By Name..." value={filterText} onChange={handleSearchInputChange}/>
      {/* <br />
      <select name="sort" id="sort">
        <option value="time">Sort by Time</option>
        <option value="name">Sort by Name</option>
      </select> */}
    </form>
  )
}

export default SearchAndSortForm;