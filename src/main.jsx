import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MediaProvider } from './contexts/MediaContext';
import App from './App.jsx';
import './index.css';

BrowserRouter;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MediaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MediaProvider>
  </React.StrictMode>
);
