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
          return interactionsRes.json().then(e => Promise.reject(e));

        return Promise.all([
          bondsRes.json(),
          interactionsRes.json(),
        ])
      })
      .then(([bonds, interactions]) => {
        setBonds(bonds);
        setInteractions(interactions);
      })
      .catch(error => {
        console.error({ error });
      })
  }, []);

  function handleAddBond(newBond) {
    setBonds(bonds => [...bonds, newBond]);
  }

  function handleAddInteraction(newInteraction) {
    setInteractions(interactions => [...interactions, newInteraction]);
  }

  function handleUpdateBond(updatedBond, id) {
    const updatedBondWithId = { id, ...updatedBond};
    const updatedBondsArray = bonds.map(bond => {
      return bond.id === id ? updatedBondWithId : bond;
    });
    setBonds(updatedBondsArray);
  }

  function handleUpdateInteraction(updatedInteraction, id) {
    updatedInteraction.bondId = parseInt(updatedInteraction.bondId, 10);
    const updatedInteractionWithId = { id, ...updatedInteraction};
    const updatedInteractionsArray = interactions.map(interaction => {
      return interaction.id === id ? updatedInteractionWithId : interaction;
    });
    setInteractions(updatedInteractionsArray);
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
            addInteraction={handleAddInteraction}
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
