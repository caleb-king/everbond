import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { MemoryRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <Route exact path="/" component={LandingPage} />
    </MemoryRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});