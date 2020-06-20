import React, { useState } from 'react';
import './MyInteractions.css';
import InteractionsList from '../InteractionsList/InteractionsList';
import NavBar from '../../common/NavBar/NavBar';
import { Link } from 'react-router-dom';
import SearchAndSortForm from '../../common/SearchAndSortForm/SearchAndSortForm';
import CircleButton from '../../common/CircleFab/CircleFAB';


function MyInteractions(props) {
  const [filterText, setFilterText] = useState('');
  const [sortOption, setSortOption]  = useState('time');
  
  return (
    <>
      <NavBar />
      <main role="main">
        <header role="banner">
          <h1>My Interactions</h1>
        </header>
        <section>
          <SearchAndSortForm 
            filterText={filterText}
            setFilterText={setFilterText}
            sortOption={sortOption}
            setSortOption={setSortOption}/>
          <InteractionsList 
            interactions={props.store.INTERACTIONS}
            filterText={filterText}
            sortOption={sortOption}/>
        </section>
      </main>
      <div className='FAB-container'>
        <CircleButton
          tag={Link}
          to='/interactions/add'
          type='button'
          className='add-bond-button'
        >
          + ADD
        </CircleButton>
      </div>
    </>
  );
}

export default MyInteractions;