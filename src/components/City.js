import React, { Component } from "react";
import {  Row, Card } from "react-bootstrap";
export default class City extends Component {
  render() {
    return (
      <Card className='m-3 border rounded col-xl-2 d-flex flex-column mh-100 '>
        <Card.Body>
          <Card.Title className='d-inline-block mb-5 pb-3'>{this.props.cityDisp}</Card.Title>
          <Card.Text>
            <Row><p>Longitude: <strong className='d-inline'>{this.props.cityLon}</strong></p></Row>
            <Row><p>Latitude:      <strong>{this.props.cityLat}</strong></p></Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
