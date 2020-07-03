import React, { useState, useEffect } from 'react';
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
import config from '../config';


function App(props) {
  const [bonds, setBonds] = useState([]);
  const [interactions, setInteractions] = useState([]);
  
  useEffect(() => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/bonds`),
      fetch(`${config.API_ENDPOINT}/interactions`)
    ])
      .then(([bondsRes, interactionsRes]) => {
        if (!bondsRes.ok)
          return bondsRes.json().then(e => Promise.reject(e))
        if (!interactionsRes.ok)
          return interactionsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          bondsRes.json(),
          interactionsRes.json(),
        ])
      })
      .then(([bonds, interactions]) => {
        setBonds(bonds)
        setInteractions(interactions)
      })
      .catch(error => {
        console.error({ error })
      })
  }, [])

  function handleAddBond(newBond) {
    console.log('handleAddBond ran');
    console.log('newBond: ',newBond);
  }

  function handleAddInteraction(newInteraction) {
    console.log('handleAddInteraction ran');
    console.log('newInteraction: ',newInteraction)
  }

  function handleUpdateBond(updatedBond, id) {
    console.log('handleUpdateBond ran');
    console.log('updatedBond:',updatedBond,'id: ',id)
  }

  function handleUpdateInteraction(updatedInteraction, id) {
    console.log('handleUpdateInteraction');
    console.log('updatedInteraction:',updatedInteraction,'id: ',id)
  }


  function renderRoute() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        
        <Route exact path="/bonds" render={() => (
          <MyBonds 
            bonds={bonds} 
            interactions={interactions}
          />
        )} />
        <Route path="/bonds/add/" render={() => (
          <AddBond addBond={handleAddBond} />
        )} />
        <Route path="/bonds/view/:bondID" render={() => (
          <ViewBond bonds={bonds} />
        )} />
        <Route path="/bonds/edit/:bondID" render={() => (
          <EditBond 
            bonds={bonds} 
            updateBond={handleUpdateBond}
          />
        )} />

        <Route exact path="/interactions" render={() => (
          <MyInteractions 
            bonds={bonds} 
            interactions={interactions}
          />
        )} />
        <Route path="/interactions/add/" render={() => (
          <AddInteraction 
            bonds={bonds} 
            AddInteraction={handleAddInteraction}
          />
        )} />
        <Route path="/interactions/view/:interactionID" render={() => (
          <ViewInteraction 
            bonds={bonds} 
            interactions={interactions}
          />
        )} />
        <Route path="/interactions/edit/:interactionID" render={() => (
          <EditInteraction 
            bonds={bonds} 
            interactions={interactions}
            updateInteraction={handleUpdateInteraction}
          />
        )} />
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
