import React from 'react';
import './BondsList.css';
import Bond from '../Bond/Bond';

function BondsList(props) {
  const { bonds, filterText } = props;
  
  const filteredBonds = bonds.filter(bond => bond.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);

  //sort bonds
  
  return (
    <ul className="bond-list">
      {filteredBonds.map(bond => {
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