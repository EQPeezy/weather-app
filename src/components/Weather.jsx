import React from "react";

const Weather = props => (
    <div className="weather-info">
        {
            props.city && props.country && (<h2 className="weather__key">Location: 
                <span className="weather__value"> {props.city}, {props.country}</span></h2>)
        }
        {
            props.temperature && <h2 className="weather__key">Temp: <span className="weather__value">{props.temperature}</span></h2>
        }
        {
            props.description && <h2 className="weather__key">Condition: <span className="weather__value">{props.description}</span></h2>
        }
        {
            props.humidity && <h2 className="weather__key">Humidity: <span className="weather__value"> {props.humidity}%</span></h2>
        }
        {
            props.error && <h2 className="weather__error"> <span className="weather__value">{props.error} </span> </h2>
        }
    </div>
)

export default Weather;