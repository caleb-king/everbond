import React from 'react';
import './MyInteractions.css';
import InteractionsList from '../InteractionsList/InteractionsList';

function MyInteractions(props) {
  return (
    <main role="main">
      <header role="banner">
        <h1>My Interactions</h1>
      </header>
      {/* <InteractionFiltering /> */}
      <InteractionsList interactions={props.store.INTERACTIONS}/>
    </main>
  );
}

export default MyInteractions;