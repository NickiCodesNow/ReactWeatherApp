import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Searchbar from "./Searchbar";
import Currentweather from "./Currentweather";
import Forecasthours from "./Forecasthours";
import Forecastdays from "./Forecastdays";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="WeatherApp">
      <div className="container">
      <div className="card now">
        <Searchbar />
        <Currentweather />
      </div>
      <div className="card today">
        <Forecasthours />
      </div>
      <div className="card week">
        <Forecastdays />
      </div>
      <Footer />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
