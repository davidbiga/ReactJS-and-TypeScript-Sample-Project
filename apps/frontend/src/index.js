import React from 'react';
// use dotenv instead for .env
import { NASA_KEY } from './vars';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store, { persistor } from './_redux/store';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} persistor={persistor} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
