import React, { useState } from 'react';
import './MyBonds.css';
import NavBar from '../../common/NavBar/NavBar';
import { Link } from 'react-router-dom';
import SearchAndSortForm from '../../common/SearchAndSortForm/SearchAndSortForm';
import BondList from '../BondsList/BondsList';
import CircleButton from '../../common/CircleFab/CircleFAB';

function MyBonds(props) {
  const [filterText, setFilterText] = useState('');
  const [sortOption, setSortOption]  = useState('name');
  
  return (
    <>
      <NavBar />
      <main role="main">
        <header role="banner">
          <h1>My Bonds</h1>
        </header>
        <section>
          <SearchAndSortForm 
            filterText={filterText}
            setFilterText={setFilterText}
            sortOption={sortOption}
            setSortOption={setSortOption}/>
          <BondList 
            bonds={props.store.BONDS}
            interactions={props.store.INTERACTIONS}
            filterText={filterText}
            sortOption={sortOption}/>
        </section>
        <div className='FAB-container'>
          <CircleButton
            tag={Link}
            to='/bonds/add'
            type='button'
            className='add-bond-button'
          >
            <i className="fas fa-plus"></i>
          </CircleButton>
        </div>
      </main>
    </>
  );
}

export default MyBonds;