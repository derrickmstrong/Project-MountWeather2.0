import React from 'react';
import ReactDOM from 'react-dom';

import ByCity from './components/ByCity';
import ByCityId from './components/ByCityId';


ReactDOM.render(
  <React.StrictMode>
    <ByCity />
    <ByCityId />
  </React.StrictMode>,
  document.getElementById('root')
);
