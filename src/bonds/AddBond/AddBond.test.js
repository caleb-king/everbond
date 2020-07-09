import React from 'react';
import ReactDOM from 'react-dom';
import AddBond from './AddBond';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/bonds/add"]}>
      <Route path="/bonds/add/" render={() => (
        <AddBond />
      )} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});