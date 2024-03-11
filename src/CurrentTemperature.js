import React, {useState} from "react";

export default function CurrentTemperature (props){
    let [units, setUnits] = useState("celsius");

    function showCelcius (event) {
        event.preventDefault();
        setUnits("celsius")
    }

    function showFahrenheit (event) {
        event.preventDefault();
        setUnits("fahrenheit")
    }

    function calculateFahrenheit(){
        return Math.round((props.tempdata * 9)/5 + 32);
    }


    if(units === "celsius") {
        return (
            <div className="Currenttemperature">
                <span id="current-temp">{props.tempdata} </span>
                <span className="units">
                    <a href="/"  className="active" id="celsius-link" style={{ textDecoration: "none" }}>
                    °C{" "} 
                    </a>
                    {" "} |{" "}
                    <a href="/"  id="fahrenheit-link" onClick={showFahrenheit}>
                    °F{" "}
                    </a>
                </span>
              </div>
        )
    } else {
        return (
            <div className="Currenttemperature">
                <span id="current-temp">{calculateFahrenheit()} </span>
                <span className="units">
                    <a href="/"  id="celsius-link" onClick={showCelcius}>
                    °C{" "}
                    </a>
                    {" "} |{" "}
                    <a href="/"  className="active" id="fahrenheit-link" style={{ textDecoration: "none" }}>
                    °F{" "}
                    </a>
                </span>
              </div>
        )
    }
}