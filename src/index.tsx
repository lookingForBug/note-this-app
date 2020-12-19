import React from 'react';

import { RouteApp } from '@components/route-app';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';
import './styles/common.scss';

const HomePage = React.lazy(() => import('@pages/home'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouteApp exact path="/" component={HomePage} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
