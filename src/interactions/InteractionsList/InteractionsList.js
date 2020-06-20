import React from 'react';
import './InteractionsList.css';
import Interaction from '../Interaction/Interaction';
import { daysSince } from '../../helper';

function InteractionsList(props) {
  const { interactions, filterText, sortOption } = props;

  function filterInteractions(interactions, filterText) {
    return interactions.filter(interaction => interaction.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
  }

  function sortInteractions(interactions, sortOption) {
    if (sortOption === 'name') {
      interactions.sort((interaction1, interaction2) => {
        const name1 = interaction1.name;
        const name2 = interaction2.name;
        if (name1 < name2) return -1;
        if (name1 > name2) return 1;
        return 0;
      })
    } else if (sortOption === 'time') {
      interactions.sort((interaction1, interaction2) => {
        const timeSince1 = daysSince(interaction1.date);
        const timeSince2 = daysSince(interaction2.date);
        if (timeSince1 < timeSince2) return -1;
        if (timeSince1 > timeSince2) return 1;
        return 0;
      })
    }
    return interactions;
  }
  
  // Preparing data for interactions list
  const filteredInteractionsList = (filterText === '') 
    ? [...interactions]
    : filterInteractions(interactions, filterText);

  const myInteractionsList = sortInteractions(filteredInteractionsList, sortOption);

  return (
    <ul className="interaction-list">
      {myInteractionsList.map(interaction => {
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