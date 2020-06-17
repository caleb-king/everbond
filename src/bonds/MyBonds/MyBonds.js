import React from 'react';
import './MyBonds.css';
import BondList from '../BondsList/BondsList';

function MyBonds(props) {
  return (
    <main role="main">
      <header role="banner">
        <h1>My Bonds</h1>
      </header>
      {/* <BondFiltering /> */}
      <BondList bonds={props.store.BONDS}/>
    </main>
  );
}

export default MyBonds;