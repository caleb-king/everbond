import React from 'react';
import ReactDOM from 'react-dom';
import AddInteraction from './AddInteraction';
import STORE from '../../STORE';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/interactions/add/"]}>
      <Route path="/interactions/add/" render={() => (
        <AddInteraction 
          bonds={STORE.bonds} 
        />
      )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});