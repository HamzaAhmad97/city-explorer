import React, { Component } from "react";
import { Nav, Navbar, Col } from "react-bootstrap";
import { BsFillCursorFill } from "react-icons/bs";
export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" id="home" className="w-100 border mb-3">
        <div className="d-flex w-75 m-auto">
          <Col>
            <Navbar.Brand href="#home">
              City Explorer <BsFillCursorFill />
            </Navbar.Brand>
          </Col>

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Col>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex justify-content-end w-100">
                <Nav.Link href="https://github.com/HamzaAhmad97">
                  GitHub
                </Nav.Link>
                <Nav.Link href="https://twitter.com/PhoenixRaSun">
                  Twitter
                </Nav.Link>
                <Nav.Link href="#link">About Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </div>
      </Navbar>
    );
  }
}
