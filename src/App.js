import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row className="d-flex justify-content-between">
          <Header />
        </Row>
        <Row>
          <Main />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}
