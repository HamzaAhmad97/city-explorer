import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Weather extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-center m-3">
        {this.props.shW ? (
          <h3 className="text-center text-info m-5">
            <strong>Weather Data</strong>
          </h3>
        ) : undefined}
        {this.props.data.length !== 0 && this.props.shW
          ? this.props.data.map((itm, i) => {
              return (
                <div key={i ** 2} className="border col-xl-3">
                  <h3 className="text-center m-3"> Date: {itm.date}</h3>
                  <p className="text-center m-3">{itm.description}</p>
                </div>
              );
            })
          : undefined}
      </Row>
    );
  }
}
