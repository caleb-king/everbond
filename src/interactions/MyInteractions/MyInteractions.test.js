import React from 'react';
import ReactDOM from 'react-dom';
import MyInteractions from './MyInteractions';
import STORE from '../../STORE';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/interactions"]}>
      <Route exact path="/interactions" render={() => (
          <MyInteractions 
            bonds={STORE.bonds} 
            interactions={STORE.interactions}
          />
        )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});