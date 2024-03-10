import React from "react";
import "./styles.css";
import "./Forcastdays.css";
import Day from "./Day";

export default function Forcastdays() {
  return (
    <div className="card-body">
      <h3>Next Days</h3>
      <div className="row prediction-week" id="forecast-daily">
        <Day temp={20} day="Thu" />
        <Day temp={17} day="Fri" />
        <Day temp={18} day="Sat" />
        <Day temp={19} day="Sun" />
        <Day temp={21} day="Mon" />
        <Day temp={22} day="Tue" />
      </div>
    </div>
  );
}
