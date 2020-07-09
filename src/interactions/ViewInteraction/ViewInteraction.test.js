import React from 'react';
import ReactDOM from 'react-dom';
import ViewInteraction from './ViewInteraction';
import STORE from '../../STORE';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/interactions/view/1"]}>
      <Route path="/interactions/view/:interactionID" render={() => (
        <ViewInteraction 
          bonds={STORE.bonds} 
          interactions={STORE.interactions}
        />
      )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});