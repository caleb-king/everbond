import React from 'react';
import './SearchAndSortForm.css';

function SearchAndSortForm(props) {
  const { filterText, setFilterText, sortOption, setSortOption } = props;

  function handleSearchInputChange(e) {
    setFilterText(e.target.value);
  }

  function handleSortOptionChange(e) {
    setSortOption(e.target.value);
  }

  function renderSortIcon(sortOption) {
    if (sortOption === 'name') return <i className="fas fa-user"></i>;
    return <i className="fas fa-history"></i>
  }

  return (
    <form className="search-and-sort-form">
      <div className="search-field-container">
        <i className="fas fa-search"></i>
        <input placeholder="Search By Name..." className="search-field" value={filterText} onChange={handleSearchInputChange}/>
      </div>
      <div className="search-field-container">
        {renderSortIcon(sortOption)}
        <select name="sort" id="sort" className="sort-field" value={sortOption} onChange={handleSortOptionChange}>
          <option value="time">Sort by Time</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
    </form>
  )
}

export default SearchAndSortForm;