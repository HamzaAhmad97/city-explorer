import React, { Component } from "react";
import { Row } from "react-bootstrap";
import WeatherDay from "./WeatherDay";
export default class Weather extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-center mb-1 ">
        <Row>
          {this.props.data.length !== 0 ? (
            <h2
              className="text-center text-primary m-auto mt-0 mb-1 w-50"
              style={{ padding: "1rem 0", borderRadius: "5px" }}
            >
              <strong>Weather data</strong>
            </h2>
          ) : undefined}
        </Row>
        {this.props.data.length !== 0
          ? this.props.data.map((itm, i) => {
            return (<WeatherDay key={i ** 2} date={itm.date} description={itm.description} />);
          })
          : undefined}
      </Row>
    );
  }
}
