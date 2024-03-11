import React from "react";
import "./index.css";
import "./Currentweather.css";

import Formatteddate from "./Formatteddate";
import CurrentTemperature from "./CurrentTemperature";

export default function Currentweather(props) {
  return (
    <div className="Currentweather">
      <div className="row current-city">
        <div className="col-6">
          <h6 id="current-city">{props.apiData.city}</h6>
            <div id="current-date">
              <Formatteddate date={props.apiData.date}/> 
              </div>
        </div>
      </div>
      <div className="temp-display">
        <div className="weather-picture">
          <img src={props.apiData.iconUrl} alt={props.apiData.description} id="weather-icon" />
          <CurrentTemperature tempdata={props.apiData.temp} />
        </div>
      </div>
    </div>
  );
}
