import React from 'react';
import ReactDOM from 'react-dom';
import EditInteraction from './EditInteraction';
import STORE from '../../STORE';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/interactions/edit/2"]}>
      <Route path="/interactions/edit/:interactionID" render={() => (
        <EditInteraction 
          bonds={STORE.bonds} 
          interactions={STORE.interactions}
        />
      )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});