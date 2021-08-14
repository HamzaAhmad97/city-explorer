import React, { Component } from "react";

export default class Err extends Component {
  render() {
    let errArr = this.props.errType;
    return (
      <>
        {errArr
          .filter((itm) => itm.status)
          .map((itm) => (
            <div className="bg-warning w-50 align-middle m-auto p-3 rounded mb-3">
              {itm.msg}
            </div>
          ))}
      </>
    );
  }
}
