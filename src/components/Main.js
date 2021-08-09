import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Fform from "./Fform";
import Banner from "./Banner";
import City from "./City";
import Err from "./Err";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      display_name: "",
      lon: "",
      lat: "",
      shErr: false,
      cityName: "",
      errExists: false,
      errMessage: "",
      shCity: false,
    };
  }
  getCityData = (obj) => {
    this.setState({
      ...obj,
    });
    if (this.state.errExists) {
      this.setState({
        shCity: false,
      });
    } else {
      this.setState({
        shCity: true,
      });
    }

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
        <Row>{!this.state.shCity ? <Banner /> : undefined}</Row>
      </main>
    );
  }
}
