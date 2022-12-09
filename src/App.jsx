import React, { useState } from 'react'


function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  function increaseTemp() {
    if (temperatureValue === 30) {
      return;
    }
    setTemperatureValue((temperatureValue) => temperatureValue + 1);
    if (temperatureValue >= 15) {
      setTemperatureColor("hot");
    }
  }
  function decreaseTemp() {
    if (temperatureValue === 0) {
      return;
    }
    setTemperatureValue((temperatureValue) => temperatureValue - 1);
    if (temperatureValue < 20) {
      setTemperatureColor("cold");
    }
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
}

export default App;