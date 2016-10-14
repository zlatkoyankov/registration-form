import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/application';

//  noinspection Eslint
ReactDOM.render(
  <Application />,
  document.querySelector('.app-container')
);
