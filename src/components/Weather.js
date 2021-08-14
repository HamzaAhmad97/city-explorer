import React, { Component } from "react";
import { Row } from "react-bootstrap";

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
              return (
                <div
                  key={i ** 2}
                  className=" col-xl-3 p-0 "
                  style={{ borderRadius: "25px", margin: "0rem" }}
                >
                  <h3
                    className="text-center m-3 "
                    style={{
                      backgroundColor: "#000112",
                      color: "white",
                      padding: "0.5rem 0",
                      borderRadius: " 15px 15px 0 0",
                    }}
                  >
                    {" "}
                    Date: {itm.date}
                  </h3>
                  <p
                    className="text-center m-3"
                    style={{
                      fontWeight: "bold",
                      padding: "0.5rem 0.5rem",
                      borderRadius: " 0 0 15px 15px",
                    }}
                  >
                    {itm.description}
                  </p>
                </div>
              );
            })
          : undefined}
      </Row>
    );
  }
}
