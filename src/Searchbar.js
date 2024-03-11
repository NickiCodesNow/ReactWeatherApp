import React from "react";
import "./index.css";
import "./Searchbar.css";

export default function Searchbar(props) {
  return (
      <form id="search-bar" onSubmit={props.submitEvent}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city"
            id="enter-city"
            autoFocus="on"
            onChange={props.changeEvent}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="submit-button"
            >
              🔍
            </button>
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="current-Location-button"
            >
              Current Location
            </button>
          </div>
        </div>
      </form>
    );
  }
