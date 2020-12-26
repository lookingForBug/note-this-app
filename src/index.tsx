import React, { Suspense } from 'react';

import { Layout } from '@components/layout';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './styles/common.scss';

import { configureStore } from './store';

const store = configureStore();

const HomePage = React.lazy(() => import('@pages/home'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout>
          <Suspense fallback={<span>Loading...</span>}>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
