import React from 'react';
import './SearchAndSortForm.css';

function SearchAndSortForm(props) {
  const { filterText, setFilterText, sortOption, setSortOption } = props;

  function handleSearchInputChange(e) {
    setFilterText(e.target.value)
  }

  function handleSortOptionChange(e) {
    setSortOption(e.target.value);
  }

  return (
    <form>
      <input placeholder="Search By Name..." value={filterText} onChange={handleSearchInputChange}/>
      <br />
      <select name="sort" id="sort" value={sortOption} onChange={handleSortOptionChange}>
        <option value="time">Sort by Time</option>
        <option value="name">Sort by Name</option>
      </select>
    </form>
  )
}

export default SearchAndSortForm;