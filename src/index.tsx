import React from 'react';

import { TestComponent } from '@components/test-component';
import ReactDOM from 'react-dom';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>,
  document.getElementById('root'),
);
