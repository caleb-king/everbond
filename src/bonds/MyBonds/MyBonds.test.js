import React from 'react';
import ReactDOM from 'react-dom';
import MyBonds from './MyBonds';
import STORE from '../../STORE';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/bonds"]}>
      <Route exact path="/bonds" render={() => (
          <MyBonds 
            bonds={STORE.bonds} 
            interactions={STORE.interactions}
          />
        )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});