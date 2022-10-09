import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { finalUrl } from './utils/common';
import axios from 'axios';
axios.defaults.baseURL = finalUrl();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
