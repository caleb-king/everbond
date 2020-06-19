import React from 'react';
import './InteractionsList.css';
import Interaction from '../Interaction/Interaction';

function InteractionsList(props) {
  const { interactions, filterText } = props;
  
  const filteredInteractions = interactions.filter(interaction => interaction.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
  
  return (
    <ul className="bond-list">
      {filteredInteractions.map(interaction => {
      const { name, description, date, id } = interaction;
      
      return (
        <Interaction 
          name={name}
          description={description}
          date={date} 
          key={id}
          id={id}/>
      );
    })}
    </ul>
    
    
  )
}

export default InteractionsList;