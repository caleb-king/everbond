import React from 'react';
import './Interaction.css';

function Interaction(props) {
  const { names, medium, date } = props;

  function formatDate(date) {
    const year = date.substr(0,4);
    const month  = date.substr(5,2);
    const day = date.substr(8,2);
    return `${month}.${day}.${year}`;
  }

  return (
    <section>
      <header>
          <h2>{names} - {medium} - {formatDate(date)}</h2>
          <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
      </header>
    </section>
  )
}

export default Interaction;