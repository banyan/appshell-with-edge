import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  window.setTimeout(() => {
    render(<App />, rootElement);
  }, 1000);
}

// registerServiceWorker();
