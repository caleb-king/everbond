import React, { useState } from 'react';
import './MyBonds.css';
import NavBar from '../../common/NavBar/NavBar';
import { Link } from 'react-router-dom';
import SearchAndSortForm from '../../common/SearchAndSortForm/SearchAndSortForm';
import BondList from '../BondsList/BondsList';
import CircleButton from '../../common/CircleFab/CircleFAB';

function MyBonds(props) {
  const [filterText, setFilterText] = useState('');
  
  return (
    <>
      <NavBar />
      <main role="main">
        <header role="banner">
          <h1>My Bonds</h1>
        </header>
        <section>
          <SearchAndSortForm />
          <BondList 
            bonds={props.store.BONDS}
            filterText={filterText}/>
        </section>
      </main>
      <div className='FAB-container'>
        <CircleButton
          tag={Link}
          to='/bonds/add'
          type='button'
          className='add-bond-button'
        >
          + ADD
        </CircleButton>
      </div>
    </>
  );
}

export default MyBonds;