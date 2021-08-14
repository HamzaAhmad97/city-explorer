import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Movies extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-center pb-3 ">
        <Row>
          {this.props.data.length !== 0 ? (
            <h2
              className="text-center text-primary m-auto mt-0 mb-3 w-50"
              style={{ padding: "1rem 0", borderRadius: "5px" }}
            >
              <strong>Related movies</strong>
            </h2>
          ) : undefined}
        </Row>
        {this.props.data.map((itm, i) => {
          return (
            <div
              key={i ** 2}
              className="border col-xl-3 p-0 border-primary"
              style={{ margin: "0.5rem", borderRadius: "25px" }}
            >
              <h3
                className="text-center m-3"
                style={{
                  backgroundColor: "#000112",
                  color: "white",
                  padding: "0.5rem 0",
                  borderRadius: " 15px 15px 0 0",
                }}
              >
                {" "}
                {itm.title}
              </h3>
              <p className="text-center m-3">
                Average rating: {itm.vote_average}
              </p>
              <p className="text-center m-3">Popularity: {itm.popularity}</p>
              <p className="text-center m-3">
                Release date: {itm.release_date}
              </p>
              <div
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  height: "auto",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`http://image.tmdb.org/t/p/w500//${itm.poster_path}`}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          );
        })}
      </Row>
    );
  }
}
