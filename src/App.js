import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

//Assigning API key from OpenWeaterApp website
const API_key = "1ffd288191349931c866b38c3ba0c51e";

export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  //Defining getWeather function that calls the correct URL
  getWeather = async e => {
    // e.preventDefault() will stop the page from doing the default action of refreshing on a
    //form submit
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const API_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}id=524901&APPID=${API_key}`
    );

    // the .json() portion, converts whatever is returned into API_call into readable
    // JS to be displayed within the component --> stored in the constant "data"
    const data = await API_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState ({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter values",
      })
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
