import React from 'react';
import './InteractionsList.css';
import Interaction from '../Interaction/Interaction';
import { daysSince, getNameByBondId } from '../../helper';

function InteractionsList(props) {
  const { interactions, bonds, filterText, sortOption } = props;

  function filterInteractions(interactions, filterText) {
    return interactions.filter(interaction => getNameByBondId(interaction.bondId, bonds).toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
  }

  function sortInteractions(interactions, sortOption) {
    if (sortOption === 'name') {
      interactions.sort((interaction1, interaction2) => {
        const name1 = getNameByBondId(interaction1.bondId, bonds);
        const name2 = getNameByBondId(interaction2.bondId, bonds);
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
        const { bondId, description, date, id } = interaction;

        const name = getNameByBondId(bondId, bonds);
        
        return (
          <Interaction 
            name={name}
            description={description}
            date={date} 
            key={id}
            interactionId={id}
            bondId={bondId}/>
        );
      })}
    </ul>
    
    
  )
}

export default InteractionsList;