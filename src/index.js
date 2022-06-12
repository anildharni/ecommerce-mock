import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreContextProvider } from './store/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StoreContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StoreContextProvider>
  </Router >
);

