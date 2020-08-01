import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import STORE from './STORE';
import ScrollToTop from './ScrollToTop/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App store={STORE} />
  </BrowserRouter>,
  document.getElementById('root')
);
