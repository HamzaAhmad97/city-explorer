import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Movie from './Movie';
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

            <Movie key={i ** 2} title={itm.title} vote_average={itm.vote_average} popularity={itm.popularity} release_date={itm.release_date} poster_path={itm.poster_path} />

          );
        })}
      </Row>
    );
  }
}
