import React, { Suspense } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './styles/common.scss';

const HomePage = React.lazy(() => import('@pages/home'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<span>Loading...</span>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
