import React from 'react';
import ReactDOM from 'react-dom';
import EditBond from './EditBond';
import STORE from '../../STORE';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/bonds/edit/1"]}>
      <Route path="/bonds/edit/:bondID" render={() => (
          <EditBond 
            bonds={STORE.bonds}
          />
        )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});