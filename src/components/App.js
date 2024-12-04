//SGN
import React, {useState, useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherState, setWeatherState] = useState({temperature: 0, conditions: ""});
  
  useEffect(() => {
      const weatherData = {temperature: 25, conditions: "Sunny"};
      setWeatherState(weatherData);
  }, []);
  return (
    <div>
        {/*ONS Do not remove the main div */}
        <WeatherDisplay weatherState={weatherState} />
    </div>
  )
}

export default App
