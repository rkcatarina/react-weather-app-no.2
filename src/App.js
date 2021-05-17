import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Catarina Redshaw Kranich and is
        <a
          href="https://github.com/rkcatarina/react-weather-app-no.2"
          target="_blank"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
