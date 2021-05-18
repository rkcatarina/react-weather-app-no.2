import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Weather defaultCity="Rome" />
      <footer>
        This project was coded by Catarina Redshaw Kranich and is
        <a href="https://github.com/rkcatarina/react-weather-app-no.2">
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://github.com/rkcatarina/react-weather-app-no.2">
          <a href="https://dazzling-saha-075f21.netlify.app">
            hosted on Netlify
          </a>
        </a>
      </footer>
    </div>
  );
}
