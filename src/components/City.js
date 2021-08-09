import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
export default class City extends Component {
  render() {
    return (
      <Container className="w-50 mb-3 border rounded border-dark pt-2 pb-2">
        <Row>
          <h3>{this.props.display_name}</h3>
        </Row>
        <Row className="mb-2">
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.4a782b6f22a6f448625817dfd828280a&center=${this.props.lat},${this.props.lon}&zoom=15`}
            alt="alt"
          ></img>
        </Row>
        <Row>
          <Col className="text-center">
            <strong>Latitude:</strong> {this.props.lat}
          </Col>
          <Col className="text-center">
            <strong>Longtude:</strong> {this.props.lon}
          </Col>
        </Row>
      </Container>
    );
  }
}
