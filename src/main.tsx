import { App } from './app';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const container = document.querySelector('#root');

if (!container) {
  throw new Error('There is no DOM element with a "root" ID.');
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
