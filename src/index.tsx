import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterApp from './routes/RouterApp'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
