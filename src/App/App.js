import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../landing-page/LandingPage';
import MyBonds from '../bonds/MyBonds/MyBonds';
import AddBond from '../bonds/AddBond/AddBond';
import EditBond from '../bonds/EditBond/EditBond';
import ViewBond from '../bonds/ViewBond/ViewBond';
import AddInteraction from '../interactions/AddInteraction/AddInteraction';
import EditInteraction from '../interactions/EditInteraction/EditInteraction';
import MyInteractions from '../interactions/MyInteractions/MyInteractions';
import ViewInteraction from '../interactions/ViewInteraction/ViewInteraction';

function App(props) {

  function renderRoute() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        
        <Route exact path="/bonds" render={() => (
          <MyBonds store={props.store} />
        )} />
        <Route path="/bonds/add/" component={AddBond} />
        <Route path="/bonds/view/:bondID" render={() => (
          <ViewBond store={props.store} />
        )} />
        <Route path="/bonds/edit/:bondID" render={() => (
          <EditBond store={props.store} />
        )} />

        <Route exact path="/interactions" render={() => (
          <MyInteractions store={props.store} />
        )} />
        <Route path="/interactions/add/" component={AddInteraction} />
        <Route path="/interactions/view/:interactionID" component={ViewInteraction} />
        <Route path="/interactions/edit/:interactionID" component={EditInteraction} />
      </>
    )
  }
  
  return (
    <div className="App">
      {renderRoute()}
    </div>
  );
}

export default App;
