import React from 'react';
import './MyBonds.css';
import NavBar from '../../common/NavBar/NavBar';
import { Link } from 'react-router-dom';
import SearchAndSortForm from '../../common/SearchAndSortForm/SearchAndSortForm';
import BondList from '../BondsList/BondsList';
import CircleButton from '../../common/CircleFab/CircleFAB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyBonds(props) {
  return (
    <>
      <NavBar />
      <main role="main">
        <header role="banner">
          <h1>My Bonds</h1>
        </header>
        <section>
          <SearchAndSortForm />
          <BondList bonds={props.store.BONDS}/>
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