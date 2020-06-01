import React from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import AddBondForm from '../AddBondForm/AddBondForm';
import AddInteractionForm from '../AddInteractionForm/AddInteractionForm';
import FilterableBondsList from '../FilterableBondsList/FilterableBondsList';
import FilterableInteractionsList from '../FilterableInteractionsList/FilterableInteractionsList';

function App(props) {
  return (
    <div className="App">
      {/* <FilterableBondsList bonds={props.store.BONDS} /> */}
      <FilterableInteractionsList interactions={props.store.INTERACTIONS} />
    </div>
  );
}

export default App;
