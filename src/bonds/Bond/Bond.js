import React from 'react';
import './Bond.css';

function Bond(props) {
  const { name } = props;

  //TO DO - figure out how to calculate/query the last interaction for each Bond
  //for now leave this hard coded
  let lastInteraction;
  if (name === 'Mom') {
    lastInteraction = '05.26.2020';
  } else if (name === 'Justin Wellum') {
    lastInteraction = '05.17.2020';
  } else {
    lastInteraction = '05.07.2020';
  }

  return (
    <section>
      <header>
          <h2>{name}</h2>
          <p className="last-interaction"><span className="last-interaction-label">Last Interaction:</span> {lastInteraction}</p>
          <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
      </header>
    </section>
  )
}

export default Bond;