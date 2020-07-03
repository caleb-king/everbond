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
        <section className="my-interactions">
          <Link to='/interactions/add' className="add-button">
            <i className="fas fa-plus"></i>
            ADD INTERACTION
          </Link>
          <SearchAndSortForm 
            filterText={filterText}
            setFilterText={setFilterText}
            sortOption={sortOption}
            setSortOption={setSortOption}/>
          <InteractionsList 
            interactions={props.interactions}
            bonds={props.bonds}
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
          <i className="fas fa-plus"></i>
        </CircleButton>
      </div>
    </>
  );
}

export default MyInteractions;