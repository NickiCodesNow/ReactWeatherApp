import React, { useState } from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";

import Searchbar from "./Searchbar";
import Currentweather from "./Currentweather";
import Forecasthours from "./Forecasthours";
import Forecastdays from "./Forecastdays";
import Footer from "./Footer";

import { TemperatureUnitContext } from "./TemperatureUnitContext";

export default function Weather() {
  let [city, setCity] = useState("Berlin");
  let [weatherData, setWeatherData] = useState({ hasResponse: false });
  const [unit, setUnit] = useState("C"); // "C" for Celsius, "F" for Fahrenheit

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          callAPIByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation is not allowed.");
          alert(
            "Geolocation is not activated. To use this feature, please activate it in your browser settings."
          );
        }
      );
    } else {
      alert("Geolocation is not available in this browser.");
    }
  };

  function callAPIByCoordinates(lat, lon) {
    const apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      axios.get(apiUrl).then(handleResponse);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  function callAPIByCity() {
    const apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      axios.get(apiUrl).then(handleResponse);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  function handleResponse(response) {
    setWeatherData({
      hasResponse: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      timezone: response.data.timezone,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    callAPIByCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.hasResponse) {
    return (
      <TemperatureUnitContext.Provider value={{ unit, setUnit }}>
        <div className="Weather">
          <div className="container">
            <div className="card now">
              <Searchbar
                changeEvent={updateCity}
                submitEvent={handleSearchSubmit}
                searchLocationEvent={getCurrentLocation}
              />
              <Currentweather apiData={weatherData} />
            </div>
            <div className="card today">
              <Forecasthours coords={weatherData.coordinates} />
            </div>
            <div className="card week">
              <Forecastdays coords={weatherData.coordinates} />
            </div>
            <Footer />
          </div>
        </div>
      </TemperatureUnitContext.Provider>
    );
  } else {
    callAPIByCity();
    return "Loading...";
  }
}
