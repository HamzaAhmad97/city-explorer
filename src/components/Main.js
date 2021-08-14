import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Fform from "./Fform";
//import Banner from "./Banner";
import City from "./City";
import Err from "./Err";
import Weather from "./Weather";
import Movies from "./Movies";
//import Weather from './Weather';
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      input: "",

      display_name: "",
      lon: "",
      lat: "",

      locationErr: false,
      weatherErr: false,
      moviesErr: false,

      wData: [],

      mData: [],

      loading: false,
    };
  }
  getDataFromDataHandler = (obj) => {
    this.setState({ ...obj });
    this.setState({
      locationErr: {
        status: this.state.locationErr,
        msg: "could not get location data, please try again.",
      },
      weatherErr: {
        status: this.state.weatherErr,
        msg: "could not get weather data, please try again.",
      },
      moviesErr: {
        status: this.state.moviesErr,
        msg: "could not get movies data, please try again.",
      },
    });
  };

  handleLoading = () => {
    this.setState({ loading: true });
  };
  render() {
    let locErr = this.state.locationErr.status;
    let wetErr = this.state.weatherErr.status;
    let movErr = this.state.moviesErr.status;
    return (
      <main className="w-75 m-auto ">
        <Row>
          <Fform
            sendDataToMain={this.getDataFromDataHandler}
            handleLoading={this.handleLoading}
          />
        </Row>
        <Row>
          {!(locErr && wetErr && movErr) ? (
            <Err
              errType={[
                this.state.locationErr,
                this.state.moviesErr,
                this.state.weatherErr,
              ]}
            />
          ) : undefined}
        </Row>
        <Row>
          {!locErr ? (
            <City
              lon={this.state.lon}
              lat={this.state.lat}
              display_name={this.state.display_name}
              show={this.state.display_name.length}
              loading={this.state.loading}
            />
          ) : undefined}
        </Row>

        {!wetErr ? <Weather data={this.state.wData} /> : undefined}
        {!movErr ? <Movies data={this.state.mData} /> : undefined}
        {/* <Row>{!(locErr && movErr && wetErr) ? <Banner /> : undefined}</Row> */}
      </main>
    );
  }
}
