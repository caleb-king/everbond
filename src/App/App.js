import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import LandingPageNav from '../LandingPage/LandingPageNav';
import MainAppNav from '../MainAppNav/MainAppNav';
import AddBondForm from '../AddBondForm/AddBondForm';
import AddInteractionForm from '../AddInteractionForm/AddInteractionForm';
import FilterableBondsList from '../FilterableBondsList/FilterableBondsList';
import FilterableInteractionsList from '../FilterableInteractionsList/FilterableInteractionsList';

function App(props) {
  
  function renderNavRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPageNav} />
        <Route path="/bonds" component={MainAppNav} />
        <Route path="/add-bond" component={MainAppNav} />
        <Route path="/interactions" component={MainAppNav} />
        <Route path="/add-interaction" component={MainAppNav} />
      </>
    )
  }

  function renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route path="/bonds" render={() => <FilterableBondsList bonds={props.store.BONDS} />} />
        <Route path="/add-bond" component={AddBondForm} />
        <Route path="/interactions" render={() => <FilterableInteractionsList interactions={props.store.INTERACTIONS} />} />
        <Route path="/add-interaction" component={AddInteractionForm} />
      </>
    )
  }
  
  return (
    <div className="App">
      {renderNavRoutes()}
      {renderMainRoutes()}
    </div>
  );
}

export default App;
