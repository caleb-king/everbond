import React from 'react';
import './FilterableBondsList.css';
import BondList from './BondsList/BondsList';

function FilterableBondsList(props) {
  return (
    <main role="main">
      <header role="banner">
        <h1>Your Bonds</h1>
      </header>
      {/* <BondFiltering /> */}
      <BondList bonds={props.bonds}/>
    </main>
  );
}

export default FilterableBondsList;