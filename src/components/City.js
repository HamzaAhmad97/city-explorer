import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
export default class City extends Component {
  render() {
    console.log(this.props.show, '   ', this.props.loading);
    return (
      <Container
        className={
          !this.props.show
            ? "w-50 mb-4  pt-2 pb-2"
            : "w-50 mb-4 border rounded border-dark pt-2 pb-2"
        }
      >
        <Row>
          <h3>{this.props.display_name}</h3>
        </Row>
        <Row className="mb-2">
          <img
            src={
              !this.props.show
                ? this.props.loading
                  ? `https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif`
                  : `https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif`
                : `https://maps.locationiq.com/v3/staticmap?key=pk.4a782b6f22a6f448625817dfd828280a&center=${this.props.lat},${this.props.lon}&zoom=15`
            }
            alt="alt"
          ></img>
        </Row>
        <Row>
          {!this.props.show ? undefined : (
            <>
              {" "}
              <Col className="text-center">
                <strong>Latitude:</strong> {this.props.lat}
              </Col>
              <Col className="text-center">
                <strong>Longtude:</strong> {this.props.lon}
              </Col>
            </>
          )}
        </Row>
      </Container>
    );
  }
}
//https://i.gifer.com/embedded/download/24OD.gif
// `https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif`
// `https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif`
// border rounded border-dark
