import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Fform from "./Fform";
import Banner from "./Banner";
import City from "./City";
import Err from "./Err";
import Weather from "./Weather";
import Movies from './Movies';
//import Weather from './Weather';
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      display_name: "",
      lon: "",
      lat: "",
      input: "",
      errExists: false,
      errMessage: "",
      shCity: false,
      shWeather: false,
      wData: [],
      mData: [],
      shMovies: false,
    };
  }
  getCityData = (obj) => {
    this.setState({
      ...obj,
    });
    console.log(this.state);
  };
  render() {
    return (
      <main className="w-75 m-auto ">
        <Row>
          <Fform getCityData={this.getCityData} />
        </Row>
        <Row>{this.state.errExists ? <Err /> : undefined}</Row>
        <Row>
          {this.state.shCity ? (
            <City
              lon={this.state.lon}
              lat={this.state.lat}
              display_name={this.state.display_name}
            />
          ) : undefined}
        </Row>

        {this.state.shWeather ? (
          <Weather data={this.state.wData} shW={this.state.shCity} />
        ) : undefined}
        {!this.state.mData.length ? undefined : <Movies  data={this.state.mData} shM={this.state.shM}/>}
        <Row>{!this.state.shCity ? <Banner /> : undefined}</Row>
      </main>
    );
  }
}
