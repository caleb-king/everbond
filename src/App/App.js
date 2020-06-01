import React from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import AddBondForm from '../AddBondForm/AddBondForm';
import AddInteractionForm from '../AddInteractionForm/AddInteractionForm';
import FilterableBondsList from '../FilterableBondsList/FilterableBondsList';

function App(props) {
  return (
    <div className="App">
      <FilterableBondsList bonds={props.store.BONDS} />
    </div>
  );
}

export default App;
