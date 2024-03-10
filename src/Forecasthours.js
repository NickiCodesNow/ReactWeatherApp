import React from "react";
import "./index.css";
import "./Forecasthours.css";
import Hour from "./Hour";

export default function Forcasthours() {
  return (
    <div className="card-body">
      <h3>Next Hours</h3>
      <div className="row prediction-today-icons" id="forecast-hourly">
        <Hour temp={17} time="13:00" />
        <Hour temp={18} time="16:00" />
        <Hour temp={19} time="19:00" />
        <Hour temp={20} time="22:00" />
      </div>
    </div>
  );
}
