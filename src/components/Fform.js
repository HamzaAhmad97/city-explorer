import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import DataHandler from "./DataHandler";
require("dotenv").config();
//const PORT = process.env.PORT;
//const LIQ_TOKEN = process.env.LIQ_TOKEN;
export default class Fform extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      display_name: "",
      lon: "",
      lat: "",
      cityName: "",
      errExists: false,
      errMessage: "",
      wData: [],
      shWeather: false,
      shCity: false,
      mData: [],
      shMovies: false,

      // send data to datahandler ?
      send: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      send: true,
    });
    this.props.handleLoading();
  };

  getWeather = () => {
    let urlW = `http://localhost:8080/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.input}`;
    axios
      .get(urlW)
      .then((res) => {
        this.setState({ wData: res.data, shWeather: true });
      })
      .catch((err) => {
        this.setState({
          shWeather: false,
          errExists: true,
          errMessage: "Error retreiving weather data. ",
        });
      });
    this.showMovies();
  };

  showMovies = () => {
    let urlM = `http://localhost:8080/movies?cityName=${this.state.input}`;
    axios
      .get(urlM)
      .then((res) => {
        this.setState({
          mData: res.data.map((itm) => itm.title),
          shMovies: true,
        });
      })
      .catch((err) => {
        this.setState({
          shMovies: false,
          errExists: true,
          errMessage: "Error retreiving movies data. ",
        });
      });
  };

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  render() {
    return (
      <div className="w-50 mb-3  m-auto ml-0 mr-0 p-0">
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          className="d-flex flex-column rounded  align-self-center  w-100 "
        >
          <Form.Group className="mb-3 p-0" controlId="formBasicEmail">
            <input
              id="cityInput"
              type="text"
              placeholder="Los Angeles"
              className="w-100"
              onChange={this.handleInput}
            ></input>
          </Form.Group>
          <Button variant="primary" type="submit" className="align-self-center">
            Explore!
          </Button>
        </Form>
        {this.state.send ? (
          <DataHandler
            cityEntry={this.state.input}
            sendDataToMain={this.props.sendDataToMain}
          />
        ) : undefined}
      </div>
    );
  }
}
