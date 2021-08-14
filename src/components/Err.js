import React, { Component } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
export default class Err extends Component {
  render() {
    let errArr = this.props.errType;
    let overall = errArr[0].status || errArr[1].status || errArr[2].status;
    return (
      <div style={{ color: "white", marginTop: `${overall ? "20%" : "0"}` }}>
        {errArr
          .filter((itm) => itm.status)
          .map((itm, i) => (
            <div
              key={i ** 2}
              className=" w-50 align-middle m-auto p-3 rounded mb-3 text-center"
              style={{ backgroundColor: "red" }}
            >
              {itm.msg} <BsFillExclamationTriangleFill/>
            </div>
          ))}
      </div>
    );
  }
}
