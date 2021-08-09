import React, { Component } from "react";

export default class Err extends Component {
  render() {
    return (
      <div className="bg-warning w-50 align-middle m-auto p-3 rounded mb-3">
        Error in parsing your request
      </div>
    );
  }
}
