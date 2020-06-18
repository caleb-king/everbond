import React from 'react';
import './BondsList.css';
import Bond from '../Bond/Bond';

function BondsList(props) {
  return (
    <ul className="bond-list">
      {props.bonds.map(bond => {
        return (
          <Bond 
            name={bond.name} 
            key={bond.id}
            id={bond.id}
          />
        );
      })}
    </ul>
  )
}

export default BondsList;