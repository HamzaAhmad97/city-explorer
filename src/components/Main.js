import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Fform from "./Fform";
import Banner from "./Banner";
import City from "./City";
import Err from "./Err";
import Weather from "./Weather";
//import Weather from "./Weather";
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
    };
  }
  getCityData = (obj) => {
    this.setState({
      ...obj,
    });
    // if (this.state.shCity) {
    //   this.setState({
    //     shCity: true,
    //   });
    // } else {
    //   this.setState({
    //     shCity: false,
    //   });
    // }
    // if (this.state.shWeather) {
    //   this.setState({
    //     shWeather: true,
    //   });
    // }
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

        {this.state.shWeather ? <Weather data={this.state.wData} shW={this.state.shCity} /> : undefined}

        <Row>{!this.state.shCity ? <Banner /> : undefined}</Row>
      </main>
    );
  }
}
