import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Movies extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-center m-3">
        <h3 className="text-center text-info m-5">
          <strong>Movies</strong>
        </h3>
        {true
          ? this.props.data.map((itm, i) => {
              return (
                <div key={i ** 2} className="border col-xl-3">
                  <h3 className="text-center m-3"> Title {itm.title}</h3>
                  <p className="text-center m-3">
                    Average rating: {itm.vote_average}
                  </p>
                  <p className="text-center m-3">
                    Popularity: {itm.popularity}
                  </p>
                  <p className="text-center m-3">
                    Release date: {itm.release_date}
                  </p>
                  <img
                    src={this.props.poster_path}
                    className="text-center m-3"
                    alt=""
                  />
                </div>
              );
            })
          : undefined}
      </Row>
    );
  }
}
