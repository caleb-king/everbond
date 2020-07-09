import React from 'react';
import ReactDOM from 'react-dom';
import ViewBond from './ViewBond';
import STORE from '../../STORE';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/bonds/view/2"]}>
      <Route path="/bonds/view/:bondID" render={() => (
          <ViewBond bonds={STORE.bonds} />
        )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});