import React from 'react';
import './InteractionsList.css';
import Interaction from '../Interaction/Interaction';

function InteractionsList(props) {
  return (
    props.interactions.map(interaction => {
      const { name, description, date, id } = interaction;
      
      return (
        <Interaction 
          name={name}
          description={description}
          date={date} 
          key={id}
          id={id}/>
      );
    })
  )
}

export default InteractionsList;