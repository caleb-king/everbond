import React from 'react';
import './SearchAndSortForm.css';

function SearchAndSortForm() {
  return (
    <form>
      <input placeholder="Search"/>
      <br />
      <select name="sort" id="sort">
        <option value="time">Sort by Time</option>
        <option value="name">Sort by Name</option>
      </select>
    </form>
  )
}

export default SearchAndSortForm;