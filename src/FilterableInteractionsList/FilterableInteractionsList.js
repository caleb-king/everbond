import React from 'react';
import './FilterableInteractionsList.css';
import InteractionsList from './InteractionsList/InteractionsList';

function FilterableInteractionsList(props) {
  return (
    <main role="main">
      <header role="banner">
        <h1>Your Interactions</h1>
      </header>
      {/* <InteractionFiltering /> */}
      <InteractionsList interactions={props.interactions}/>
    </main>
  );
}

export default FilterableInteractionsList;