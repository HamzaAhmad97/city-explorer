import React, { Component } from 'react';

export default class WeatherDay extends Component {
  render() {
    return (
      <div

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
          Date: {this.props.date}
        </h3>
        <p
          className="text-center m-3"
          style={{
            fontWeight: "bold",
            padding: "0.5rem 0.5rem",
            borderRadius: " 0 0 15px 15px",
          }}
        >
          {this.props.description}
        </p>
      </div>
    )
  }
}


