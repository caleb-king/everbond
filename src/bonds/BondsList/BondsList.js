import React from 'react';
import './BondsList.css';
import Bond from '../Bond/Bond';
import { daysSince } from '../../helper';

function BondsList(props) {
  const { bonds, interactions, filterText, sortOption } = props;

  function filterBonds(bonds, filterText) {
    return bonds.filter(bond => bond.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
  }

  // The array created with this function is used to calculate the 'Time Since Last Interaction' for each bond
  function makeLastInteractionByBondIdArr(interactions) {
    let lastInteractionByBondId = [];
    interactions.forEach(interaction => {
      const currentIndex = lastInteractionByBondId.findIndex(el => el.bondId === interaction.bondId);
      if (currentIndex === -1) {
        lastInteractionByBondId.push({
          bondId: interaction.bondId,
          date: interaction.date
        })
      } else {
        const currentLastInteractionDate = new Date(lastInteractionByBondId[currentIndex].date);
        const thisInteractionDate = new Date(interaction.date);
        if(currentLastInteractionDate < thisInteractionDate) {
          lastInteractionByBondId[currentIndex].date = interaction.date
        }
      }
    })

    return lastInteractionByBondId;
  }

  function addTimeSinceToBonds(bonds, lastInteractionByBondId) {
    return bonds.map(bond => {
      const lastInteraction = lastInteractionByBondId.find(interaction => interaction.bondId === bond.id);
      bond.timeSinceLastInteraction = !lastInteraction ? null : daysSince(lastInteraction.date);
      return bond;
    })
  }

  function sortBonds(bonds, sortOption) {
    if (sortOption === 'name') {
      bonds.sort((bond1, bond2) => {
        const name1 = bond1.name;
        const name2 = bond2.name;
        if (name1 < name2) return -1;
        if (name1 > name2) return 1;
        return 0;
      })
    } else if (sortOption === 'time') {
      bonds.sort((bond1, bond2) => {
        const timeSince1 = bond1.timeSinceLastInteraction;
        const timeSince2 = bond2.timeSinceLastInteraction;
        if (timeSince1 === null) return 1;
        if (timeSince1 < timeSince2) return -1;
        if (timeSince1 > timeSince2) return 1;
        return 0;
      })
    }
    return bonds;
  }

  // The section below prepares the data for the bonds list

  const filteredBondsList = (filterText === '') 
    ? [...bonds]
    : filterBonds(bonds, filterText);

  const lastInteractionByBondId = makeLastInteractionByBondIdArr(interactions);
  
  const bondsWithTimeSince = addTimeSinceToBonds(filteredBondsList, lastInteractionByBondId);

  const myBondsList = sortBonds(bondsWithTimeSince, sortOption);
  
  return (
    <>
      <p className="time-since-label">Time Since Last Interaction</p>
      <ul className="bond-list">
        {myBondsList.map(bond => {
          return (
            <Bond 
              name={bond.name} 
              key={bond.id}
              id={bond.id}
              timeSinceLastInteraction={bond.timeSinceLastInteraction}
            />
          );
        })}
      </ul>
    </>
  )
}

export default BondsList;