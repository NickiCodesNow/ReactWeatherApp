import React from "react";
import "./index.css";
import "./Currentweather.css";

export default function Currentweather() {
  return (
    <div className="Currentweather">
      <div className="row current-city">
        <div className="col-6">
          <h6 id="current-city">Berlin</h6>
          <ul>
            <li id="current-date">Today, 15:00 </li>
          </ul>
        </div>
      </div>
      <div className="temp-display">
        <div className="weather-picture">
          <img src="../images/Cloud.png" alt="Clear" id="weather-icon" />
          <span id="current-temp">18 </span>
          <span className="units">
          <button type="button" className="link-button active" id="celsius-link">
            °C{" "}
          </button>
          {" "} |{" "}
          <button type="button" className="link-button active" id="fahrenheit-link" style={{ textDecoration: "none" }}>
          °F{" "}
          </button>
          </span>
        </div>
      </div>
    </div>
  );
}
