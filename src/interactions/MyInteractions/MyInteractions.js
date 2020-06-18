import React from 'react';
import './MyInteractions.css';
import InteractionsList from '../InteractionsList/InteractionsList';
import NavBar from '../../common/NavBar/NavBar';
import { Link } from 'react-router-dom';
import SearchAndSortForm from '../../common/SearchAndSortForm/SearchAndSortForm';
import CircleButton from '../../common/CircleFab/CircleFAB';


function MyInteractions(props) {
  return (
    <>
      <NavBar />
      <main role="main">
        <header role="banner">
          <h1>My Interactions</h1>
        </header>
        <section>
          <SearchAndSortForm />
          <InteractionsList interactions={props.store.INTERACTIONS}/>
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