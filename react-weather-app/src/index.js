import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="WeatherApp">
      <div className="card now">
        <Searchbar />
        <Currentweather />
      </div>
      <div className="card today">
        <Forcasthours />
      </div>
      <div className="card week">
        <Forcastdays />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();
