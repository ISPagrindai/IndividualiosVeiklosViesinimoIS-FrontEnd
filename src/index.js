import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component';
import App from './App';

ReactDOM.render(
  <>
  <ReactNotification />
    <App />
  </>,
  document.getElementById('root')
);
