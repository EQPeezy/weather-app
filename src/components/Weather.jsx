import React from "react";

const Weather = props => (
    <div>
        {props.city && props.country && (<p>Location: {props.city}, {props.country}</p>)}
        {props.temperature && <p>Temp: {props.temperature}</p>}
        {props.description && <p>Condition: {props.description}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.error && <h2>{props.error}</h2>}
    </div>
)

export default Weather;