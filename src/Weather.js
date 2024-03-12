import React, { useState } from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";

import Searchbar from "./Searchbar";
import Currentweather from "./Currentweather";
import Forecasthours from "./Forecasthours";
import Forecastdays from "./Forecastdays";
import Footer from "./Footer";

export default function Weather() {
  let [city, setCity] = useState("Berlin");
  let [weatherData, setWeatherData] = useState({ hasResponse: false });

  function callAPI() {
    const apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      hasResponse: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    callAPI();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.hasResponse) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card now">
            <Searchbar
              changeEvent={updateCity}
              submitEvent={handleSearchSubmit}
            />
            <Currentweather apiData={weatherData} />
          </div>
          <div className="card today">
            <Forecasthours />
          </div>
          <div className="card week">
            <Forecastdays coords={weatherData.coordinates} />
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    callAPI();
    return "Loading...";
  }
}
