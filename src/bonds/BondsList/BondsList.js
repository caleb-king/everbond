import React from 'react';
import './BondsList.css';
import Bond from '../Bond/Bond';

function BondsList(props) {
  return (
    props.bonds.map(bond => {
      return (
        <Bond 
          name={bond.name} 
          key={bond.id}
          id={bond.id}
        />
      );
    })
  )
}

export default BondsList;