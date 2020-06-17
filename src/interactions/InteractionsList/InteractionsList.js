import React from 'react';
import './InteractionsList.css';
import Interaction from '../Interaction/Interaction';

function InteractionsList(props) {
  return (
    props.interactions.map(interaction => {
      const { names, medium, date, id } = interaction;
      
      return (
        <Interaction 
          names={names}
          medium={medium}
          date={date} 
          key={id}/>
      );
    })
  )
}

export default InteractionsList;