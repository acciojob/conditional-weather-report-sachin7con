import React, {useState, useEffect} from "react";


const WeatherDisplay = ({weatherState}) => {

    const myStyle = {
        color: weatherState.temperature > 20 ? "red" : "blue" ,
        fontSize: "20px",

    }

    return(
        <div>
           <p style={myStyle}> Temperature : {weatherState.temperature}°C </p>
           <p>Conditions: {weatherState.conditions}</p>
        </div>
    )
}


export default WeatherDisplay;