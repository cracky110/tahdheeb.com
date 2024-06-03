import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("The root element was not found. Make sure you have an element with the ID 'root' in your HTML.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
